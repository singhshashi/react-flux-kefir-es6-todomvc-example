import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

var createActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_CREATE)
    .map(action => {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        return {
            id: id,
            complete: false,
            text: action.text
        };
    })
    .map(todo => todos => {
        todos[todo.id] = todo;
        return todos;
    });

var updateActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_UPDATE_TEXT)
    .map(action => todos => {
        todos[action.id].text = action.text;
        return todos;
    });

var undoCompleteActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_UNDO_COMPLETE)
    .map(action => todos => {
        todos[action.id].complete = false;
        return todos;
    });

var doCompleteActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_COMPLETE)
    .map(action => todos => {
        todos[action.id].complete = true;
        return todos;
    });

var togleCompleteAllActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_TOGGLE_COMPLETE_ALL)
    .map(action => todos => {
        for (var id in todos) {
            todos[id].complete = true;
        }
        return todos;
    });

var destroyActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_DESTROY)
    .map(action => todos => {
        delete todos[action.id];
        return todos;
    });

var destroyCompletedActionsStream = AppDispatcher
    .filter(action => action.actionType === TodoConstants.TODO_DESTROY_COMPLETED)
    .map(action => todos => {
        for (var id in todos) {
            if (todos[id].complete) {
                delete todos[id];
            }
        }
        return todos;
    });

var todosStream = Kefir
    .merge([
        createActionsStream,
        updateActionsStream,
        undoCompleteActionsStream,
        doCompleteActionsStream,
        togleCompleteAllActionsStream,
        destroyActionsStream,
        destroyCompletedActionsStream
    ])
    .scan((prevTodos, modificationFunc) => modificationFunc(prevTodos), {});

var areAllCompleteStream = todosStream.map(todos => {
    for (var id in todos) {
        if (!todos[id].complete) {
            return false;
        }
    }
    return true;
}).skipDuplicates();

export default {
    todosStream: todosStream,
    areAllCompleteStream: areAllCompleteStream
};