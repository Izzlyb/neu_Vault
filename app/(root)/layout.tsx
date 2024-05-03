import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({
  children,
}: Readonly<Props>) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default RootLayout;
