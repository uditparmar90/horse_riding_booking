import React from "react";
import styles from "./BookingConfirmation.module.css";
import { gsap } from "gsap";

const BookingConfirmation = (
  /*{ horseName, sessionDate, closePopup }*/ userDetail
) => {
  const selectedHorse = userDetail.horseData.find(
    (horse) => horse.horseId === userDetail.selectedHorseId
  );
  console.log(typeof userDetail.userDetail.userTime);
  console.log(selectedHorse);
  React.useEffect(() => {
    gsap.fromTo(
      ".popup",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5 }
    );
  }, []);
  // const date=userDetail.userDetail.userDate;
  // const time=userDetail.userDetail.userDate;
  // const formatDateTimeForCalendar = (date, time) => {
  //   const formattedDate = new Date(`${date}T${time}`);
  //   return formattedDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
  // };

  const handleInviteClick = () => {
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Horse+Riding+Session&dates=${userDetail.userDateElement}&details=Horse+Name:+${selectedHorse.horseName}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    // <div className={styles.overlay}>
    <div className={`${styles.popup} popup`}>
      <p>Thank you {userDetail.userDetail.userName} for booking!</p>
      <div>
        <p>
          Horse type : <strong>{selectedHorse.horseName}</strong>
        </p>
      </div>
      {/* <h3>{userDetail}</h3> */}
      <p>
        You have booked a session with{" "}
        <strong>{userDetail.userDetail.userDate}</strong> at{" "}
        <strong>{userDetail.userDetail.userTime}</strong>
        {/* {if({userDetail.userDetail.userTime}<=12)} */}
      </p>

      <button className={styles.inviteButton} onClick={handleInviteClick}>
        Add to Calendar
      </button>
      {/* <button className={styles.closeButton} onClick={closePopup}>
          Close
        </button> */}
    </div>
    // </div>
  );
};

export default BookingConfirmation;
