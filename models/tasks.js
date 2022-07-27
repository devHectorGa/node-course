import Task from './task.js';

export default class Tasks {
  constructor() {
    this._listado = {};
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._listado[task.id] = task;
  }
}
