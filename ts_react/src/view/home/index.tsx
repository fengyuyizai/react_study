import * as React from "react";

import Todo from "@/components/todo"
import TodoList from "@/components/todoList"

interface state {
    todoList: Array<object>
}

export default class Home extends React.Component{
    Home(props: any) {
        console.log(props)
    }
    
    state: state = {
        todoList: [
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' }
        ]
    }

    addTodo = (value: string) => {
        // 纯函数
        let todoList = [...this.state.todoList, {name: value}]
        this.setState({
            todoList
        })
    }

    delTodoItem = (totalIndex: number) => {
        let todoList = this.state.todoList.filter((item, index) => index !== totalIndex)
        this.setState({
            todoList
        })
    }

    render() {
        const { todoList } = this.state
        return (
            <div>
                <title>Home</title>
                <section>
                    <Todo addTodo={this.addTodo}></Todo>
                    <TodoList list={todoList} delTodoItem={this.delTodoItem}></TodoList>
                </section>
            </div>
            
        )
    }
}