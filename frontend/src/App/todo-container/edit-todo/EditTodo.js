import React , { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    //Constructor to initiate the State of the function
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            status: 'Pending'
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
     * Editing individual To-Do tasks
     */
    componentDidMount() {
        //Fetching Id of the task
        fetch('http://localhost:3000/toDoList/' + this.props.match.params.id,
        {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
            .then(response => response.json())
            .then( data => {
                this.setState({
                    title: data.title,
                    description: data.description,
                    status: data.status
                })
            })
            .catch( err => console.log(err));
    }
    //Setting the states to the new values
    onChangeTodoDescription = e => {
        this.setState({ 
            description: e.target.value });
    }

    onChangeTodoStatus = e => {
        this.setState({ status: (this.state.status === 'Completed' ? 'Pending' : 'Completed')});
    }
    onChangeTodoTitle = e => {
        this.setState({ title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            description: this.state.description,
            title: this.state.title,
            status: this.state.status
        };
        console.log(obj);
        /**
         * patching the new value to the backend along with the id
         */
        fetch('http://localhost:3000/toDoList/' + this.props.match.params.id,{
            method : 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify(obj)
          })
            .then( response => response.json())
            .then(res => console.log(res.data));
        
        alert("Successfully edited TodoItem");
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
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
                    
                    <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoStatus}
                                    checked={this.state.status === "Completed"}
                                    value={this.state.status === "Completed"}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}
