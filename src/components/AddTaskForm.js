import react, { useState } from "react";
import "./AddTaskForm.css";

const AddTasKForm = () => {
    const [input, setInput] = useState("");
    const [ToDO, setToDo] = useState([]);

    const AddToDo = () => {
        if(input.trim() === "") return;

        const newTask = {
            id:Date.now(),
            text:input
        }
        setToDo([...ToDO, newTask]);
        setInput("");
    }

    const Delete = (id) => {
        const updatedTasks = ToDO.filter((task) => task.id !== id);
        setToDo(updatedTasks)
    }
    return(
        <div>
            <h1>ToDO List Project</h1>
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />  
            <div>
                <button onClick={AddToDo}>Add</button>
            </div>
            <div>
                {ToDO.map((item, index) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <div>
                            <button onClick={() => Delete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddTasKForm;