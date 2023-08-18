import { useCounter } from "./Viewmodel";
import ButtonView from "./components/Button/View";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <div>
        <h1 id="boss">Vite + React</h1>
        <h1>{count}</h1>
        <ButtonView onClick={() => increment()} text="Increment +" />
        <ButtonView onClick={() => decrement()} text="Decrement +" />
      </div>
    </>
  );
}

export default App;
