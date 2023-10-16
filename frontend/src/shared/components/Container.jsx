const Container = (props) => {
  const { children } = props;
  return (
    // <div className="bg-white p-10 shadow md:w-3/4 lg:w-1/2 mx-auto">
    <div className="bg-white w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl p-10 mx-auto">
      {children}
    </div>
  );
};

export default Container;
