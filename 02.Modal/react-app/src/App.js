import { useState, useEffect } from 'react'
import useAxiosFetchApi from './hooks/useAxiosFetchApi'
import api from './api/todos'
import TodoList from './component/TodoList';
import './index.css'
import Modal from './component/Modal';


function App() {
  // state
  const [todos, setTodos] = useState([])
  const [modal, setModal] = useState(false)

//   hooks
  const { data, fetchError, isLoading } = useAxiosFetchApi('http://localhost:3500/todo');

// fetch api
  useEffect(() => {
    setTodos(data)
  }, [data])
  
// hendle check
  const handleCheck = async (id, e) =>  {
    console.log(e.target.checked)
    const todo = todos.find((todo) => todo.id === id);
    try {      
        const res = await api.patch(`http://localhost:3500/todo/${id}`, {checked: !todo.checked});
        setTodos(todos.map((todo) => todo.id === id ? {...res.data} : todo));
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };


// debug / console
  // console.log(isChecked)
  return (
    <div className="App">
    {modal && <Modal modal={modal} setModal={setModal} setTodos={setTodos} />}
      <main style={modal ? {scale: '0.9'} : {scale: '1'}}>
        <div className='container'>
          <h4 className='header'>{todos.length} to-do in today 🌻</h4>
          <div className='todo-section'>
            <TodoList todos={todos} handleCheck={handleCheck} fetchError={fetchError} isLoading={isLoading}/>
          </div>
          <button type='button' className='btn-clear' onClick={() => setModal(true)}>Clear all</button>
        </div>
      </main>
    </div>
  );
}

export default App;
