import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./users/components/Login";
import Register from "./users/components/Register";
import Patients from "./patients/components/Patients";
import Logout from "./users/components/Logout";
import Header from "./shared/components/Header";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import UpdatePassword from "./users/components/UpdatePassword";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/patients" element={<Patients />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="bgcolor">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <BrowserRouter>
          <Header />
          {routes}
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
