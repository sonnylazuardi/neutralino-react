import React from "react";
import "./App.css";
import init from "./init";

const App = () => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={100}
        />
        {text}
      </header>
    </div>
  );
};

export default App;
