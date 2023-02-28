import * as React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        marginTop: "100px",
        padding: "20px",
        backgroundColor: "#A99985",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src="https://tinypng.com/images/example-shrunk.png" alt="logo" />
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
