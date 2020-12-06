import React , { Component } from 'react';
import './CreateTodo.scss';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            due_date:'',
            due_time:'',
            status: 'Pending'
        }
    }
    /**
     * 
     * Setting the state for the individual Values 
     */
    onChangeTodoDescription = e => {
        this.setState({ description: e.target.value });
    }
        
    onChangeTodoStatus = e => {
        this.setState({ status: e.target.value });
    }

    onChangeTodoTitle = e => {
        this.setState({ title: e.target.value });
    }

    onChangeTodoDueDate = e => {
        this.setState({ due_date: e.target.value});
    }

    onChangeTodoDueTime = e => {
        this.setState({ due_time: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();

        /**
         * Creating a new To-do and pushing it to backend
         */
        console.log('Form submitted:');
        console.log(`Todo Title: ${this.state.title}`);
        console.log(`Todo description: ${this.state.description}`);
        console.log(`Todo Status: ${this.state.status}`);
        console.log(`Todo Date: ${this.state.due_date}`);
        console.log(`Todo Time: ${this.state.due_time}`);

        const newTodo = {
            description: this.state.description,
            title: this.state.title,
            status: this.state.status,
            due_date: this.state.due_date,
            due_time: this.state.due_time
        }
        /**
         * Post Call to the backend
         */
        fetch('http://localhost:3000/toDoList/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(newTodo)
        })
            .then(response => response.json())
            .then( res => console.log(res.data));
        
        alert("Successfully added a TodoItem");
        //Default Value for Status should be pending
        this.setState({
            description: '',
            title: '',
            status: 'Pending',
            due_date : '',
            due_time : ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Task</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTodoTitle}
                                />

                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeTodoDescription}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Due Date: </label>
                        <input type="date"
                                className="form-control"
                                value={this.state.due_date}
                                onChange={this.onChangeTodoDueDate}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Due Time: </label>
                        <input type="time"
                                className="form-control"
                                value={this.state.due_time}
                                onChange={this.onChangeTodoDueTime}
                                />
                                
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
