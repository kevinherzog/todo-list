import React from "react";

const TaskHeader = props => {
    return(
        <thead>
            <tr>
               <th>Check</th>
               <th>Task</th>
               <th><button onClick={() => props.clearArchive()}>Clear</button></th>
            </tr>
        </thead>
    );
}
const TaskBody = props => {
    const rows = props.taskData.map((row, id) => {
        return(
            <tr key={id}>
                <td>  <input type="checkbox" checked={row.checked} onChange={() => props.removeTask(id, row.list )}/> </td>
                <td>{row.task}</td>
                <td></td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

const Archive = (props) => {
    const { taskData, clearArchive, removeTask } = props;
    return(
        <table>
            <TaskHeader clearArchive={clearArchive}/>
            <TaskBody taskData={taskData} removeTask={removeTask} />
        </table>
    )
}
export default Archive;