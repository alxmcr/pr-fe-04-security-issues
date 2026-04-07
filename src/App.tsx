import { Box } from "./components/box";
import { Circle } from "./components/circle";

export default function App() {
  return (
    <div className="App">
      <h1>Shapes!</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Box bgColor="blue" color="white" />
        <Circle bgColor="green" color="white" />
      </div>
    </div>
  );
}
