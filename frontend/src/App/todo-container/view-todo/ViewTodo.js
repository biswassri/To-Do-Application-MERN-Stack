import React , { Component } from 'react';


const Todo = props => (
    <tr>
        <td >{props.todo.title}</td>
        <td >{props.todo.description}</td>
        <td >{props.todo.due_date}</td>
        <td >{props.todo.due_time}</td>
        <td >{props.todo.status}</td>
    </tr>
)


export default class ViewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            due_date:'',
            due_time:'',
            status: 'Pending'
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/toDoList/' + this.props.match.params.id,{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then( response => response.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                status: data.status,
                due_date: data.due_date,
                due_time: data.due_time
            })
        })
        .catch( err => console.log(err));
    }

    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )
    

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Due Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.title}</td>
                            <td>{this.state.description}</td>
                            <td>{this.state.due_date}</td>
                            <td>{this.state.due_time}</td>
                            <td>{this.state.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}