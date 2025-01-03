import { NavLink } from "react-router-dom";
import img1 from "./img/img-3.png";
import "../routes/App.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark "
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container-fluid " style={{ justifyContent: "center" }}>
          <a className="navbar-brand ">
            <img
              src={img1}
              style={{ width: "40px" }}
              className="rounded-pill"
              alt=""
            />
          </a>

          {/* <button
            type="button"
            className="navbar-toggler"
            data-bs-target="#box"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div id="box" className=" navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link kol">
                  Home
                </NavLink>
              </li>
              <li className="nav-item kol">
                <NavLink to="/create-post" className="nav-link">
                  Create Post
                </NavLink>
              </li>

              {/* <li className="nav-item kol">
                <a href="" className="nav-link">
                  contact
                </a>
              </li> */}
            </ul>
            <form action="" className="d-flex">
              <input
                type="text"
                placeholder="Search"
                className="form-control me-3"
              />
              <button className="btn btn-sm btn-primary">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
