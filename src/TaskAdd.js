import React, {Component} from 'react';

class TaskAdd extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            task: '',
            checked: false,
            list: "Masterlist",
            est: 120
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value } = event.target;
        //console.log(name + value)
        //console.log(this.state)
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const { task } = this.state;
        return(
            <form onSubmit={this.onFormSubmit} className="relative" >
                <input 
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange}
                    placeholder="New Task..."
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Add</button>
            </form>
        )
    }
}
export default TaskAdd