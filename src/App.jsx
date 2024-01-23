import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import UserProfile from "./features/UserProfile/UserProfile";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
