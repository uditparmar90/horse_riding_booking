import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookingConfirmation from "./BookingConfirmation";
import gsap from "gsap";

const HorseRideBookingForm = ({ show, horseData, horseId, onclose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const selectedHorseId = horseId;

  const userNameElement = useRef();
  const userPhoneElement = useRef();
  const userEmailElement = useRef();
  const userDateElement = useRef();
  const userTimeElement = useRef();

  useEffect(() => {
    if (show) {
      gsap.fromTo(
        ".modal-dialog",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );
    }
  }, [show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameElement.current.value;
    const userPhone = userPhoneElement.current.value;
    const userEmail = userEmailElement.current.value;
    const userDate = userDateElement.current.value;
    const userTime = userTimeElement.current.value;
    setUserDetail({ userName, userPhone, userEmail, userDate, userTime });
    setIsSubmitted(true);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Book horse riding</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onclose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {isSubmitted ? (
                <BookingConfirmation
                  userDetail={userDetail}
                  selectedHorseId={horseId}
                  horseData={horseData}
                />
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      {Array.isArray(horseData) &&
                        horseData.map((horse) => (
                          <div key={horse.horseId} className="form-group">
                            <div className="form-check d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={horse.horseId}
                                value={horse.horseId}
                                checked={horse.horseId === selectedHorseId}

                                // required
                              />
                              <img
                                className="card-img-top"
                                src={horse.img}
                                alt="Card image cap"
                                style={{ height: "80px", width: "200px" }}
                              />
                              <div className="ms-3">
                                <label
                                  className="form-check-label"
                                  htmlFor={horse.horseName}
                                >
                                  {horse.horseName}
                                </label>
                                <br />
                                <label className="form-check-label">
                                  <span>Rs.</span> {horse.price}
                                </label>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter name"
                          ref={userNameElement}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="number">Phone no.</label>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          placeholder="Enter phone no."
                          ref={userPhoneElement}
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
                          ref={userEmailElement}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Date">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="Date"
                          ref={userDateElement}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Time">Time</label>
                        <input
                          type="time"
                          className="form-control"
                          id="Time"
                          ref={userTimeElement}
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button type="reset" className="btn btn-danger">
                          Reset
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HorseRideBookingForm.propTypes = {
  show: PropTypes.bool.isRequired,
  horseData: PropTypes.array.isRequired,
  horseId: PropTypes.string.isRequired,
  onclose: PropTypes.func.isRequired,
};

export default HorseRideBookingForm;
