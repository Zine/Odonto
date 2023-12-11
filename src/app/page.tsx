import { RedirectType, redirect } from "next/navigation";

const Page = () => {
  redirect("/dashboard", RedirectType.replace);
};

export default Page;
