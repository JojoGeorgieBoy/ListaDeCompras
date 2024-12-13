// import React, { useState } from 'react';

// interface ListItem {
//   id: number;
//   text: string;
// }

// const ListApp = () => {
//   const [listItems, setListItems] = useState<ListItem[]>([]);
//   const [newItemText, setNewItemText] = useState('');

//   const handleAddItem = () => {
//     if (newItemText.trim() !== '') {
//       if (newItemText.trim().length > 20) {
//         setNewItemText('Largo mayor a 20 caract.');
//         return;
//       }             
//       setListItems([...listItems, { id: listItems.length + 1, text: newItemText }]);
//       setNewItemText('');
//     }
//   };

//   const handleDeleteItem = (id: number) => {
//     setListItems(listItems.filter((item) => item.id !== id));
//   };

//   const cleanInput = () => {
//     setNewItemText('');
//   };

//   return (
//     <div className="h-screen bg-gray-100 p-4">
//       <h2 className="text-3xl font-bold mb-4">Lista de articulos</h2>
//         <table id="_tableTitulo">
//           <tr>
//             <td>
//               <input
//                 type="text"
//                 value={newItemText}
//                 onClick={cleanInput}
//                 onChange={(e) => setNewItemText(e.target.value)}
//                 placeholder="Agregar nuevo artículo"
//                 autoFocus 
//                 id="inputArticulo"/>
//             </td> 
//             <td> 
//               <button
//                 onClick={handleAddItem}
//                 id="buttonGreen">
//                 Agregar
//               </button>
//             </td>        
//           </tr>         
//         </table>
//         <br />          
//         <table id="_tableRows">
//           {listItems.map((item) => (
//             <tr key={item.id} id="_row">
//               <td id="divTexto">
//                 <span className="text-lg">{item.text}</span>
//               </td>
//               <td id="divButton">
//                 <button
//                   onClick={() => handleDeleteItem(item.id)}
//                   id="buttonRed">
//                   Eliminar
//                 </button>
//               </td>              
//             </tr>
//           ))}
//         </table>
//     </div>
//   );
// };

// export default ListApp;

// import React, { useState } from 'react';

// interface CheckboxItem {
//   id: number;
//   label: string;
// }

// const CheckboxList = () => {
//   const [checkboxItems] = useState<CheckboxItem[]>([
//     { id: 1, label: 'Item 1' },
//     { id: 2, label: 'Item 2' },
//     { id: 3, label: 'Item 3' },
//   ]);

//   const [checkedItems, setCheckedItems] = useState<number[]>([]);

//   const handleCheckboxChange = (id: number) => {
//     if (checkedItems.includes(id)) {
//       setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
//     } else {
//       setCheckedItems([...checkedItems, id]);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-lg font-bold mb-4">Checkbox List</h2>
//       <ul className="space-y-4">
//         {checkboxItems.map((item) => (
//           <li key={item.id} className="flex items-center">
//             <input
//               type="checkbox"
//               checked={checkedItems.includes(item.id)}
//               onChange={() => handleCheckboxChange(item.id)}
//               placeholder='Chupalo'
//               className="mr-2"
//             />
//             <span className="text-gray-700">{item.label}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CheckboxList;


// *********************************************************************************************************

// import React, { useState } from 'react';

// interface Item {
//   id: number;
//   value: string;
// }

// const ListApp = () => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [inputValue, setInputValue] = useState('');
//   const [error, setError] = useState(false);
//   const [displayString, setDisplayString] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputValue.trim() !== '') {

//       if (inputValue.trim().length > 25) {   
//         setError(true);        
//         setDisplayString('Largo mayor a 25 caracteres');            
//         return;
//       }        

//       if (items.some(item => item.value.toLowerCase() === inputValue.toLowerCase())) {
//         setError(true);
//         setDisplayString(inputValue + ', ya existe en la lista'); 
//         return;
//       }   

//       setItems([...items, { id: Date.now(), value: inputValue }]);
//       setInputValue('');
//       setError(false);

//     }
//   };

//   const handleDelete = (id: number) => {
//     // alert("Borrando " + id);
//     setItems(items.filter(item => item.id !== id));
//   };

//   const cleanInput = () => {
//     setInputValue('');
//     setError(false);
//   };  

//   return (
//     <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
//       <h2>Lista de tareas</h2>
//       <form onSubmit={handleSubmit}>
//         <table id="_tableTitulo">
//           <tr>
//             <td>        
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={e => setInputValue(e.target.value)}
//                 onClick={cleanInput}
//                 placeholder="Agregar item"
//                 id="inputArticulo"
//                 autoFocus/>
//             </td> 
//             <td>         
//               <button
//                   type="submit"
//                   id="buttonGreen">
//                   &nbsp;&nbsp;Agregar&nbsp;&nbsp;
//               </button>
              
//             </td>        
//           </tr>      
//         </table>  
//         <table>
//           <tr>
//             <td>
//               <span>{error && (<p id="pReclamo">{displayString}</p>)}</span>
//             </td>
//           </tr>       
//         </table>        
//       </form>
//       <table id="_tableRows">
//         {items.map(item => (
//           <tr key={item.id} id="_row">
//             <td id="divTexto">
//               <span>{item.value}</span>
//             </td>
//             <td id="divButton">
//               <table>
//                 <tr>
//                   <td>Check</td>
//                     <td>                
//                       <input 
//                         type="checkbox"
//                         placeholder='Finalizar'
//                         onClick={() => handleDelete(item.id)}
//                         id="buttonRed"
//                         value="">
//                       </input>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default ListApp;

// *********************************************************************************************************

// import { useState } from 'react';

// interface ChecklistItem {
//   id: number;
//   text: string;
//   completed: boolean;
//   repeated: boolean;
// }

// const ChecklistApp = () => {
//   const [items, setItems] = useState<ChecklistItem[]>([]);
//   const [newItemText, setNewItemText] = useState('');

//   const handleAddItem = () => {
//     if (newItemText.trim() === '') return;

//     const existingItem = items.find((item) => item.text === newItemText);
//     if (existingItem) {
//       setItems((prevItems) =>
//         prevItems.map((item) =>
//           item.text === newItemText ? { ...item, repeated: true } : item
//         )
//       );
//     } else {
//       setItems((prevItems) => [
//         ...prevItems,
//         { id: Date.now(), text: newItemText, completed: false, repeated: false },
//       ]);
//     }
//     setNewItemText('');
//   };

//   const handleToggleCompleted = (id: number) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, completed: !item.completed } : item
//       )
//     );
//   };

//   // const handleRemoveItem = (id: number) => {
//   //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   // };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h1 className="text-lg font-bold mb-4">Checklist App</h1>
//       <input
//         type="text"
//         value={newItemText}
//         onChange={(e) => setNewItemText(e.target.value)}
//         placeholder="Add new item"
//         className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//       />
//       <button
//         onClick={handleAddItem}
//         className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
//       >
//         Add
//       </button>
//       <ul className="mt-4">
//         {items.map((item) => (
//           <li key={item.id} className="flex items-center mb-2">
//             <span
//               className={`text-sm ${
//                 item.repeated
//                   ? 'text-gray-300 line-through decoration-red-500'
//                   : item.completed
//                   ? 'text-gray-300 line-through'
//                   : 'text-gray-700'
//               }`}
//             >
//               {item.text}
//             </span>
//             <input
//               type="checkbox"
//               placeholder='nada'
//               checked={item.completed}
//               onChange={() => handleToggleCompleted(item.id)}
//               className="mr-2"
//             />            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ChecklistApp;

// *********************************************************************************************************

import { useState } from 'react';

interface Item {
  id: number;
  text: string;
  checked: boolean;
}

const CheckboxApp = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Comprar leche', checked: false },
    { id: 2, text: 'Pasear el perro', checked: false },
    { id: 3, text: 'Lavar la ropa', checked: false },
  ]);

  const handleCheckboxChange = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">Checkbox App</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
              className="mr-2"
            />
            <span className={`text-lg ${item.checked ? 'line-through text-gray-400' : ''}`}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxApp;


// ********************************************************************************************

// import React, { useState } from 'react';

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([
//     { id: 1, text: 'Buy milk', completed: false },
//     { id: 2, text: 'Walk the dog', completed: false },
//     { id: 3, text: 'Do laundry', completed: false },
//   ]);

//   const [newTodo, setNewTodo] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (newTodo.trim() === '') return;
//     setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
//     setNewTodo('');
//   };

//   const handleToggleCompleted = (id: number) => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
//   };

//   // const handleDelete = (id: number) => {
//   //   setTodos(todos.filter(todo => todo.id !== id));
//   // };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4">Todo List</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add new todo"
//           className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//         />
//         <button
//           type="submit"
//           className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         >
//           Add
//         </button>
//       </form>
//       <ul className="mt-4">
//         {todos.map(todo => (
//           <li key={todo.id} className="flex items-center justify-between p-2 border-b border-gray-200">
//             <span
//               className={`text-sm ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}
//             >
//               {todo.text}
//             </span>
//             <div className="flex items-center">
//               <button
//                 onClick={() => handleToggleCompleted(todo.id)}
//                 className={`mr-2 py-1 px-2 ${todo.completed ? 'bg-green-500' : 'bg-gray-200'} text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600`}
//               >
//                 {todo.completed ? 'Completed' : 'Mark as completed'}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;