import "./style.css";
import useExeplu1Hook from "./hooks/useExemplu1Hook";

// When the button is pressed 5 times, it will be disabled
// When the button is pressed 4 times, an alert will appear
// Implement counter logic
// Implement the logic for the button to be disabled

function Example1() {
  const {
    setTimesPressed,
    timesPressed1,
    isDisabled1,
    setTimesPressed2,
    timesPressed2,
    isDisabled2,
  } = useExeplu1Hook;

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
