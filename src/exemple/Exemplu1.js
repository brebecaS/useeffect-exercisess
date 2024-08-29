import { useEffect, useState } from "react";
import "./style.css";

// When the button is pressed 10 times, it will be disabled
// When the button is pressed 9 times, an alert will appear
// Implement counter logic
// Implement the logic for the button to be disabled

function Example1() {
  return (
    <div>
      <h1>Exemplul 1</h1>
      <button onClick={() => {}} disabled={false}>
        Buton apasat de <strong>0</strong> ori
      </button>
    </div>
  );
}

export default Example1;
