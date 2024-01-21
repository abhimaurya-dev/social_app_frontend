import ReactDom from "react-dom";

const Modal = ({
  children,
  closeModalHandler,
  closeIconCustomCSS,
  closeIconButtonSize,
  materialIconName,
}) => {
  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-gray-50 opacity-80 z-8"
        onClick={closeModalHandler}
      ></div>
      <div className="fixed top-[50%] w-[28rem] left-[50%] translate-x-[-50%] translate-y-[-50%] z-8">
        <div className="rounded-lg shadow-lg py-1 px-3 bg-white relative">
          <button
            className={`absolute ${
              closeIconCustomCSS ? closeIconCustomCSS : "top-2 right-2"
            }  `}
          >
            <span
              className={`material-symbols-outlined text-${
                closeIconButtonSize ? closeIconButtonSize : "2xl"
              } font-semibold text-gray-500`}
              onClick={closeModalHandler}
            >
              {materialIconName}
            </span>
          </button>
          <div className="m-2">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
