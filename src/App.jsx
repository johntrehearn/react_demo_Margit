import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29 },
    { id: 2, name: 'Kati', title: 'developer', age: 25 },
    { id: 3, name: 'Karin', title: 'designer', age: 45 },
  ]);

  return (
    <>
      <Header logo="Margit Tennosaar" />
      <main>
        <h2>This is my application</h2>
        <div className="cards">
          <Card
            name={persons[0].name}
            title={persons[0].title}
            age={persons[0].age}
          />
          <Card name="Kati" title="Designer" age="25" />
          <Card name="Karin" title="CEO" age="45" />
        </div>
      </main>
      <Footer copyright="Copyright some cool stuff" />
    </>
  );
}

export default App;
