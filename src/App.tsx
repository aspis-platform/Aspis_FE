import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/homepage/NavBar";
import Footer from "./components/homepage/Footer";
import HomepageMain from "./pages/homepage/HomepageMain";
import styled from "styled-components";

function Layout() {
  return (
    <StyledDiv>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomepageMain />} />
      </Route>
    </Routes>
  );
}

export default App;
