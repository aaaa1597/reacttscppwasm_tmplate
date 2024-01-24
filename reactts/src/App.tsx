import React, { useRef } from 'react';
import './App.css';

function App() {
  const refWasm = useRef<any>(null)

 const hWasm = require('./asm-cpp/hello.js');
  hWasm.Module.onRuntimeInitialized = () => {
    console.log("hWasm.Module add---", hWasm.Module.__Z3addii(11, 22));
    console.log("hWasm.Module sub---", hWasm.Module.__Z3subii(11, 22));
    refWasm.current = hWasm.Module
  }

  const wasmcalled = () => {
    console.log("hWasm.Module add", refWasm.current.__Z3addii(11, 22));
    console.log("hWasm.Module sub", refWasm.current.__Z3subii(11, 22));
  }

  return (
    <div className="App">
      hello world!!
      <button onClick={() => wasmcalled()}> Click 0 times</button>
      <div>count= 0</div>
  </div>
  );
}

export default App;
