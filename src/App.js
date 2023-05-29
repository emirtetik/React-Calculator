import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0' || operator !== '') {
      setCurrentNumber(number.toString());
      setOperator('');
    } else {
      setCurrentNumber(currentNumber + number.toString());
    }
    setDisplay((prevDisplay) => prevDisplay === '0' ? number.toString() : prevDisplay + number.toString());
  };

  const handleOperatorClick = (operator) => {
    if (operator === '-') {
      if (currentNumber === '0' && display === '0') {
        setCurrentNumber('-');
        setDisplay('-');
        return;
      }
      if (currentNumber === '-') {
        setCurrentNumber('0');
        setDisplay('0');
        return;
      }
    }

    if (operator === '=') {
      const evalResult = eval(display);
      setResult(evalResult);
      setDisplay(evalResult.toString());
      setCurrentNumber(evalResult.toString());
      setOperator('');
      return;
    }

    if (display.slice(-1) === '.') {
      setCurrentNumber(display);
    }

    setOperator(operator);
    setDisplay((prevDisplay) => prevDisplay + operator);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setCurrentNumber((prevNumber) => prevNumber + '.');
      setDisplay((prevDisplay) => prevDisplay + '.');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentNumber('0');
    setOperator('');
    setResult('');
  };

  return (
    <div className="App">
       
    <div className="calculator">
      <div id="display" className="display">
        {display}
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button id="seven" onClick={() => handleNumberClick(7)}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick(8)}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick(9)}>
          9
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="four" onClick={() => handleNumberClick(4)}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick(5)}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick(6)}>
          6
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button id="one" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
       
        <button id="zero" onClick={() => handleNumberClick(0)}>
          0
        </button>
        <button id="equals" onClick={() => handleOperatorClick('=')}>
          =
        </button>
      </div>
      <div className="author">
        Designed and Coded By  <br />
        <a href="https://emirfy.com/" target="_blank" rel="noreferrer">Emir Tetik</a>
      </div>
    </div>
   
    </div>
  );
};

export default App;
