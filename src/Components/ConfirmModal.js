import React from "react";

const ConfirmModal = ({ handleDelete, setModal }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-10">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-4 text-center text-xl text-primary">Are you sure?</p>
          <div className=" text-center mt-5">
            <button
              onClick={() => {
                handleDelete(true);
                setModal(false);
              }}
              className="btn btn-sm btn-error mr-5 text-white"
            >
              Yes
            </button>
            <button
              onClick={() => {
                handleDelete(false);
                setModal(false);
              }}
              className="btn btn-sm btn-success text-white"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
