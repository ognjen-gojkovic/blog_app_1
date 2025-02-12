import React, { PropsWithChildren } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { LayoutStyled } from "./Layout.styled";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
