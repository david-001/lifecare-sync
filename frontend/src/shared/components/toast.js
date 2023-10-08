import { toast } from "react-toastify";

const handleSuccess = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

const handleError = (err) =>
  toast.error(err, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

export { handleError };
export default handleSuccess;
