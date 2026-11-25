import Players from "./Players";

const App = () => {
  let players = [
    { id: 1, name: "Virat Kohli" },
    { id: 2, name: "MS Dhoni"},
    { id: 3, name: "Rohit Sharma" },
    { id: 4, name: "Jasprit Bumrah"}
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to App</h1>

      <hr style={{ margin: "20px 0" }} />

      <h2>Indian Cricket Players</h2>
      <Players obj1={players} />
    </div>
  );
};

export default App;