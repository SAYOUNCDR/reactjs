import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const modalStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
  };

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
