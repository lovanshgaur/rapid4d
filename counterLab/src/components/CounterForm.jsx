import { useState } from "react";

const CounterForm = ({ onSubmit }) => {
  let [name, setName] = useState("");
  let [theme, setTheme] = useState("blue");
  let [config, setConfig] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, theme, config });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="counter-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter counter name"
        />
        <input
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Select theme "
        />
        <input
          value={config}
          onChange={(e) => setConfig(Number(e.target.value))}
          placeholder="Enter config "
        />

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default CounterForm;
