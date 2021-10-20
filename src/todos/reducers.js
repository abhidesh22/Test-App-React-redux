import { CREATE_TODO, REMOVE_TODO, MARK_COMPLETED } from "./actions";

export const todos = ( state = [], action ) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(s => s.text !== text);
        }

        case MARK_COMPLETED: {
            const { text } = payload;
            return state.map(s => {
                if (s.text === text) {
                    s.isCompleted = true;
                }
                return s;
            });
        }
        
        default:
            return state; 
    }

    return state;
}