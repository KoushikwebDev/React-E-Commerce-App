const ResturentCard = (props) => (
  <div className="card">
    <img src={props.url} style={{ width: "200px", height: "150px" }} />
    <h2>{props.title}</h2>
    <h3> Alu Bro</h3>
    <h3>3.8 Stars</h3>
  </div>
);

export default ResturentCard;
