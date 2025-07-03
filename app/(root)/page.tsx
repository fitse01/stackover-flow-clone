import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import React, { use } from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <form
        className="px-6 pt-[100px] "
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
};

export default Home;
