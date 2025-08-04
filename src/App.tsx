// import { useState } from 'react'
import { useState } from "react"
import MenuSvg from "./assets/icons/menu.svg?react"
import ShareSvg from "./assets/icons/share.svg?react"
import "./App.css"

interface Task {
  id: string
  name: string
  quantity: string
  store: string
  checked: boolean
}

function TaskItem({ task, onTaskUpdated }: { task: Task; onTaskUpdated: any }) {
  return (
    <div
      onClick={() => {
        onTaskUpdated({ ...task, checked: !task.checked })
      }}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <input
        style={{ margin: "10px" }}
        type="checkbox"
        readOnly
        checked={task.checked}
      />
      <p>{task.name}</p>
      <p style={{ color: "gold", marginLeft: "10px" }}>{task.quantity}</p>
    </div>
  )
}

function Header({ tasks }: { tasks: Task[] }) {
  const nbCompleted = tasks.filter((t) => t.checked).length
  const percent = Math.floor((100 * nbCompleted) / tasks.length)
  return (
    <header
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "15px",
        width: "100%",
      }}
    >
      <MenuSvg width="32px" height="32px" />
      <h2>Mes Courses</h2>
      <div>
        {" "}
        {nbCompleted}/{tasks.length} ({percent}%)
      </div>
      <ShareSvg style={{ marginLeft: "auto" }} width="32px" height="32px" />
    </header>
  )
}

function Section({
  title,
  tasks,
  onTaskUpdated,
}: {
  title: string
  tasks: Task[]
  onTaskUpdated: any
}) {
  const [show, setShow] = useState(true)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 onClick={() => setShow(!show)}>{title}</h2>
      <div style={{ display: show ? "block" : "none" }}>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onTaskUpdated={onTaskUpdated} />
        ))}
      </div>
    </div>
  )
}

function Tabs({ tasks, onTaskUpdated }: { tasks: Task[]; onTaskUpdated: any }) {
  const [activeTab, setActiveTab] = useState(0)
  const hideIfInactive = (tabIndex: number) =>
    activeTab == tabIndex ? "block" : "none"
  const activeColor = (tabIndex: number) =>
    activeTab == tabIndex ? "white" : "black"
  const stores = [...new Set(tasks.map((t) => t.store))]
  return (
    <>
      <div
        className="header"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <h2 style={{ color: activeColor(0) }} onClick={() => setActiveTab(0)}>
          RAYON
        </h2>
        <h2 style={{ color: activeColor(1) }} onClick={() => setActiveTab(1)}>
          A VENIR
        </h2>
      </div>
      <div style={{ display: hideIfInactive(0) }}>
        {stores.map((store) => (
          <Section
            title={store}
            onTaskUpdated={onTaskUpdated}
            tasks={tasks.filter((t) => t.store == store)}
          />
        ))}
      </div>
      <div style={{ display: hideIfInactive(1) }}>THIS IS TAB 2</div>
    </>
  )
}

function App() {
  const task1: Task = {
    id: "1",
    name: "task1",
    quantity: "100g",
    store: "Rayon1",
    checked: false,
  }
  const task2: Task = {
    id: "2",
    name: "task2",
    quantity: "2g",
    store: "Rayon2",
    checked: true,
  }
  const [tasks, setTasks] = useState([task1, task2])
  const updateTask = (task: Task) => {
    setTasks([...tasks.filter((t) => t.id != task.id), task])
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        height: "100vh",
        width: "30vw",
      }}
    >
      <Header tasks={tasks} />
      <Tabs tasks={tasks} onTaskUpdated={updateTask} />
    </div>
  )
}

export default App
