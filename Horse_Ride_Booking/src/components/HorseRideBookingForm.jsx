const HorseRideBookingForm = (horseData) => {
  console.log(horseData);
  if (!horseData.show) {
    return null;
  }
  function onClose() {
    document.getElementById("exampleModalLong").style.display = "none";
  }

  return (
    <>
      <div
        className="modal show"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Book Horse Riding
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onclick="onClose()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="bookingForm">
                <div className="form-group" id="horseList"></div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Phone no.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        classNameNameName="modal show"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div classNameNameName="modal-dialog" role="document">
          <div classNameNameName="modal-content">
            <div classNameNameName="modal-header">
              <h5 classNameNameName="modal-title" id="exampleModalLongTitle">
                Book horse rideing
              </h5>
              <button
                type="button"
                classNameNameName="close"
                aria-label="Close"
                onClick={horseData.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div classNameNameName="modal-body">
              <form>
                <div classNameNameName="form-group">
                  {Array.isArray(horseData) &&
                    horseData.map((horse) => (
                      <div key={horse.value}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input
                            type="checkbox"
                            classNameNameName="form-check-input"
                            id={horse.value}
                            value={horse.value}
                          />
                          <img
                            classNameNameName="card-img-top"
                            src={horse.img}
                            alt="Card image cap"
                            style={{ height: "110px", width: "240px" }}
                          />
                          <label
                            classNameNameName="form-check-label"
                            htmlFor={horse.horseName}
                            style={{ padding: "10px" }}
                          >
                            {horse.horseName}
                          </label>
                        </div>
                        <hr />
                      </div>
                    ))}
                </div>
                <div classNameNameName="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    classNameNameName="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div classNameNameName="form-group">
                  <label htmlFor="number">Phone no.</label>
                  <input
                    type="number"
                    classNameNameName="form-control"
                    id="number"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div classNameNameName="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    classNameNameName="form-control"
                    id="Email"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" classNameNameName="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div classNameNameName="modal-footer">
              <button
                type="button"
                classNameNameName="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" classNameNameName="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HorseRideBookingForm;
