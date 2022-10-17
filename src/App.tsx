import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

//ЗАНЯТИЯ ДЛЯ САМОСТОЯТЕЛЬНОГО
//<button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
// <button onClick={ () => { changeFilter("three") } }>
// //                 Give me the first three
// //             </button
export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {

    const title1 = 'What to learn -1'
    const title2 = 'What to learn -2'
    //
    // let tasks = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "ReactJS????????>>>>", isDone: false}
    // ]
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS????????>>>>", isDone: false}
    ])

    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }
    // let [filter, setFilter] = useState<FilterValueType>('All')
    //
    // const removeTasks = (taskId: number) => {
    //     setTasks(tasks.filter(el => el.id !== taskId))
    // }
    //
    // let afterFilterTasks = tasks
    // if(filter === 'Active'){
    //     afterFilterTasks = tasks.filter(el=>!el.isDone)
    // }
    // if(filter === 'Completed'){
    //     afterFilterTasks = tasks.filter(el=>el.isDone)
    // }
    //
    // const filterTasks = (filterValue: FilterValueType) => {
    //     setFilter(filterValue)
    //     console.log(filterValue)
    // }

    return (
        <div className="App">
            <Todolist
                title={title1}
                tasks={tasks}
                //setTasks={setTasks}
                removeTasks={removeTasks}
                //filterTasks={filterTasks}
            />
        </div>
    )
}

export default App;
