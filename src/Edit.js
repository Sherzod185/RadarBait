import React from "react";
import Ui from "./Ui";

const Edit = ({EditButton, qoidabuzar,removeQoidabuzar}) => {
  return (
    <>
      <Ui EditButton={EditButton} qoidabuzar={qoidabuzar} removeQoidabuzar={removeQoidabuzar} />
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h2 className="modal-title fs-3" id="staticBackdropLabel">
                Edit modal
              </h2>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                X
              </button>
            </div>
            <div className=" p-4">
              <input
                className="form-control ainput  mb-3"
                type="text"
                placeholder="Name"
              />
              <input
                className="form-control ainput mb-3"
                type="text"
                placeholder="Car name"
              />
              <input
                className="form-control ainput mb-3 "
                type="text"
                placeholder="Violator's age"
              />
              <input
                className="form-control ainput mb-3 "
                type="text"
                placeholder="Violator's fee"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Edit save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
