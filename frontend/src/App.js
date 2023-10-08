import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Register from "./auth/pages/Register";
import Login from "./auth/pages/Login";
import Logout from "./auth/pages/Logout";
import Navbar from "./shared/components/Navbar";
import Home from "./patients/pages/Home";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import Patients from "./patients/pages/Patients";
import AddPatient from "./patients/pages/AddPatient";

// import Home from "./shared/components/Home";
// import Login from "./users/components/Login";
// import Register from "./users/components/Register";
// import Logout from "./users/components/Logout";
// import Header from "./shared/components/Header";
// import AddPatient from "./patients/components/AddPatient";
// import PatientDetail from "./patients/components/PatientDetail";
// import UpdatePassword from "./users/components/UpdatePassword";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
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
          <div className="bg-gradient-to-b from-blue-500 to-blue-50 min-h-screen py-20 px-10">
            {routes}
          </div>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
  // const { token, login, logout, userId } = useAuth();
  // let routes;
  // if (token) {
  //   routes = (
  //     <Routes>
  //       <Route path="/patientdetail/:id" element={<PatientDetail />} />
  //       <Route path="/addpatient" element={<AddPatient />} />
  //       <Route path="/updatepassword" element={<UpdatePassword />} />
  //       <Route path="/logout" element={<Logout />} />
  //       <Route path="/" element={<Home />} />
  //     </Routes>
  //   );
  // } else {
  //   routes = (
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   );
  // }
  // return (
  //   <div className="bgcolor">
  //     <AuthContext.Provider
  //       value={{
  //         isLoggedIn: !!token,
  //         token: token,
  //         userId: userId,
  //         login: login,
  //         logout: logout,
  //       }}
  //     >
  //       <BrowserRouter>
  //         <Header />
  //         {routes}
  //       </BrowserRouter>
  //     </AuthContext.Provider>
  //   </div>
  // );
};

export default App;
