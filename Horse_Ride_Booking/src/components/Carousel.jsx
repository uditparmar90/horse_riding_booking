import rasing_horse from "../assets/rasing_horse.png";
import white_horse from "../assets/white_horse.jpg";
import banner_horse from "../assets/banner_horse.jpg";
import styles from "./modules/Carousel.module.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={banner_horse}
            className={`d-block w-100 ${styles.carouselImgs}`}
            alt="Horse carousel slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className={styles.captionTitle}>Racing Horse</h5>
            <p className={styles.captionText}>
              Racing horse are type of horses are runs faster then others horses
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={white_horse}
            className={`d-block w-100 ${styles.carouselImgs}`}
            alt="Horse carousel slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className={styles.captionTitle}>Marwadi horses</h5>
            <p className={styles.captionText}>
              this special type of horses it looks good and diffrent than
              others.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={rasing_horse}
            className={`d-block w-100 ${styles.carouselImgs}`}
            alt="Horse carousel slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className={styles.captionTitle}>Third slide label</h5>
            <p className={styles.captionText}>
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
