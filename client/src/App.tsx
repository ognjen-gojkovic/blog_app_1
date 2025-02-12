import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/notFound/NotFound";
import styled from "styled-components";
import { GlobalStyle } from "./utils/globalStyle";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
