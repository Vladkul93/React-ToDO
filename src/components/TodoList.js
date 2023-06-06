function TodoList({list, remove}) {
    return (
        <>
            {list?.length > 0 ? (
            <ul className='todo-list'>
                {list.map((entry, index)=> ( 
                <div className='todo'>
                    <li key={index}>{entry}</li>
                    <button 
                        className='delete-button'
                        onClick={()=> {
                        remove(entry);
                        }}
                        >Видалити</button> 
                    </div>
                    ))}
            </ul>
            ) : (
                <div className='empty'>
                <p>Відсутній запис</p>
                </div>
            )}
        </>
    )
}

export default TodoList;