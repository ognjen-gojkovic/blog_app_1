import React from "react";
import { NotFoundStyled } from "./NotFound.styled";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div className="notFound">
        <h3 className="notFoundSubtitle">Error 404</h3>
        <h1 className="notFoundTitle">Page Not Found!</h1>
        <Link to="/">Back To Home</Link>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
