import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <Container className="p-5 flex gap-2">
      <Button variant="contained">
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button variant="contained">
        <NavLink to="/countries">Countries</NavLink>
      </Button>
      <Button variant="contained">
        <NavLink to="/about">About</NavLink>
      </Button>
    </Container>
  );
};

export default Navbar;
