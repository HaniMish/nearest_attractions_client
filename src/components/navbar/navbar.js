import { Switch, Route, Link } from "react-router-dom";
import Attractions from "../../pages/attractions";
import logo from '../../assets/logo.png';
import "./navbar.scss"


function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to={"/"} className="navbar-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to={"/attractions"} className="navbar-item">
          אטרקציות
        </Link>
      </nav>
      <Switch>
        <Route exact path="/attractions" component={Attractions} />
      </Switch>
    </div>
  );
}
  
  export default NavBar;

