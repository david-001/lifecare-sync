const Button = (props) => {
  const { variant, type, onClick, children } = props;
  let bgColor;
  let bgColorHover;
  switch (variant) {
    case "primary":
      bgColor = "bg-blue-500";
      bgColorHover = "bg-blue-700";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      bgColorHover = "bg-yellow-700";
      break;
    case "danger":
      bgColor = "bg-red-500";
      bgColorHover = "bg-red-700";
      break;
    default:
      bgColor = "bg-blue-500";
      bgColorHover = "bg-blue-700";
      break;
  }
  return (
    <button
      className={`block ${bgColor} text-white font-bold py-2 px-6 hover:${bgColorHover}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
