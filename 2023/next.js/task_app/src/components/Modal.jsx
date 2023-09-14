/** @format */

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  let handleClose = (e) => {
    if (e.target.id === "wraper") onClose();
  };
  return (
    <div
      id="wraper"
      className=" min-w-fit z-10 grid place-content-center fixed inset-0 backdrop-blur-md"
      onClick={handleClose}
    >
      <button
        onClick={() => onClose()}
        className="place-self-end font-bold bg-gray-200 my-2 p-2
         hover:bg-red-400 hover:text-white rounded-md"
      >
        X
      </button>
      <div className="bg-blue-300 mx-1 p-4 rounded-lg min-w-[260px] sm:min-w-[300px] md:min-w-[400px]">{children}</div>
    </div>
  );
};

export default Modal;
