import { styled } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)({
  color: "black",
  textDecoration: "none",
});

const CustomWriteSpan = styled("span")({
  backgroundColor: "#A99985",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    width: "48px",
    height: "48px",
    color: "#A99985",
    backgroundColor: "white",
    border: "1px solid #A99985",
  },
});

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="container"
        style={{
          padding: "10px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <img src="https://tinypng.com/images/example-shrunk.png" alt="logo" />
        </div>
        <div
          className="links"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <CustomLink className="link" to="/?cat=art">
            <h6>ART</h6>
          </CustomLink>
          <CustomLink className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </CustomLink>
          <CustomLink className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </CustomLink>
          <CustomLink className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </CustomLink>
          <span style={{ cursor: "pointer" }}>John</span>
          <span style={{ cursor: "pointer" }}>Logout</span>
          <CustomWriteSpan>
            <CustomLink to="/write">
              <h6>Write</h6>
            </CustomLink>
          </CustomWriteSpan>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
