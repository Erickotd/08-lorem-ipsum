import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    clearText();
    let amount = parseInt(count);
    if (amount <= 0) amount = 1;
    if (amount > 8) amount = 8;
    let lorem = data.slice(0, amount);
    setText(lorem);
    setCount(0);
  };

  const clearText = () => {
    setText([]);
  };

  const handlerChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsuma?</h3>
      <form className="lorem-form" onSubmit={handlerSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={count}
          onChange={handlerChange}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      {text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </section>
  );
}

export default App;
