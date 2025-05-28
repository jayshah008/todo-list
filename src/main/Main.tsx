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
        <li>{item} <button>Finished</button></li>
    )
        

    return (
        <>

        <div className="MainContent">

            <div className="listItems">

                {Items.length == 0 ?
                "No Items added yet..."
                :
                <ul>{listItems}</ul>
                }
            </div>

            <input type="text" value = {ItemValue} onChange={(e) => {setItemValue(e.target.value)}}/>
            <button onClick={addItems}>Add Task</button>

        </div>

        </>
    )
}

export default Main