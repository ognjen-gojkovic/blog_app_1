import styled from "styled-components";

export const NotFoundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;

    .notFoundSubtitle {
      font-size: 60px;
    }

    .notFoundTitle {
      font-size: 80px;
    }

    a {
      font-size: 30px;
      margin-top: 50px;
      display: inline-block;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background-color: #000;
        transition: width 0.3s ease-in-out;
        border-radius: 3px;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
