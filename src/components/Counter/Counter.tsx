import { Component, createSignal } from "solid-js"

const Counter: Component = () => {
    const [getCounter, setCounter] = createSignal(0)
    return (
      <div>
        <h1>Hello Solid - {getCounter()}</h1>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
      </div>
    );
}

export default Counter