import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import Register from "./auth/pages/Register";
// import Login from "./auth/pages/Login";
// import Logout from "./auth/pages/Logout";
import Navbar from "./shared/components/Navbar";
// import Home from "./shared/pages/Home";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/LoadingSpinner";
// import Patients from "./patients/pages/Patients";
// import AddPatient from "./patients/pages/AddPatient";
// import PatientDetail from "./patients/pages/PatientDetail";
// import Profile from "./auth/pages/Profile";
// import NotFound from "./shared/pages/NotFound";

// Lazy loading
const Register = React.lazy(() => import("./auth/pages/Register"));
const Login = React.lazy(() => import("./auth/pages/Login"));
const Logout = React.lazy(() => import("./auth/pages/Logout"));
const Home = React.lazy(() => import("./shared/pages/Home"));
const Patients = React.lazy(() => import("./patients/pages/Patients"));
const AddPatient = React.lazy(() => import("./patients/pages/AddPatient"));
const PatientDetail = React.lazy(() =>
  import("./patients/pages/PatientDetail")
);
const Profile = React.lazy(() => import("./auth/pages/Profile"));
const NotFound = React.lazy(() => import("./shared/pages/NotFound"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/patients" element={<Patients />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/patientdetail/:id" element={<PatientDetail />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound loggedIn={true} />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound loggedIn={false} />} />
      </Routes>
    );
  }

  return (
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
        <Navbar />
        <main>
          <div className="hospital_bg flex justify-center min-h-screen py-32 px-10">
            <Suspense
              fallback={
                <div className="flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </div>
        </main>
      </BrowserRouter>
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default App;
