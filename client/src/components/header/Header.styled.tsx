import styled from "styled-components";

export const HeaderStyled = styled.header`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  height: 100px;

  display: flex;
  align-items: center;

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .headerLeft {
      a {
        font-size: 50px;
      }
    }

    .headerMiddle,
    .headerRight {
      display: flex;
      align-items: center;
    }

    .headerMiddle ul,
    .headerRight ul {
      display: flex;

      & li {
        margin: 0 15px;
        font-size: 20px;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          background-color: #2c2c2c;
          transition: width 0.3s ease-in-out;
          border-radius: 3px;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;
