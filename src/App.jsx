import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import img from "./assets/react.svg";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29 },
    { id: 2, name: "Kati", title: "developer", age: 25 },
    { id: 3, name: "Karin", title: "designer", age: 45 },
  ]);

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  return (
    <>
      <Header logo="Margit Tennosaar" />
      <main>
        <h2>This is my application</h2>
        <img src={img} alt="something" />
        <div className="cards">
          {persons.map((person) => (
            <Card
              key={person.id}
              {...person}
              click={() => removeHandler(person.id)}
            />
          ))}
        </div>
      </main>
      <Footer copyright="Copyright some cool stuff" />
    </>
  );
}

export default App;
