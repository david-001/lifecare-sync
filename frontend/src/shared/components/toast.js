import { toast } from "react-toastify";

const handleSuccess = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const handleError = (err) =>
  toast.error(err, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });

export { handleError };
export default handleSuccess;
