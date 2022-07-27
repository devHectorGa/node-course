import Task from './task.js';

export default class Tasks {
  constructor() {
    this._list = {};
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  get getList() {
    const list = [];
    Object.keys(this._list).forEach((key) => list.push(this._list[key]));
    return list;
  }
}
