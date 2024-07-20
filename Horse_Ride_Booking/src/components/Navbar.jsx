import horse_logo from "../assets/horse_logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ margin: "0px 0px", padding: "0px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img style={{ height: "43px" }} src={horse_logo} alt="Horse Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HorseVoyage.in
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Book horse ride
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
