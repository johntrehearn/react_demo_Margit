import Card from '../components/Card';

function Persons({ searchHandler, persons, search, removeHandler }) {
  return (
    <>
      <main>
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
    </>
  );
}

export default Persons;
