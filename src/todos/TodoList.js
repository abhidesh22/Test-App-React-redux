import React from "react";
import { connect } from "react-redux";
import { removeTodo, markCompleted } from "./actions";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';

const TodoList = ({ todos = [{text: "Hello"}], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem 
                            todo={todo} 
                            onRemovePressed = {onRemovePressed} 
                            onCompletedPressed= {onCompletedPressed} 
                            />
        )}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
