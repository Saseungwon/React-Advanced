import logo from "./logo.svg";
import "./App.css";
import React from "react";

const Person = React.memo(({ name, age }) => {
  console.log("Person render");
  return (
    <div>
      {name} / {age}
    </div>
  );
});

function App() {
  const [state, setState] = React.useState({
    text: "",
    persons: [
      { id: 1, name: "Mark", age: 36 },
      { id: 2, name: "Seungwon", age: 27 },
    ],
  });

  const { text, persons } = this.state;
  return (
    <div>
      <input type="text" value={text} onChange={this._change} />
      <ul>
        {persons.map((person) => {
          return (
            <Person {...person} key={person.id} onClick={this.toPersonClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
