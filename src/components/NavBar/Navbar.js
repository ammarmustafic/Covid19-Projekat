import { NavLink } from "react-router-dom";
import { NavBar, Covidimg, Li } from "./navbarcss";

const Header = () => {
  return (
    <NavBar>
      <Covidimg src="https://cornwallglass.co.uk/wp-content/uploads/2020/08/Covid-19-Coronavirus-logo.jpg" />
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <Li>
          <NavLink
            to="/covid-stats"
            activeClassName="active-link"
            style={{ textDecoration: "none", color: "red" }}
          >
            Covid Stats
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/country-stats"
            activeClassName="active-link"
            style={{ textDecoration: "none", color: "red" }}
          >
            Country Stats
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/about-us"
            activeClassName="active-link"
            style={{ textDecoration: "none", color: "red" }}
          >
            About Us
          </NavLink>
        </Li>
      </ul>
    </NavBar>
  );
};

export default Header;