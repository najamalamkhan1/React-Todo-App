import React from 'react'
import { useState } from 'react'
import './stylesheets/Todolist1.css'

function Todolist1() {
    // state variable
    const [list, setList] = useState([])
    const [listData, setListData] = useState([])


    let addTaskFunc = (e) => {
        e.preventDefault();
        if (listData.trim()) {
            setList([...list, listData]);
            setListData('');
        }
    }
    let delTaskFunc = (index) => {
        const newTodos = [...list];
        newTodos.splice(index, 1);
        setList(newTodos);
    };

    let editTaskFunc = (item) => {
        return (
            alert('Sorry due to system maintainance you can not update Todo value.')

        )

    }
    return (
        <>
            <form onSubmit={addTaskFunc}>
                <input type="text" value={listData} onChange={(e) => setListData(e.target.value)} placeholder={'Add Todo....'}
                />
                <button type="submit"><i class="fa fa-plus-square"></i></button>
            </form>
            <div className='container'>
                <table className='h-100 w-100 m-auto'>
                    <thead>
                        <tr>
                            <th>No</th> {'|'}
                            <th>Todo</th>{'|'}
                            <th>Done</th>{'|'}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr>
                                <td>
                                    {index + 1}
                                </td>{'|'}
                                <td onClick={editTaskFunc}>
                                    {item}
                                </td>{'|'}
                                <td>
                                    <input type="checkbox" className='h-100 w-50 rounded text-dark' />
                                </td>{'|'}
                                <td>
                                    <button onClick={() => delTaskFunc(index)} className='btn-outline-warning text-dark rounded'><i class="fa fa-trash-o"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todolist1