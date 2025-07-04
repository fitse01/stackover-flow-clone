"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900  body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 ";

  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME, // Redirect to home page after successful sign-in
        // redirect: false, // Prevent automatic redirection
      });
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred during signin.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        ></Image>
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        ></Image>
        <span>Log in with Google </span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
