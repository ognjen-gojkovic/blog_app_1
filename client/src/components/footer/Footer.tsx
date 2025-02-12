import React from "react";
import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <p className="footerCopyright">
          &copy; 2025. All Rights Reserved. Powered by Ognjen Gojković.
        </p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
