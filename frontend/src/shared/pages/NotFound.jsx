import Container from "../components/Container";

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
          <a
            href={`${process.env.REACT_APP_SERVER_URL}login`}
            className="text-blue-600 font-bold"
          >
            LOGIN
          </a>{" "}
          or{" "}
          <a
            href={`${process.env.REACT_APP_SERVER_URL}register`}
            className="text-blue-600 font-bold"
          >
            REGISTER
          </a>{" "}
          if you don't have an account.
        </p>
      )}
    </Container>
  );
};

export default NotFound;
