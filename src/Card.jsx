const Card = (props) => {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;
