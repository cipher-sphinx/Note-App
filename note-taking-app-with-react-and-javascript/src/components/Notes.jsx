const react = require("react");

var Notes = () => (
  // since it is jsx, we have to use the key word "className". if it is html, then keyword "class" can be used.
  <div className="note">
    <h1>Biology</h1>
    <p>
      The study of living organisms, divided into many specialized fields that
      cover their morphology, physiology, anatomy, behaviour, origin, and
      distribution.
    </p>
  </div>
);

export default Notes;
