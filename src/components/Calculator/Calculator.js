import React, { useState, useEffect } from "react";
import "./styles.css";
const Calculator = () => {
  const [result, setResult] = useState("0");
  const [computation, setComputation] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const symbols = ["CE", "C", "<-", "/"];
  const numbers = [
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calculatorHistory"));
    if (savedHistory) {
      setHistory(savedHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(computation);
        if (computation !== "" && /[+\-*/]/.test(computation)) {
          setHistory([...history, { computation, result: evalResult }]);
        }
        setResult(evalResult);
        setComputation("");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("0");
      setComputation("");
    } else if (value === "<-") {
      setComputation(computation.slice(0, -1));
    } else if (value === "CE") {
      const lastOperatorIndex = computation.search(/[+\-*/]/g);
      if (lastOperatorIndex > -1) {
        setComputation(computation.substring(0, lastOperatorIndex + 1));
      }
    } else {
      setComputation(computation + value);
    }
  };
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="wrapper">
      <div className="row">
        <div className="column">
          <div className="title">
            <span>Calculator with history</span>
          </div>
          <div className="calculator">
            <section className="screen">
              <div className="result-screen">{result}</div>
              <div className="computation-screen">{computation}</div>
            </section>
            <section className="keypad">
              <div className="keypad__row">
                {symbols.map((value) => (
                  <button
                    key={value}
                    className={`btn ${
                      value === "C" ? "btn--primary" : "btn--operator"
                    }`}
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              {numbers.map((row, rowIndex) => (
                <div key={rowIndex} className="keypad__row">
                  {row.map((value) => (
                    <button
                      key={value}
                      className={`btn ${isNaN(value) ? "btn--operator" : ""}`}
                      onClick={() => handleButtonClick(value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="">
          {showHistory && (
            <div className="history-" onClick={() => setShowHistory(false)}>
              <div className={`history-panel ${showHistory ? "show" : ""}`}>
                <div className="history-title">History</div>
                <div className="history-list">
                  {history.length > 0 ? (
                    history.map((entry, index) => (
                      <div key={index} className="history-entry">
                        <div className="history-computation">
                          {entry.computation} =
                        </div>
                        <div className="history-result">{entry.result}</div>
                      </div>
                    ))
                  ) : (
                    <span className="no-history">There's no history yet.</span>
                  )}
                </div>
                <div className="clear-btn">
                  <div className="clear-history" onClick={clearHistory}>
                    Clear history
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className="hamburger"
            onClick={() => setShowHistory(!showHistory)}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
