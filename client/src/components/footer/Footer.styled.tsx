import styled from "styled-components";

export const FooterStyled = styled.footer`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  height: 100px;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .footerCopyright {
      font-size: 18px;
    }
  }
`;
