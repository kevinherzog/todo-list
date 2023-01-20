import React from "react";


const TaskHeader = () => {
    return(
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" className="px-6 py-3">Check</th>
               <th scope="col" className="px-6 py-3">Task</th>
               <th scope="col" className="px-6 py-3">Move Task</th>
            </tr>
        </thead>
    );
}
const TaskBody = props => {
    const rows = props.taskData.map((row, id) => {
        return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={id}>
                <td className="px-6 py-3">  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={row.checked} onChange={() => props.removeTask(id, row.list )}/> </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.task}</th>
                <td className="px-6 py-3"><button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => props.moveTask(id, row.list)} >Move</button></td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

const TaskTable = (props) => {
    const { taskData, removeTask, moveTask } = props;
    return(
        <table className="w-full text-sm text-left text-gray-500 rounded-full dark:text-gray-600 ">
            <TaskHeader />
            <TaskBody taskData={taskData} removeTask={removeTask} moveTask={moveTask}/>
        </table>
    )
}
export default TaskTable;