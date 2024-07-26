export function Todo({todos}){
    return <div>
        {todos.map((todos)=>{
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{todos.status==true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}