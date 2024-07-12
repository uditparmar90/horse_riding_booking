import styles from "./BookingConfirmation.module.css";
import { gsap } from "gsap";
const HorseRideBookingForm = (horseData) => {
  console.log(horseData);
  if (!horseData.show) {
    return null;
  }
  const onclose = (horseData) => {
    // console.log(horseData);
    horseData.setshowModal(false);
    // setselectedHorse({ id: "", price: 0 });
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={`${styles.popup} popup`} width={{ width: "500px" }}>
          <div
            // className="modal fade"
            id="exampleModalLong"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
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
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      {Array.isArray(horseData) &&
                        horseData.map((horse) => (
                          <div key={horse.value}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={horse.value}
                                value={horse.value}
                              />
                              <img
                                className="card-img-top"
                                src={horse.img}
                                alt="Card image cap"
                                style={{ height: "110px", width: "240px" }}
                              />
                              <label
                                className="form-check-label"
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
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="number">Phone no.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="Enter email"
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
        </div>
      </div>
    </>
  );
};

export default HorseRideBookingForm;
