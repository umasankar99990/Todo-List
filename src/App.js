// import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import Search from './components/Search';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);

//   const addTask = (task) => {
//     const newTasks = [...tasks, task];
//     setTasks(newTasks);
//     setFilteredTasks(newTasks);
//   };

//   const handleSearch = (query) => {
//     const result = tasks.filter(task => task.title.includes(query));
//     setFilteredTasks(result);
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TaskForm addTask={addTask} />
//       <Search onSearch={handleSearch} />
//       <TaskList tasks={filteredTasks} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSaveTask = (task) => {
    if (selectedTask) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setSelectedTask(null);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <TaskForm onSave={handleSaveTask} selectedTask={selectedTask} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleEditTask(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

