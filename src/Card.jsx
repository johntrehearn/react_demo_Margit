const Card = ({ name, age, title, click }) => {
  return (
    <div
      style={{ background: age > 40 ? "lightgrey"  :   "pink" }}
      className="card"
    >
      <h2>Name: {name}</h2>
      <p>Title: {title}</p>
      <p className={age > 40 ? "pink-age" : "blue-age"}>Age: {age}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;
