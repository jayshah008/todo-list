import './Main.css'
import { useState } from 'react';


function Main() {

    const [ItemValue, setItemValue] = useState('');
    const [Items, setItems] = useState<string[]>([]);

    function addItems(){
        setItems([...Items, ItemValue])
        setItemValue('');
    }

    const listItems = Items.map(item => 
        <li>{item}</li>
    )
        

    return (
        <>

        <div className="MainContent">

            <div className="list">
                No tasks yet.....
            </div>

            <div className="listItems">
                <ul>{listItems}</ul>
            </div>

            <input type="text" value = {ItemValue} onChange={(e) => {setItemValue(e.target.value)}}/>
            <button onClick={addItems}>Add Task</button>

        </div>

        </>
    )
}

export default Main