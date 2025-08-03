// import { useState } from 'react'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100vh",
        width: "40vw",
        backgroundColor: "yellow",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#4caf50",
          gap: "15px",
          // padding: "10px 15px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "48px" }}>☰</div>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>Mes Courses</div>
        <div>0/10(0%)</div>
        <button style={{ marginLeft: "auto" }}>share</button>
      </header>
    </div>
  );
}

// <div style={{display: 'flex', flexDirection: 'column'}}>
//   <h1>Title1</h1>
//   <h1>Title2</h1>
// </div>

export default App;
