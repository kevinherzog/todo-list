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
            <form onSubmit={this.onFormSubmit}>
                <label>New Task</label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange} />
                <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="submit">Add</button>
            </form>
        )
    }
}
export default TaskAdd