import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const copynotify = () => {
  toast("🪄 Just Magically Copied my Email", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
  <ToastContainer />;
};
export const redirectnotify = () => {
  toast("⤴️ Redirecting your way !", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
  <ToastContainer />;
};
export const downloadnotify = () => {
  toast(" 👨‍💻 Thanks For Downloading !", {
    position: "bottom-right",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
  <ToastContainer />;
};
