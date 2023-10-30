import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, link, imgsrc, imgalt } = props;

  return (
    <div className="w-80 h-96 relative overflow-auto shadow-lg bg-blue-600">
      <div className="font-semibold text-center text-white p-4">{title}</div>
      <div className="w-full h-60 flex justify-center items-center">
        <img className="w-60 h-60" src={imgsrc} alt={imgalt} />
      </div>
      <div className="w-full h-9 absolute bottom-0 text-center">
        <Link className="text-white hover:text-blue-300" to={link}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
