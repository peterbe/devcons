import React from 'react';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

//
// Actions
let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

//
//

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo store={store} />
      </Provider>
    );
  }
}
class Todo extends React.Component {
  render() {
    // const foo = 'bar';
    console.log(this.props);
    return (
      <div>
        <h2>The Normandy Todo App</h2>
        <h5>An excuse to use Redux</h5>
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}

const TodoApp = connect(mapStateToProps, mapDispatchToProps)(Todo);

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };
//
// const TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoApp;
