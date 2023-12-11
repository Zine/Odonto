import { registerUser } from "@/server/actions/form/register.user.action";

const Page = () => {
  return (
    <>
      <form action={registerUser}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Page;
