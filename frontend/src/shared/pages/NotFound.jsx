import Container from "../components/Container";
import { LOCAL_URL } from "../../Constants";

const NotFound = (props) => {
  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Page is not available!</h2>
      </div>
      {props.loggedIn ? (
        <p>The page you are looking for is not available.</p>
      ) : (
        <p>
          The page you are looking for is not available. Please{" "}
          <a href={`${LOCAL_URL}login`} className="text-blue-600 font-bold">
            LOGIN
          </a>{" "}
          or{" "}
          <a href={`${LOCAL_URL}register`} className="text-blue-600 font-bold">
            REGISTER
          </a>{" "}
          if you don't have an account.
        </p>
      )}
    </Container>
  );
};

export default NotFound;
