import React, { ReactNode } from "react";
import Navbar from "@/components/navigation/navbar";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
