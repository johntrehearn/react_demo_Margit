import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import img from './assets/react.svg';

function Greeting({ name }) {
  if (name === 'Margit') {
    return <p>Welcome {name}</p>;
  }
  return <p>Please log in</p>;
}

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29 },
    { id: 2, name: 'Kati', title: 'developer', age: 25 },
    { id: 3, name: 'Karin', title: 'designer', age: 45 },
  ]);
  const [search, setSearch] = useState('');

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header logo="Margit Tennosaar" />
      <main>
        <Greeting name="Margit" />
        <h2>This is my application</h2>
        <img src={img} alt="something" />
        <input type="text" onChange={searchHandler} />
        <div className="cards">
          {persons
            .filter((el) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => (
              <Card key={el.id} {...el} click={() => removeHandler(el.id)} />
            ))}
        </div>
      </main>
      <Footer copyright="Copyright some cool stuff" />
    </>
  );
}

export default App;
