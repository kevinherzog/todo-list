import React from "react";

const TaskHeader = () => {
    return(
        <thead>
            <tr>
               <th>Check</th>
               <th>Task</th> 
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
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

const TaskTable = (props) => {
    const { taskData, removeTask } = props;
    return(
        <table>
            <TaskHeader />
            <TaskBody taskData={taskData} removeTask={removeTask}/>
        </table>
    )
}
export default TaskTable;