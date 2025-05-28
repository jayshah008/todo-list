import './Main.css'
import { useState } from 'react';


interface itemList{
    id : number;
    value : String;
}

function Main() {

    const [ItemValue, setItemValue] = useState('');
    const [Items, setItems] = useState<itemList[]>([]);
    const [id_Item, setId] = useState<number>(0);

    function addItems(){
        setItems([...Items, {id : id_Item, value: ItemValue}])
        setItemValue('');
        setId(id_Item => id_Item+1);
    }

    const removeItem = (ItemId : number) => {
        setItems(Items.filter(item => item.id !== ItemId))
    }

    const listItems = Items.map(item => 
        <li>{item.value}<button onClick={() => removeItem(item.id)}>Finished</button></li>
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