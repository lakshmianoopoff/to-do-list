import { useState, useRef, useEffect } from 'react'
import './TodoApp.css'

const initialTasks = [
  { id: 1, text: 'Review project proposal', done: false },
  { id: 2, text: 'Push latest code to GitHub', done: true },
  { id: 3, text: 'Plan the canteen coupon system sprint', done: false },
]

export default function TodoApp() {
  const [tasks, setTasks] = useState(initialTasks)
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')
  const inputRef = useRef(null)
  const nextId = useRef(4)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks((prev) => [{ id: nextId.current++, text, done: false }, ...prev])
    setInput('')
    inputRef.current?.focus()
  }

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id))

  const filtered = tasks.filter((t) =>
    filter === 'all' ? true : filter === 'done' ? t.done : !t.done
  )

  const doneCount = tasks.filter((t) => t.done).length
  const total = tasks.length
  const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="todo-wrapper">
      <div className="todo-header">
        <h1>My Tasks</h1>
        <p className="date-label">{today}</p>
      </div>

      <div className="input-row">
        <input
          ref={inputRef}
          className="task-input"
          type="text"
          placeholder="Add a new task..."
          value={input}
          maxLength={200}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="add-btn" onClick={addTask}>
          + Add
        </button>
      </div>

      <div className="filter-row">
        {['all', 'active', 'done'].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="task-list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            {filter === 'all' ? 'No tasks yet. Add one above!' : `No ${filter} tasks.`}
          </div>
        ) : (
          filtered.map((task) => (
            <div key={task.id} className={`task-card ${task.done ? 'done' : ''}`}>
              <button
                className={`check-btn ${task.done ? 'checked' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.done && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <polyline
                      points="1.5,6 4.5,9 10.5,3"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <span className={`task-text ${task.done ? 'done' : ''}`}>
                {task.text}
              </span>

              <button className="del-btn" onClick={() => deleteTask(task.id)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {total > 0 && (
        <div>
          <div className="stats-row">
            <span>{doneCount} of {total} task{total !== 1 ? 's' : ''} completed</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  )
}