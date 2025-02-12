import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .login {
    width: 500px;
    height: max-content;

    .loginGroups {
      .loginGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        &:last-child {
          display: block;
          width: max-content;
          margin: 50px auto 0 auto;
        }

        label {
          margin-bottom: 5px;
          font-size: 20px;
        }

        input {
          height: 40px;
          border: none;
          outline: none;
          border-bottom: 1px solid #2c2c2c;
          border-radius: 3px;
          padding: 0 10px;
          background-color: transparent;
          font-size: 18px;
        }

        button {
          background-color: transparent;
          border: none;
          transition: all 0.3s ease-in-out;
          font-size: 30px;

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
  }
`;
