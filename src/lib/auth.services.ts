import db from "@/prisma";
import bcrypt from "bcrypt";
import { RequestInternal } from "next-auth";

const getUserByEmail = async ({ email }: { email: string }) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};

const hashPassword = async ({
  password,
  saltRounds = 10,
}: {
  password: string;
  saltRounds?: number;
}): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async ({
  password,
  hashPassword,
}: {
  password: string;
  hashPassword: string;
}): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};

const AuthorizeLogin = async (
  credentials: Record<"email" | "password", string> | undefined,
  req: Pick<RequestInternal, "query" | "body" | "headers" | "method">
) => {
  if (credentials) {
    const { email, password } = credentials;

    const user = await getUserByEmail({ email });

    if (!user) return null;

    const matchPassword = await comparePassword({
      password,
      hashPassword: user.password,
    });

    if (!matchPassword) return null;

    return user;
  }

  return null;
};

export { getUserByEmail, hashPassword, comparePassword, AuthorizeLogin };
