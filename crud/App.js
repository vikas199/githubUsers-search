import React, { Component } from 'react';
import Index from './index'
import List from './List'

export default class Main extends Component {
    state = {
        text: '',
        isEdit: 0,
        todos: [
            {
                id: 1,
                text:"hello",
                age: 10
            },
            {
                id: 2,
                text:"hi",
                age: 20
            },
            {
                id: 3,
                text:"I am there",
                age: 30
            }
        ]
    }
    handleTodo = (text) => {
        var newTodo = {
            id: this.state.todos.length + 1,
            text: text
        }
        this.setState({ todos: this.state.todos.concat(newTodo)})
    }

    handleDelete = (todo) => {
     let todos = this.state.todos
        for(let i=0; i < todos.length; i++) {
         if(todos[i].id === todo.id) {
             todos.splice(i,1)
         }
        }
        this.setState({ todos: todos})
    }
    handleUpdate = (todo) => {
        let todos = this.state.todos
        for(let i=0; i < todos.length; i++) {
            if(todos[i].id === todo.id) {
                todos.splice(i,1)
            }
        }
        todos.push(todo)
        this.setState({ todos: todos})
    }
    handleEditTodo = (todo) => {
        this.setState({ text: todo.text, isEdit: todo.id })
    }
    handleText = (text) => {
        this.setState({ text: text })
    }
    render() {
        return (
            <div>
                <Index  {...this.state} onTodoUpdate={this.handleUpdate} onChangeText={this.handleText} onTodoAdd={this.handleTodo}/>
                <List  editTodo={this.handleEditTodo} deleteTodo={this.handleDelete} {...this.state} />
            </div>
        )
    }
}