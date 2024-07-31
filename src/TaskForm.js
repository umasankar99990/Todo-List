// // import React, { useState } from 'react';

// // const TaskForm = ({ addTask }) => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     addTask({ title, description, completed: false, updatedAt: new Date().toISOString() });
// //     setTitle('');
// //     setDescription('');
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input 
// //         type="text" 
// //         value={title} 
// //         onChange={(e) => setTitle(e.target.value)} 
// //         placeholder="Task Title" 
// //         required 
// //       />
// //       <textarea 
// //         value={description} 
// //         onChange={(e) => setDescription(e.target.value)} 
// //         placeholder="Task Description" 
// //         required 
// //       />
// //       <button type="submit">Add Task</button>
// //     </form>
// //   );
// // };

// // export default TaskForm;


// // src/components/TaskForm.js
// import React, { useState, useEffect } from 'react';

// const TaskForm = ({ onSave, selectedTask }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (selectedTask) {
//       setTitle(selectedTask.title);
//       setDescription(selectedTask.description);
//     }
//   }, [selectedTask]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const task = {
//       id: selectedTask ? selectedTask.id : new Date().getTime(),
//       title,
//       description,
//       completed: false,
//       updatedAt: new Date().toISOString(),
//     };
//     onSave(task);
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Task Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       />
//       <button type="submit">Save Task</button>
//     </form>
//   );
// };

// export default TaskForm;

import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, selectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: selectedTask ? selectedTask.id : new Date().getTime(),
      title,
      description,
      completed: false,
      updatedAt: new Date().toISOString(),
    };
    onSave(task);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
