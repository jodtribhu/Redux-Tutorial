import Api from './Api';
import { TodoModel } from '../models/redux-models';
export default{
    async getAllTodos(){
        var response=await Api().get('todos');
        console.log("Inside get Todo"+response.data)
        return response.data;
    },
    async getParticularTodo(todo_id:number){
        var response=await Api().get('todos');
        console.log("Inside get Todo"+response.data)
        return response.data.filter((todo:TodoModel)=>todo.id===todo_id)[0];
    }
}