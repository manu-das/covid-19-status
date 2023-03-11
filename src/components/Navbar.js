import { MdOutlineCoronavirus } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import Global from "../pages/Global";
import India from "../pages/India";
import Info from "../pages/Info";

function Nav() {
  return (
    <>
      <nav>
        <div className="container text-center d-flex justify-content-between">
          <div>
            <Link to="/">
              <MdOutlineCoronavirus size="40px" color="red" />
            </Link>
          </div>
          <div>
            <ul className="center">
              <li>
                <Link to="/">India</Link>
              </li>
              <li>
                <Link to="/global">Global</Link>
              </li>

              <li>
                <Link to="/info">C-Info</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ----------------------------- */}
      <Routes>
        <Route path="/" element={<India />} />
        <Route path="global" element={<Global />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </>
  );
}
export default Nav;
