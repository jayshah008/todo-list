import './Main.css'
import { useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";



interface itemList{
    id : number;
    value : String;
    dateValue : String;
}

function Main() {

    const [ItemValue, setItemValue] = useState('');
    const [Items, setItems] = useState<itemList[]>([]);
    const [id_Item, setId] = useState<number>(0);
    const [date, setDate] = useState(new Date().toLocaleDateString());

    function addItems(){
        setItems([...Items, {id : id_Item, value: ItemValue, dateValue : date}])
        setItemValue('');
        setId(id_Item => id_Item+1);
        setDate(new Date().toLocaleDateString());
    }

    const editItem = (ItemId : number) => {
    }

    const removeItem = (ItemId : number) => {
        setItems(Items.filter(item => item.id !== ItemId))
    }

    const listItems = Items.map(item => 
        <li className='listItems'> <CiCircleCheck  onClick={() => removeItem(item.id)}/> 
        <span>{item.value} - {item.dateValue}</span>
        <IoPencil onClick={() => editItem(item.id)}/>
        <button onClick={() => removeItem(item.id)}>Finished</button></li>
    )
        

    return (
        <>

        <div className="MainContent">

            <div className="headerContent">
                <h1 className='day'>Today</h1>
                <h1 className='count'>{Items.length}</h1>
            </div>

            <div className="listItems">

                {Items.length == 0 ?
                "No Items added yet..."
                :
                <ul className='listItems'>{listItems}</ul>
                }
            </div>

            <input type="text" value = {ItemValue} onChange={(e) => {setItemValue(e.target.value)}}
            onKeyDown={(e) => {
                if(e.key == 'Enter'){
                    addItems();
                }
            }}
            />
            <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
            <button onClick={addItems}>Add Task</button>

        </div>

        </>
    )
}

export default Main