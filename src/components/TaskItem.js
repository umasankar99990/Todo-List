// import React, { useState } from 'react';

// const TaskItem = ({ task }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div>
//       <div onClick={() => setIsExpanded(!isExpanded)}>
//         <h3>{task.title}</h3>
//         <p>{task.completed ? 'Completed' : 'Pending'}</p>
//       </div>
//       {isExpanded && (
//         <div>
//           <p>{task.description}</p>
//           <p>Last updated: {task.updatedAt}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;

import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <p>{task.task}</p>
    </div>
  );
};

export default TaskItem;

