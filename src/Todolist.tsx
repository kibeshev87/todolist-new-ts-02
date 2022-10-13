import React from 'react';
import './App.css';

type PropsType = {
    title: string
    tasks: Array<PropsTaskType>
}
type PropsTaskType = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = (props: PropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(el => <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                    </li>)}

                    {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span>
                    </li>
                    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span>
                    </li>
                    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span>
                    </li>*/}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

