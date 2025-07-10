import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function checkPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;

    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  return (
    <div>
      <>
        <button
          data-testid="minusonebtn"
          disabled={counter < 1}
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          data-testid="plusonebtn"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <div>
          <button
            data-testid="resetbtn"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>
      </>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">{counter % 2 == 0 ? "Even" : "Odd"}</span>
        <span data-testid="is-prime">{checkPrime(counter) ? "true" : "false"}</span>
      </div>
    </div>
  );
}

export default App;















//   function checkPrime(num) {
//   let isPrime = true;
//   for (let i = 1; i * i <= num; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//     }
//   }
//   return isPrime;
// }