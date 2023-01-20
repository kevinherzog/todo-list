import React from "react";

const TaskHeader = props => {
    return(
        <thead>
            <tr>
               <th>Check</th>
               <th>Task</th>
               <th><button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => props.clearArchive()}>Clear</button></th>
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
        <table className="table-fixed">
            <TaskHeader clearArchive={clearArchive}/>
            <TaskBody taskData={taskData} removeTask={removeTask} />
        </table>
    )
}
export default Archive;