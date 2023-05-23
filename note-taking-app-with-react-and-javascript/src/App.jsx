import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

const react = require("react");

// arrow function

var App = () => (
  <div>
    <Header />
    <Notes />
    <Notes />
    <Notes />
    <Footer />
  </div>
);

export default App;
