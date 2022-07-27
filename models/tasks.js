import Task from './task.js';

export default class Tasks {
  constructor() {
    this._list = {};
  }

  get getList() {
    const list = [];
    Object.keys(this._list).forEach((key) => list.push(this._list[key]));
    return list;
  }

  set setTasks(tasksArr = []) {
    tasksArr.forEach((task) => (this._list[task.id] = task));
    return null;
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  setTasksFromArray(tasksArr) {
    this.setTasks = tasksArr;
  }
}
