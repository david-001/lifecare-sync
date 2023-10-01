import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, link, imgsrc, imgalt } = props;

  return (
    <div className="w-full overflow-auto shadow-lg bg-blue-600">
      <div className="font-semibold text-center text-white py-2">{title}</div>
      <img className="w-full" src={imgsrc} alt={imgalt} />
      <div className="text-center py-3">
        <Link style={{ color: "white" }} to={link}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
