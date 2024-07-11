import React from 'react';
import styles from './BookingConfirmation.module.css';
import { gsap } from 'gsap';

const BookingConfirmation = ({ horseName, sessionDate, closePopup }) => {
  React.useEffect(() => {
    gsap.fromTo(".popup", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5 });
  }, []);

  const handleInviteClick = () => {
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Horse+Riding+Session&dates=${sessionDate}&details=Horse+Name:+${horseName}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.popup} popup`}>
        <h2>Booking Confirmation</h2>
        <p>Thank you for booking!</p>
        <p>You have booked a session with <strong>{horseName}</strong>.</p>
        <button className={styles.inviteButton} onClick={handleInviteClick}>Add to Calendar</button>
        <button className={styles.closeButton} onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
