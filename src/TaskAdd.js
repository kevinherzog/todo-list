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
                <button type="submit">Add</button>
            </form>
        )
    }
}
export default TaskAdd