import React from 'react'

const Ui = ({EditButton,qoidabuzar,removeQoidabuzar}) => {
  return (
    <div className="row">
      <div className="col">
        <table className="table table-hover table-sm">
          <thead className="thead-light">
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Age</th>
              <th>Car name</th>
              <th>Fee for violation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {qoidabuzar.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.carName}</td>
                  <td>
                    <span className="value"> 💲{item.fee}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => removeQoidabuzar(index)}
                      className="btn-danger btn-sm"
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => EditButton()}
                      className="btn-success ml-3 btn-sm"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ui