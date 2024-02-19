import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import UserProfile from "./features/UserProfile/UserProfile";
import { selectAuth } from "./redux/reducers/authSlice";

const App = () => {
  const auth = useSelector(selectAuth);

  const isAuthenticated = auth.isLoggedIn;
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
