import MobileNav from "@/components/MobileNav";
import MobileNavbar from "@/components/NewMobileNav";
import NewSidebar from "@/components/NewSidebar";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({
  children,
}: Readonly<Props>) => {

  const loggedIn = {firstName: "Isidro", lastName: "Leonyork"}

  return (
    <main className="flex h-screen w-full font-inter">
      <NewSidebar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
