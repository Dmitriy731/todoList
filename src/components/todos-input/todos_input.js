import { Component } from 'react';

import TodosList from "../totosList/totosList"

import './todos_input.scss'

class Todos extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    generateKey = () => Math.random().toString(36).substring(3)

    onPostItem = (e) => {
        if (e.key === "Enter" || e.code === 'Enter') {
            const input = e.target.value
                const todo = {
                    content: input,
                    complete: false,
                    key: this.generateKey()
                }

                const todos = [...this.state.todos]
                todos.push(todo)

                this.setState({todos})
                return todos;
            
        }
    }

    onComplete = (key) => {
        const todos = [...this.state.todos]
        todos.forEach(item => {
            if(item.key === key) {
                item.complete = !item.complete
            }
        })

        this.setState({todos})
        return todos;
    }

    onDelete = (key) => {
        let todo = this.state.todos.filter(item => {
            return item.key !== key;
        });
        this.setState({todos: todo})
    }

    render () {
        const todosList = (this.state.todos.length > 0) ? this.state.todos.map(item => 
        <TodosList content={item.content}
                   complete={item.complete}
                   id={item.key}
                   key={item.key}
                   onComplete={this.onComplete}
                   onDelete={this.onDelete}/>) : []

        return (
            <View elems={todosList} onPostItem={this.onPostItem}/>
        )
    }
}

const View = ({elems, onPostItem}) => {
    return (
        <div className="todos">
            <div className="todos__input">
                <input id="todos__input_post"
                        className="todos__input_post" 
                        type="text" 
                        placeholder='Укажите заметки'
                        onKeyDown={onPostItem}/>
            </div>

            {elems}
        </div>
    )
}

export default Todos;