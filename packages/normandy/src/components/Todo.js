import React from 'react';

import { observer } from 'mobx-react';
import store from './Store';

const TodoApp = observer(
  class TodoApp extends React.Component {
    render() {
      return (
        <div>
          <h2>The Normandy Todo App</h2>
          <h5>
            An excuse to use <del>Redux</del>Mobx
          </h5>
          <ul>
            {store.orderedTodos.map(todo => {
              return (
                <li
                  key={todo.id}
                  onClick={event => {
                    event.preventDefault();
                    store.toggleDone(todo);
                  }}
                  style={{
                    cursor: 'pointer',
                    textDecoration: todo.done ? 'line-through' : 'none'
                  }}
                >
                  {todo.text}
                </li>
              );
            })}
          </ul>
          <form
            onSubmit={event => {
              event.preventDefault();
              const value = this.refs.text.value.trim();
              if (value) {
                store.addTodo(value);
                this.refs.text.value = '';
              }
            }}
          >
            <input type="text" ref="text" />
            <input type="submit" value="Add" />
          </form>
        </div>
      );
    }
  }
);

export default TodoApp;
