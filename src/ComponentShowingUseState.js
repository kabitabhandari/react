import './App.css';

import { useState } from 'react';

export default function ComponentShowingUseState() {
  return (
      <div>
        <h1>ComponentShowingUseState: Counters that update separately</h1>
        <MyButton />
        <MyButtonManual />
      </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
  );
}


// Trying to change state without using use state and not successful. Because this way the content is not re rendered.
function MyButtonManual() {
    let manualCount = 0;

    function handleClickManual() {
        manualCount = manualCount +1;
        console.log("manually clicked:",  {manualCount});
    }

    return (
        <button onClick={handleClickManual}>
            Manually Clicked {manualCount} times
        </button>
    );
}
