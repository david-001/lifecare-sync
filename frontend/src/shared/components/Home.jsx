import React, { useContext } from "react";
import Patients from "../../patients/components/Patients";
import { AuthContext } from "../../shared/context/auth-context";

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="homeContainerMiddleBody">
      <div className="hold-afterpicture">
        <h2 className="h2lifecaresync">Lifecare Sync</h2>

        <h3>See the Patients</h3>
        {auth.userId ? <Patients /> : <p>Login to see patients.</p>}
      </div>
    </div>
  );
};

export default Home;
