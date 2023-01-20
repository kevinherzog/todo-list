import React from "react";

const TaskHeader = props => {
    return(
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" className="px-6 py-3 w-1/12">Check</th>
               <th scope="col" className="px-6 py-3">Task</th>
               <th scope="col" className="px-6 py-3 w-2/12"><button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => props.clearArchive()}>Clear</button></th>
            </tr>
        </thead>
    );
}
const TaskBody = props => {
    const rows = props.taskData.map((row, id) => {
        return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={id}>
                <td className="px-6 py-3">  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={row.checked} onChange={() => props.removeTask(id, row.list )}/> </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan={2}>{row.task}</th>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

const Archive = (props) => {
    const { taskData, clearArchive, removeTask } = props;
    return(
        <table className="w-full text-sm text-left  border rounded-lg overflow-hidden text-gray-500 dark:text-gray-400">
            <TaskHeader clearArchive={clearArchive}/>
            <TaskBody taskData={taskData} removeTask={removeTask} />
        </table>
    )
}
export default Archive;