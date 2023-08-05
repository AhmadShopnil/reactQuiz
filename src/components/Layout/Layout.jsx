/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import Navbar from "../Navbar/Navbar";
import classes from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={classes.main}>
        <div className={classes.container}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
