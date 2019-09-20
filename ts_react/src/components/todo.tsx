import * as React from "react";
import { Button } from 'antd'

interface initPorps{
    addTodo: any,
}

export default class Todo extends React.Component<initPorps> {
    private inputRef = React.createRef<HTMLInputElement>()

    addTodo = () => {
        const value = this.inputRef.current && this.inputRef.current.value
        this.props.addTodo(value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <Button type="primary" onClick={this.addTodo.bind(this)}>添加</Button>
            </div>
        )
    }
}