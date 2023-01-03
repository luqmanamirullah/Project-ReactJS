const TodoList = ({todos, handleCheck, fetchError, isLoading}) => {
  return (
    <>
    {fetchError && 
        <>
            <p style={{color:'red'}}>Error: {fetchError}</p>           
        </>
    }

    {!fetchError && 
    <>
        {isLoading && <><p>Data is loading..</p></>}
        {!isLoading && 
            <>
                {todos.length ? 
                    <>
                        <ul className='todo-ul'>
                        {todos.map((todo) => (
                            <li className='todo-li' key={todo.id}>
                                <p className='label'>{todo.item}</p>
                                <label className='checkbox-container' htmlFor={`checkbox-${todo.id}`}>
                                    <input id={`checkbox-${todo.id}`} type="checkbox" onChange={(e) => handleCheck(todo.id, e)} checked={todo.checked}/>
                                    <div className='checkmark'></div>
                                </label>
                            </li>
                        ))}
                        </ul>
                    </> : 
                    <>
                        <p>you dont have to do list</p>
                    </>
                }
            </>
        }
    </>
    }
    </>
  )
}

export default TodoList