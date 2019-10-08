import * as React from "react";

interface props { 
    list: Array<any>,
    delTodoItem: any
}

interface initState {
    name?: string
}

class TodoList extends React.Component<props, initState>{
    TodoList (props: any) {
    }

    state: initState = {
        name: '21344'
    }

    delTodoItem = (index: number) => {
        this.props.delTodoItem(index)
    }
    
    render () {
        const { list } = this.props

        return (
            <div>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                <span >{item.name}</span>
                                <button style={{"marginLeft": "20px"}} onClick={this.delTodoItem.bind(this, index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList