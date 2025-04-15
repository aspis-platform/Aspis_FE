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
import StaffInvite from "./pages/management/StaffInvite";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/Layout/PrivateRoute";

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
    <UserProvider>
      <Routes>
        <Route element={<ToastLayout />}>
          {/* 인증 필요 없는 라우트 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignupPage />} />

          {/* 인증 필요하고 네비게이션 바 있는 라우트 */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/staff-manage" element={<StaffManagement />} />
              <Route path="/dog-manage" element={<DogManagement />} />
              <Route path="/staff-invite" element={<StaffInvite />} />
            </Route>

            {/* 인증 필요하고 네비게이션 바 없는 라우트 */}
            <Route path="/re-auth" element={<ReAuth />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
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
