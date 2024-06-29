import React from "react";
import { Form } from "react-router-dom";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  id: number;
  owner: string;
  handleCloseModal: () => void;
  handleSubmit: (event: any) => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  id, 
  owner,
  handleCloseModal,
  handleSubmit,
}) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <p>Transfer Owner ID <b>{id}</b> form <b>{owner}</b> to: </p>
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="address new owner..."
              name="newOwner"
              className="input"
            />
          </label>
          <button className="button" type="submit">Transfer Owner</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
