import React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput.react';

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("Inside ComponentDidUpdate");
        console.log(prevProps);
        console.log(this.props)
    }

    render() {
        var todo = this.props.todo;
        var input;
        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={this._onSave.bind(this)}
                    value={todo.text}
                    />;
        }

        // List items should get the class 'editing' when editing
        // and 'completed' when marked as completed.
        // Note that 'completed' is a classification while 'complete' is a state.
        // This differentiation between classification and state becomes important
        // in the naming of view actions toggleComplete() vs. destroyCompleted().
        var className = '';
        if (todo.complete) {
            className += 'completed';
        }
        if (this.state.isEditing) {
            className += ' editing';
        }
        className = className.trim();

        return (
            <li className={className} key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this._onToggleComplete.bind(this)}
                        />
                    <label onDoubleClick={this._onDoubleClick.bind(this)}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroyClick.bind(this)} />
                </div>
                {input}
            </li>
        );
    }

    _onToggleComplete() {
        TodoActions.toggleComplete(this.props.todo);
    }

    _onDoubleClick() {
        this.setState({isEditing: true});
    }

    /**
     * Event handler called within TodoTextInput.
     * Defining this here allows TodoTextInput to be used in multiple places
     * in different ways.
     * @param {string} text
     */
    _onSave(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    }

    _onDestroyClick() {
        TodoActions.destroy(this.props.todo.id);
    }
}