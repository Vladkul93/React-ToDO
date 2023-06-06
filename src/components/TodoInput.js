function TodoInput({todo, addToDo, setTodo}) {
    return (
        <div className='input-wrapper'>
            <input 
                type='text'
                value={todo}
                name='todo' 
                placeholder='Введіть щось'
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button className='add-button'
                onClick={addToDo}

            >Натисніть 
            </button>
        </div>
    )
}

export default TodoInput;