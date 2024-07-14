import { useRef, useState } from "react";
import styles from "./BookingConfirmation.module.css";
import BookingConfirmation from "./BookingConfirmation";

const HorseRideBookingForm = (horseData) => {
  // console.log(horseData.horseData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const selectedHorseId = horseData.horseId;

  const [userDetail, setUserDetail] = useState({});
  const userNameElement = useRef();
  const userPhoneElement = useRef();
  const userEmailElement = useRef();
  const userDateElement = useRef();
  const userTimeElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameElement.current.value;
    const userPnone = userPhoneElement.current.value;
    const userEmail = userEmailElement.current.value;
    const userDate = userDateElement.current.value;
    const userTime = userTimeElement.current.value;
    setUserDetail({ userName, userPnone, userEmail, userDate, userTime });
    console.log(userDetail, horseData.horseId);

    setIsSubmitted(true);
  };
  if (!horseData.show) {
    return null;
  } else {
    const select = Array.isArray(
      horseData.horseData.filter((selectedHorse) => selectedHorse.horseId)
    );
    console.log(select);
  }
  const onclose = (horseData) => {
    horseData.setshowModal(false);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={`${styles.popup} popup`} style={{ width: "700px" }}>
          {/* <div
          // className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        > */}
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Book horse rideing
                </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => onclose(horseData)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="modal-body"
                style={{
                  display: "flex",
                }}
              >
                {isSubmitted ? (
                  <BookingConfirmation
                    userDetail={userDetail}
                    selectedHorseId={horseData.horseId}
                    horseData={horseData.horseData}
                  />
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <div>
                        <div className="form-group">
                          {Array.isArray(horseData.horseData) &&
                            horseData.horseData.map((horse) => (
                              <div key={horse.horseId}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={horse.value}
                                    value={horse.value}
                                    checked={
                                      horse.horseId == horseData.horseId
                                        ? true
                                        : false
                                    }
                                  />

                                  <img
                                    className="card-img-top"
                                    src={horse.img}
                                    alt="Card image cap"
                                    style={{ height: "80px", width: "200px" }}
                                  />
                                  <div>
                                    <label
                                      className="form-check-label"
                                      htmlFor={horse.horseName}
                                      style={{ padding: "10px" }}
                                    >
                                      {horse.horseName}
                                    </label>
                                    <label
                                      className="form-check-label"
                                      htmlFor={horse.price}
                                      style={{ padding: "10px" }}
                                    >
                                      Rs. {horse.price}
                                    </label>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <small htmlFor="name">Name</small>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter name"
                          ref={userNameElement}
                        />
                      </div>

                      <div>
                        <small htmlFor="number">Phone no.</small>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          placeholder="Enter phone no."
                          ref={userPhoneElement}
                        />
                      </div>
                      <div>
                        <small htmlFor="Email">Email</small>
                        <input
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          type="email"
                          className="form-control"
                          id="Email"
                          placeholder="Enter email"
                          ref={userEmailElement}
                        />
                      </div>
                      <div>
                        <small htmlFor="Email">Date</small>

                        <input
                          id="Date"
                          className="form-control"
                          type="date"
                          ref={userDateElement}
                        />
                      </div>
                      <div>
                        <small htmlFor="Time">Time</small>

                        <input
                          id="startDate"
                          className="form-control"
                          type="time"
                          ref={userTimeElement}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button type="reset" className="btn btn-danger mt-3">
                          reset
                        </button>

                        <button type="submit" className="btn btn-primary mt-3">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default HorseRideBookingForm;
