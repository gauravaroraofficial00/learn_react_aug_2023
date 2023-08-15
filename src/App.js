import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My todos</h1>
      <Todo text="first task" /><br />
      <Todo text="second task" />
    </div>
  );
}

export default App;
//react code having a single h1 tag
