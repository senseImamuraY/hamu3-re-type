import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const countPlus = () => {
    setValue((prevState) => prevState + 1);
  };

  const countMinus = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={countPlus}>+1</button>
      <button onClick={countMinus}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
