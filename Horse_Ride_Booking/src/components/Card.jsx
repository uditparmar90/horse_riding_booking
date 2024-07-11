import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ horseData,handleBookRide }) => {
  // const handleBookRide=(horseId)=>{
  //   console.log(horseId)
    

  // }

  console.log(horseData);

  return (
    <>
    
    <div className={`${styles.parentCard}`}>
    <p className="text-left">Available Rides</p>
    
      {Array.isArray(horseData) && horseData.map((horse) => (
        
          <div className={`card ${styles.cardItems}`} key={horse.horseId} style={{ width: '18rem' }}>
            <img className="card-img-top" src={horse.img} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">{horse.horseName}</h4>

              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary" data-toggle="modal" onClick={() => handleBookRide(horse.id)} data-target="#exampleModalLong">
                Book now {horse.price}
              </button>

              {/* Modal
              <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">Book horse rideing</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          {horseData.map((horse) => (
                            <div key={horse.value}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={horse.value}
                                  value={horse.value}
                                />
                                <img className="card-img-top" src={horse.img} alt="Card image cap" style={{height:'110px',width:'240px'}}/>
                                <label className="form-check-label" htmlFor={horse.horseName} style={{padding:'10px'}}>
                                  {horse.horseName}
                                </label>
                              </div>
                              <hr />
                            </div>
                          ))}
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="number">Phone no.</label>
                          <input type="number" className="form-control" id="number" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Email">Email</label>
                          <input type="email" className="form-control" id="Email" placeholder="Enter email" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

      ))}
              </div>
              {/* <HorseRideBookingForm handleBookRide={handleBookRide} horseData={horseData}/> */}
    </>
  );
};

Card.propTypes = {
  horseData: PropTypes.array.isRequired,
};

export default Card;
