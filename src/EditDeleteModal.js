import React, { useState } from "react";


const Edit = ({
  index,
  editData,
  removeQoidabuzar,
  name,
  age,
  carName,
  fee,
  id,
  audioRef2,
}) => {
  const [editValue, setEditValue] = useState({
    name,
    age,
    carName,
    fee,
    id,
  });
  const [modal, setModal] = useState(false);
  const change = (e) => {
    setEditValue((p) => ({ ...p, [e.target.name]: e.target.value, id }));
  };

  const submits = () => {
    setModal(!modal);
    editData(editValue);
    audioRef2.current.play();
  };
  return (
    <>
      {!modal ? (
        <div className="tables">
          <p className="index">{index + 1}</p>
          <p className="names">{name}</p>
          <p className="age">{age}</p>
          <p className="carname">{carName}</p>
          <p className="feee">
            <span className="value"> 💲{fee}</span>
          </p>
          <div>
            <button
              onClick={() => removeQoidabuzar(id)}
              className="btn-danger btn-sm"
            >
              Remove
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => setModal(true)}
              className="btn-success ml-3 btn-sm"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <form className="formEdit">
            <input
              onChange={change}
              defaultValue={editValue.name}
              required
              className="form-control input-light"
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              onChange={change}
              defaultValue={editValue.age}
              required
              className="form-control "
              placeholder="Age"
              type="number"
              name="age"
            />
            <input
              onChange={change}
              defaultValue={editValue.carName}
              required
              className="form-control "
              placeholder="Car name"
              type="text"
              name="carName"
            />{" "}
            <input
              onChange={change}
              defaultValue={editValue.fee}
              required
              className="form-control "
              placeholder="Fee"
              type="number"
              name="fee"
            />
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={() => submits()}
            >
              Save
            </button>
            <button
              className="btn btn-danger ml-1 btn-sm"
              onClick={() => setModal(!modal)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Edit;
