import { useEffect } from "react";
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";

interface ToastProps {
  visible: boolean;
  message: string;
  duration: number;
  position: string; 
  title: string; 
  actionWidth: number;  
  type: "error" | "success"  | string; // Limit to specific strings
  
}

interface ToastComponentProps {
  toast: ToastProps;
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
}

const Toast: React.FC<ToastComponentProps> = ({ toast, setToast }) => {
  useEffect(() => {
    if (toast.visible) {
      const intervalId = setInterval(() => {
        setToast((prev) => {
          const newActionWidth = prev.actionWidth - 100;
          console.log({ newActionWidth });

          return newActionWidth <= 0
            ? { ...prev, visible: false }
            : { ...prev, actionWidth: newActionWidth };
        });
      }, 1000); // Adjust duration to control the interval speed
      return () => clearInterval(intervalId);
    }
  }, [toast.visible, setToast]);

  return (
    toast.visible && (
      <div className="mt-4">
        <div
          className={`${
            toast.type === "error" ? "bg-red-500" : "bg-green-500"
          } flex flex-row p-[10px] w-1/4 text-white text-lg rounded-sm`}
        >
          <div className="w-[300px] p-2 flex">
            {toast.type === "error" ? (
              <MdErrorOutline className="mt-[5px] mr-2" />
            ) : (
              <SiTicktick className="mt-[5px] mr-2" />
            )}
            {toast.title || "Runtime error"}
          </div>
          <div className="-mt-2 ml-[155px] text-md text-gray-100 w-5 h-5 p-1">
            <div
              className="-mt-[6px] ml-[3px] cursor-pointer hover:text-gray-300"
              onClick={() => setToast({ ...toast, visible: false })}
            >
              x
            </div>
          </div>
        </div>
        <hr
          style={{ width: `${toast.actionWidth}px` }}
          className="border-2 border-white -mt-[2px] transition-width duration-700"
        />
      </div>
    )
  );
};

export default Toast;
