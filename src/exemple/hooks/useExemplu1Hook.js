import { useEffect, useState } from "react";

const useExeplu1Hook = () => {
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

  return {
    setTimesPressed,
    timesPressed1,
    isDisabled1,
    setTimesPressed2,
    timesPressed2,
    isDisabled2
  };
};

export default useExeplu1Hook;
