# My Todo App

A simple, interactive To-Do List built with **React.js** and **Vite**. Allows users to add, complete, and delete tasks with a clean and minimal UI.

---

## Features

- Add new tasks using the input field or by pressing `Enter`
- Mark tasks as done by clicking the circle checkbox
- Delete tasks with the remove button
- Filter tasks by **All**, **Active**, or **Done**
- Live progress bar showing completion percentage
- Displays today's date dynamically

---

## Project Structure

```
my-todo-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Root component
    ├── TodoApp.jsx     # Main Todo component (logic + JSX)
    └── TodoApp.css     # All styles
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- npm (comes with Node.js)

### Installation

1. Clone or download this project into your local machine

2. Open the project folder in VSCode

3. Open the terminal (`Ctrl + ~`) and run:

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

---

## Built With

- [React.js](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Fast build tool and dev server
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) & [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) - Google Fonts

---

## Usage

| Action | How To |
|---|---|
| Add a task | Type in the input box and press `Enter` or click `+ Add` |
| Complete a task | Click the circle button on the left of the task |
| Delete a task | Click the × button on the right of the task |
| Filter tasks | Click `All`, `Active`, or `Done` buttons |

---

## Common Issues

**`Failed to load resource: index.css`**
Remove the `import "./index.css"` line from `src/main.jsx` if the file does not exist.

**`Already included file differs only in casing`**
Delete any duplicate files with different casing (e.g. `Todoapp.jsx`) from the `src/` folder.

**Vite cache error after renaming files**
Run the following to clear the cache and restart:
```bash
rd /s /q node_modules\.vite
npm run dev
```

---

## License

This project is open source and free to use for learning and personal projects.