import PropTypes from "prop-types";
import styles from "./modules/Card.module.css";
import HorseRideBookingForm from "./HorseRideBookingForm";
import { useState } from "react";

const Card = ({ horseData }) => {
  const [showModal, setshowModal] = useState(false);
  const [selectedHorse, setselectedHorse] = useState({ id: "", price: 0 });

  const handleBookRide = (id, price) => {
    console.log(id, price);
    setselectedHorse({ id, price });
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
    setselectedHorse({ id: "", price: 0 });
  };

  return (
    <>
      <div className={`${styles.parentCard}`}>
        <div>
          <p className="text-left">Available Rides</p>
        </div>
        <div className="row">
          {Array.isArray(horseData) &&
            horseData.map((horse) => (
              <div
                className={`col-md-4 col-sm-6 col-xs-12 mb-3 ${styles.cardItems}`}
                key={horse.horseId}
              >
                <div className="card" style={{ width: "100%" }}>
                  <img
                    className="card-img-top"
                    src={horse.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{horse.horseName}</h4>
                    <center>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        onClick={() =>
                          handleBookRide(horse.horseId, horse.price)
                        }
                      >
                        Book now Rs. {horse.price}
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <HorseRideBookingForm
        show={showModal}
        horseData={horseData}
        onclose={closeModal}
        horseId={selectedHorse.id}
      />
    </>
  );
};

Card.propTypes = {
  horseData: PropTypes.array.isRequired,
};

export default Card;
