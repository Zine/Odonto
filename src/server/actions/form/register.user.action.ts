"use server";

import { hashPassword } from "@/lib/auth.services";
import db from "@/prisma";

const registerUser = async (data: FormData) => {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const confirmPassword = data.get("confirmPassword") as string;

  if (!name || !email || !password || !confirmPassword) return null;

  if (password !== confirmPassword) return null;

  return await db.user.create({
    data: {
      name,
      email,
      password: await hashPassword({ password }),
    },
  });
};

export { registerUser };
