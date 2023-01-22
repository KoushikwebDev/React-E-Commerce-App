const Shimmer = () => {
  return (
    <div
      className="restaurant-list"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card"
            style={{
              height: "150px",
              width: "200px",
              backgroundColor: "lightgray",
              margin: "20px",
            }}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
