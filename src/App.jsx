import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import { RouterProvider } from "./context/RouterContext";
import AdminCont from "./pages/Admin/AdminSidebar";
import UserCont from "./pages/User/UserSidebar";
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      {/* <RouterProvider> */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<AdminCont />}></Route>
          <Route path="/user" element={<UserCont />}></Route>
        </Routes>
        <ToastContainer />
      </Router>
      {/* <LandingPage /> */}

      <Footer />
      {/* </RouterProvider> */}
    </>
  );
}

export default App;
