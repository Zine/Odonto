import Navbar from "@/components/ui/Navbar";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();

  if (!session) redirect("/api/auth/signin", RedirectType.replace);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
