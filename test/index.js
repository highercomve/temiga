import * as Temiga from '../src/index'
import store from './store/index'

var TodoApp = Temiga.CreateElement({
  name: 'todo-app',
  render () {
    return `
      <h1>Mi super dopper todo</h1>
      <todo-form></todo-form>
      <todo-list text="first todo">
      </todo-list>
    `
  }
})

var TodoList = Temiga.CreateElement({
  name: 'todo-list',
  onMounted () {
    store.subscribe(() => {
      const tareas = store.getState().todos
      this.innerHTML = this.update(tareas)
    })
  },
  render (tareas = []) {
    const notFound = `<h3>Create a new Todo</h3>`
    const tareasHTML = tareas.reduce((acc, tarea) => {
      acc += `
        <todo-item text="${tarea.text}" key="${tarea.id}" done="${tarea.done}">
        </todo-item>
      `
      return acc
    }, '').trim()
    return (tareasHTML === '') ? notFound : tareasHTML
  }
})

var TodoItem = Temiga.CreateElement({
  name: 'todo-item',
  render () {
    return `
      <div class="item" id="${this.getAttribute('key')}">
        <input 
          type="checkbox" 
          ${(this.getAttribute('done') === 'true') ? 'checked' : ''} 
          class="toggle-task"
          name="task-${this.getAttribute('key')}" 
          id="task-${this.getAttribute('key')}">
        <label for="task-${this.getAttribute('key')}">${this.getAttribute('text')}</label>
        <button class="delete-task" data-id="${this.getAttribute('key')}">Delete</button>
        <hr/>
      </div>
    `
  },
  events: {
    'change .toggle-task': function (evnt) {
      evnt.preventDefault()
      const taskId = event.target.parentElement.id
      store.dispatch({
        type: 'TASK_TOGGLE',
        payload: taskId
      })
    },
    'click .delete-task': function (evnt) {
      evnt.preventDefault()
      const taskId = event.target.parentElement.id
      store.dispatch({
        type: 'TASK_REMOVE',
        payload: taskId
      })
    }
  }
})

var TodoForm = Temiga.CreateElement({
  name: 'todo-form',
  render () {
    return `
      <form id="new-todo">
        <input name="todo" id="add-todo" placeholder="Create a new todo">
        <button type="submit">Add new Task</button>
      </form>
    `
  },
  events: {
    'submit #new-todo': function (evnt) {
      evnt.preventDefault()
      var value = event.target[0].value.trim()
      if (value && value !==  '') {
        store.dispatch({
          type: 'TASK_ADD',
          payload: {
            text: value,
            done: false
          }
        })
      } else {
        store.dispatch({
          type: 'INPUT_CANT_BE_EMPTY',
        })
      }
      event.target[0].value = ''
    }
  }
})

document.addEventListener('DOMContentLoaded', (event) => {
  var app = document.getElementById('app')
  Temiga.render(app, new TodoApp())
})
