import { useState } from "react";
import Counter from "./components/Counter";
import CounterForm from "./components/CounterForm";

const App = () => {
  const [counters, setCounters] = useState([]);

  function handleSubmit(value) {
    setCounters((prev) => [...prev, value]);
  }
  function showForm(){
    console.log('first')
    document.querySelector('.counter-form').classList.toggle('show')
  }

  return (
    <div className="container">
      <h1>CounterLab</h1>

      <div className="counter-wrapper">
        {counters.map((counter, index) => (
          <Counter
            key={index}
            name={counter.name}
            theme={counter.theme}
            config={counter.config}
          />
        ))}
      </div>

      <CounterForm onSubmit={handleSubmit} />

      <button className="showForm" onClick={showForm}>S</button>
    </div>
  );
};

export default App;