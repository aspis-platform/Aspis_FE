import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SideNav from "./components/Layout/SideNav";
import LoginPage from "./pages/authentication/LoginPage";
import SignupPage from "./pages/authentication/SignupPage";
import HomePage from "./pages/Home/HomePage";
import ReAuth from "./pages/authentication/ReAuth";
import Mypage from "./pages/authentication/Mypage";
import StaffManagement from "./pages/management/StaffManagement";
import DogManagement from "./pages/management/DogManagement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <>
      <StyledDiv>
        <SideNav />
        <Outlet />
      </StyledDiv>
    </>
  );
}

function ToastLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        theme="colored"
        pauseOnHover
      />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToastLayout />}>
        {/* 사이드 네비게이션 있는 페이지들 */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/staff-manage" element={<StaffManagement />} />
          <Route path="/dog-manage" element={<DogManagement />} />
        </Route>

        {/* 사이드 네비게이션 없는 페이지들 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/re-auth" element={<ReAuth />} />
      </Route>
    </Routes>
  );
}

const StyledDiv = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

export default App;
