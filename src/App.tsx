// import { useState } from 'react'
import { useState } from "react"
import "./App.css"

class Task {
  constructor(
    public id: string,
    public name: string,
    public quantity: string,
    public checked: boolean,
  ) {}
}

const task1 = new Task("1", "task1", "100g", false)
const task2 = new Task("2", "task2", "100g", true)
const tasks = [task1, task2]

function TaskItem({ name }: { name: string }) {
  return <p>{name} </p>
}

function Header() {
  const nbCompleted = tasks.filter((t) => t.checked).length
  const percent = Math.floor((100 * nbCompleted) / tasks.length)
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#4caf50",
        gap: "15px",
        width: "100%",
      }}
    >
      <div>
        <div style={{ fontSize: "48px" }}>☰</div>
      </div>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>Mes Courses</div>
      <div>
        {" "}
        {nbCompleted}/{tasks.length} ({percent}%)
      </div>
      <button style={{ marginLeft: "auto" }}>share</button>
    </header>
  )
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)
  const hideIfInactive = (tabIndex: number) =>
    activeTab == tabIndex ? "block" : "none"
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => setActiveTab(0)}>TAB1</button>
        <button onClick={() => setActiveTab(1)}>TAB2</button>
      </div>
      <div style={{ display: hideIfInactive(0) }}>
        {tasks.map((t) => (
          <TaskItem key={t.id} name={t.name} />
        ))}
      </div>
      <div style={{ display: hideIfInactive(1) }}>THIS IS TAB 2</div>
    </>
  )
}

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
        backgroundColor: "#e8d297",
      }}
    >
      <Header />
      <Tabs />
    </div>
  )
}

export default App
