import horse_logo from '../assets/horse_logo.png'; 
// import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light" style={{padding:'0px',margin:'0px 130px'}}>
  <div className="container-fluid"style={{height:'47px',padding:'0px'}}>
    <a className="navbar-brand" href="#" ><img style={{height:'43px'}} src={horse_logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HorseVoyage.in</a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Book horse ride</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
