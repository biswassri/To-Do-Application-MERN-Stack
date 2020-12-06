import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListTodo.scss'

/**
 * Fetching the items for To-Do and Option for Edit and View
 */
const Todo = props => (
    <tr>
        <td className = { props.todo.status === 'Completed' ? 'completed' : ''}>{props.todo.title}</td>
        <td className = { props.todo.status === 'Completed' ? 'completed' : ''}>{props.todo.status}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
        <td>
        <Link to={"/view/" + props.todo._id}>View</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    //Get Operation for the list of task items
    componentDidMount() {
        fetch('http://localhost:3000/toDoList/',
        {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
            .then( response => response.json())
            .then( data => this.setState({
                    todos: data
                })
            );
    }

    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )
    

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}