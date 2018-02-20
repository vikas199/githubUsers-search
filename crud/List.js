import React , { Component } from 'react'

export default class List extends Component{

    onDelete(todo) {
        this.props.deleteTodo(todo)
    }

    onEdit(todo) {
        this.props.editTodo(todo)
    }
    render(){
        return(
          <ul className="list-group">
               {this.props.todos.map(todo => {
               return <li key={todo.id}>
                   <span onClick={this.onEdit.bind(this, todo)}>{todo.text}</span>
               <a  className="btn-danger" onClick={this.onDelete.bind(this, todo)} href="#">x</a>
               </li>
               
               })}
          </ul>

        )
    }
}