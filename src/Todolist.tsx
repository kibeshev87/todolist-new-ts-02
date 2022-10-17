import React, {useState} from 'react';
import './App.css';
import {FilterValueType} from "./App";

type PropsType = {
    title: string
    tasks: Array<PropsTaskType>
    removeTasks: (taskId: number) => void
    //filterTasks: (filterValue: FilterValueType) => void
}
type PropsTaskType = {
    id: number
    title: string
    isDone: boolean

}


export const Todolist = (props: PropsType) => {

    let [filter, setFilter] = useState<FilterValueType>('All')


    let afterFilterTasks = props.tasks
    if(filter === 'Active'){
        afterFilterTasks = props.tasks.filter(el=>!el.isDone)
    }
    if(filter === 'Completed'){
        afterFilterTasks = props.tasks.filter(el=>el.isDone)
    }

    const filterTasks = (filterValue: FilterValueType) => {
        setFilter(filterValue)
        console.log(filterValue)
    }


    return (

        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {afterFilterTasks.map((el, index) => {

                        const onClickHandler = () => {
                            console.log(el.id)
                        }

                        return (
                            <li key={index}>
                                <button onClick={() => props.removeTasks(el.id)}>X</button>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}

                </ul>
                <div>
                    <button onClick={()=>filterTasks('All')} >All</button>
                    <button onClick={()=>filterTasks('Active')}>Active</button>
                    <button onClick={()=>filterTasks('Completed')} >Completed</button>
                </div>
            </div>
        </div>
    );
}

