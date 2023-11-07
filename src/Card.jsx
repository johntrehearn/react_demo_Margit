const Card = ({name, age, click}) => {  

  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={click}>remove</button>
    </div>
  );
};

export default Card;
