const Button = (props) => {
  const { variant, label_txt, type, onClick } = props;
  let bgcolor = "bg-blue-600";
  switch (variant) {
    case "primary":
      bgcolor = "bg-blue-600";
      break;
    case "warning":
      bgcolor = "bg-yellow-500";
      break;
    case "danger":
      bgcolor = "bg-red-600";
      break;
    default:
      bgcolor = "bg-blue-600";
      break;
  }
  return (
    <button
      className={`block ${bgcolor} text-white font-bold py-2 px-6`}
      type={type}
      onClick={onClick}
    >
      {label_txt}
    </button>
  );
};
export default Button;
