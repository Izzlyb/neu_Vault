import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({
  children,
}: Readonly<Props>) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default RootLayout;
