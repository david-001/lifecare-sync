import Container from "../components/Container";

const Home = () => {
  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Welcome to Lifecare Sync!</h2>
      </div>
      <p>
        This app is designed for medical practitioners to observe and revise
        patient statuses, medications, therapies, and other crucial particulars.
        Please{" "}
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
    </Container>
  );
};

export default Home;
