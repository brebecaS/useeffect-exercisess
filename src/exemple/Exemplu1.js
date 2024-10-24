import { useEffect, useState } from "react";
import "./style.css";

// When the button is pressed 5 times, it will be disabled
// When the button is pressed 4 times, an alert will appear
// Implement counter logic
// Implement the logic for the button to be disabled

function Example1() {
  const [timesPressed1, setTimesPressed] = useState(0);
  const [isDisabled1, setIsDisabled] = useState(false);
  const [timesPressed2, setTimesPressed2] = useState(0);
  const [isDisabled2, setIsDisabled2] = useState(false);

  useEffect(() => {
    if (timesPressed1 === 4) alert("Mai ai o sansa");
    else if (timesPressed1 === 5) setIsDisabled(true);
  }, [timesPressed1]);

  useEffect(() => {
    if (timesPressed2 === 5) setIsDisabled2(true);
  }, [timesPressed2]);

  return (
    <div>
      <h1>Exemplul 1</h1>
      <button
        onClick={() => {
          setTimesPressed(timesPressed1 + 1);
        }}
        disabled={isDisabled1}
      >
        Buton 1 apasat de <strong>{timesPressed1}</strong> ori
      </button>
      <button
        onClick={() => {
          setTimesPressed2(timesPressed2 + 1);
        }}
        disabled={isDisabled2}
      >
        Buton 2 apasat de <strong>{timesPressed2}</strong> ori
      </button>
    </div>
  );
}

export default Example1;
