import React from 'react';
import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';
import TodoStore from '../stores/TodoStore';

export default class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allTodos: {},
            areAllComplete: true
        };

        this.onTodosChange = this.onTodosChange.bind(this);
        this.onAllCompleteChange = this.onAllCompleteChange.bind(this);
    }

    componentDidMount() {
        TodoStore.todosStream.onValue(this.onTodosChange);
        TodoStore.areAllCompleteStream.onValue(this.onAllCompleteChange);
    }

    componentWillUnmount() {
        TodoStore.todosStream.offValue(this.onTodosChange);
        TodoStore.areAllCompleteStream.offValue(this.onAllCompleteChange);
    }

    onTodosChange(newTodos) {
        this.setState({allTodos: newTodos});
    }

    onAllCompleteChange(newAllComplete) {
        this.setState({areAllComplete: newAllComplete});
    }

    render() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                    />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    }
}