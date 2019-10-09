export namespace todoInterface {
    export interface todoState {
        id: number,
        text: String,
        completed?: Boolean
    }
    
    export interface toggleTodo {
        id: number
    }
}
