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

    //Array Destructuring
  const [ImCounting, setImCounting] = useState(0); // [] indicates that rhs is an array

  function handleClick() {
      setImCounting(ImCounting + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {ImCounting} times
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



//Object Destructuring
const myObject = new Object();
myObject.name = "Roman Sky";
myObject.gender = "male";

const o1 = myObject.name;
const o2 = myObject.gender;

console.log(o1, o2);

const{name: n1 , gender:g1} = myObject;  // {} indicates that rhs is an object
console.log(n1, g1);


