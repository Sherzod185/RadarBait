import React, { useState, useRef } from "react";
import currentsongs from "../src/audio/kulish.ogg";
import goodJob from "../src/audio/success-1-6297.mp3";
import Edit from "./Edit";
const App = () => {
  const lefts = ["1000px", "800px", "700px"];
  const rights = ["0", "100px", "150px"];
  const [qoidabuzar, setQoidabuzar] = useState([
    { name: "Chingiz", age: 21, carName: "BMW X7", fee: 35 },
    { name: "Asliddin", age: 25, carName: "Malibu", fee: 45 },
    { name: "Samandar", age: 30, carName: "Ferrari", fee: 40 },
    { name: "Behzod", age: 23, carName: "Rolls Royce", fee: 38 },
    { name: "Sherzod", age: 22, carName: "Lamborghini", fee: 12 },
  ]);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const hovers = useRef();
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const [state, setState] = useState(false);
  const EditButton = () => {
    setEdit(!edit);
  };
  const hoverHandel = () => {
    audioRef.current.currentTime = 1;
    if (
      value.age === "" ||
      value.name === "" ||
      value.fee === "" ||
      value.carName === ""
    ) {
      setState(!state);
      hovers.current.style.position = "absolute";
      audioRef.current.play();
      state
        ? (hovers.current.style.right = lefts[Math.floor(Math.random() * 3)])
        : (hovers.current.style.right = rights[Math.floor(Math.random() * 3)]);
    } else {
      hovers.current.style.position = "absolute";
      audioRef.current.pause();
    }
  };

  const removeQoidabuzar = (index) => {
    const updatedQoidabuzar = [...qoidabuzar];
    updatedQoidabuzar.splice(index, 1);
    setQoidabuzar(updatedQoidabuzar);
  };

  const openModal = () => {
    setOpenCloseModal(true);
  };
  const closeModal = () => {
    setOpenCloseModal(false);
  };

  const addTable = () => {
    if (
      value.age === "" ||
      value.name === "" ||
      value.fee === "" ||
      value.carName === ""
    ) {
      alert("Bo'sh joylarni to'ldiring");
    } else {
      const updatedQoidabuzar = [...qoidabuzar];
      updatedQoidabuzar.push(value);
      setQoidabuzar(updatedQoidabuzar);
      setOpenCloseModal(false);
      setValue(value);
      audioRef2.current.play();
      audioRef2.current.currentTime = 0;
      setValue({ name: "", carName: "", age: "", fee: "" });
    }
  };

  // radar bait

  const [value, setValue] = useState({
    name: "",
    carName: "",
    age: "",
    fee: "",
  });
  const changeInput = (e) => {
    setValue((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  // radar bait
  return (
    <div className="market">
      <div className="container">
        <h1 className="title">
          RADAR
          <span>
            <audio ref={audioRef} src={currentsongs}></audio>
            <audio ref={audioRef2} src={goodJob}></audio>
            <i class="bx bx-radar bx-spin"></i>BAIT
          </span>
        </h1>
        <div className="row">
          <div className="col">
            <button onClick={() => openModal()} className="btn btn-primary m-2">
              Add a Radar bait
            </button>
            {openCloseModal ? (
              <div className="card">
                <div className="card-header">Add a Radar bait Modal</div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-5">
                      <h5>Violator's age</h5>
                      <div className="btn-group">
                        <input
                          name="age"
                          className="form-control bg-transparent text-light"
                          type="number"
                          placeholder="Violator' age"
                          value={value.age}
                          onChange={changeInput}
                        />
                      </div>
                    </div>

                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SbEyW3z88VlzTEC_6aQX1OgdkUJ4EmVQHpXg8JIa9FK7TvT1Du4zx171rgBGT_mS_YE&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="col-5">
                      <h5> Violator's fee</h5>
                      <div className="btn-group">
                        <input
                          name="fee"
                          className="form-control bg-transparent text-light"
                          type="number"
                          placeholder="Violator's fee"
                          value={value.fee}
                          onChange={changeInput}
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ width: "100%" }}
                    >
                      <div className="col-5">
                        <h5>Name add</h5>
                        <div className="btn-group">
                          <input
                            name="name"
                            className="form-control bg-transparent text-light"
                            type="text"
                            placeholder="Name"
                            value={value.name}
                            onChange={changeInput}
                          />
                        </div>
                      </div>
                      <div className="col-5">
                        <h5>Car name add</h5>
                        <div className="btn-group">
                          <input
                            onChange={changeInput}
                            className="form-control bg-transparent text-light"
                            type="text"
                            name="carName"
                            placeholder="Car name"
                            value={value.carName}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    onClick={() => closeModal()}
                    className="btn btn-warning m-1"
                  >
                    Cancel
                  </button>
                  <button
                    ref={hovers}
                    onMouseOver={() => hoverHandel()}
                    onClick={() => addTable()}
                    className="btn btn-success m-1"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
  <Edit qoidabuzar={qoidabuzar} removeQoidabuzar={removeQoidabuzar} EditButton={EditButton} />
      </div>
    </div>
  );
};
export default App;
