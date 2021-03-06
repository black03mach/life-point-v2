import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import chalk from "./chalk.jpg";
import API from "../../utils/API"

function Affirmation() {
  const [affirmation, setAffirmation] = useState({ quote: "" });

  useEffect(() => {
    API.getAffirmation().then(data => {
      console.log("get aff", data);
      setAffirmation({ quote: data.data.quote });
    })
  }, [])
  return (
    <>
      {console.log("look", affirmation)}
      <Card className="affirmation" style={{ backgroundImage: `url(${chalk})` }}>
        <Card.Body>{affirmation.quote}</Card.Body>
      </Card>
    </>
  );
}

export default Affirmation;
