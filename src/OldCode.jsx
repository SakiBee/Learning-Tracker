// import React, { useState } from 'react';

// function App() {
//   const [tasks, setTask] = useState([]);
//   const [input, setInput] = useState("");

//   const addTask = () => {
//     if(input.trim() === "") return;
//     setTask([...tasks, input]);
//     setInput("");
//   }

//   const deleteTask = (idx) => {
//     const newTasks = tasks.filter((item, index) => idx !== index);
//     setTask(newTasks);
//   }

//   return (
//     <div className="m-0 p-0 w-screen h-screen flex items-center justify-center bg-[#0a0a0c] font-sans overflow-hidden relative">
//       <div className="relative z-10 bg-white/5 backdrop-blur-[20px] border border-white/10 p-10 rounded-[30px] w-full max-auto max-w-[400px] shadow-2xl text-center">
//         <h1 className="text-white text-[2.5rem] font-[800] mb-[30px] tracking-[-1px]"> Task Manager</h1>
//         
//         <div>
//           <input 
//             type="text" 
//             className="bg-black/30 border border-[#333] py-[15px] px-[20px] rounded-l-[15px] text-white text-[1rem] outline-none transition-colors duration-300 focus:border-[#0096ff]" 
//             placeholder="Enter a new task..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key == 'Enter' && addTask()}
//           />
//           <button className="bg-[#0096ff] text-white border-none p-[15px]  rounded-r-[15px] font-bold cursor-pointer text-[1rem]" 
//             onClick={addTask}> Add</button>
//         </div>

//         <div className="mt-[30px] max-h-[250px] overflow-y-auto text-left">
//           <ul className="list-none p-0 m-0">
//             {tasks?.map((text, index) => (
//               <li key={index} className="flex justify-between items-center gap-3 mb-2 py-[12px] px-[18px] border border-white/5 rounded-[12px]"> 
//                 <div className="flex justify-between items-center flex-grow">
//                   <input type="checkbox" className="w-[18px] h-[18px] cursor-pointer accent-[#0096ff]"/>
//                   <span className="text-white text-[1rem]">{text}</span>
//                   <button className="bg-[#ff4d4d] text-white border-none py-[6px] px-[12px] rounded-lg"
//                     onClick={()=> deleteTask(index)}>Delete 
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>        
//       </div>
//     </div>
//   );
// }

// export default App;

// so here is my code.
// I want to convert it to my daily learning activity manager.

// for this, add a daywise system, each day I will add what I learned with description.
// I can delete and edit them