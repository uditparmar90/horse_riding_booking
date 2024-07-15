import PropTypes from "prop-types";
import styles from "./Card.module.css";
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
        <div className="main-container" style={{ display: "flex" }}>
          {Array.isArray(horseData) &&
            horseData.map((horse) => (
              <div
                className={`card ${styles.cardItems}`}
                key={horse.horseId}
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={horse.img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">{horse.horseName}</h4>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    onClick={() => handleBookRide(horse.horseId, horse.price)}
                  >
                    Book now Rs. {horse.price}
                  </button>
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
        // horsePrice={selectedHorse.price}
      />
    </>
  );
};

Card.propTypes = {
  horseData: PropTypes.array.isRequired,
};

export default Card;
