const react = require("react");

// js code to get the current year

const currentYear = new Date().getFullYear();

var Footer = () => (
  <footer>
    <p>Copyright @ {currentYear}</p>
  </footer>
);

export default Footer;
