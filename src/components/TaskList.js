// // import React, { useState, useEffect } from 'react';
// import TaskItem from './TaskItem';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // Fetch tasks from tasks.json
//     fetch('/tasks.json')
//       .then(response => response.json())
//       .then(data => setTasks(data));
      
//   }, []);

//   return (
//     <div>
//       {tasks.map(task => (
//         <TaskItem key={task.id} task={task} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;

import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tasks from tasks.json
    fetch('/tasks.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error); // Log the error
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;



