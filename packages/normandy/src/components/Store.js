import { action, extendObservable } from 'mobx';

// function cmp()
class Store {
  constructor() {
    extendObservable(this, {
      todos: [],
      nextId: 0,
      get orderedTodos() {
        const copy = Array.from(this.todos);
        copy.sort((a, b) => {
          if (a.done === b.done) {
            return a.id - b.id;
          } else if (a.done) {
            return 1;
          } else {
            return -1;
          }
        });
        return copy;
      },
      addTodo: action(text => {
        this.todos.push({
          text: text,
          id: ++this.nextId,
          done: false
        });
      }),
      toggleDone: action(thisItem => {
        this.todos = this.todos.map(item => {
          if (item.id === thisItem.id) {
            item.done = !item.done;
          }
          return item;
        });
      })
    });
  }
}

const store = new Store();
// const store = (window.store = new Store());

export default store;
