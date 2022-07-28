import { getFormatDate } from '../helpers/formatDate.js';
import Task from './task.js';

const printTasks = (tasks) => {
  console.log();
  tasks.forEach(({ desc, completeAt, createdAt }, i) => {
    const idx = `${i + 1}`.green;
    const state = completeAt
      ? `Completada `.green + `el ${getFormatDate(completeAt)}`
      : `Pendiente `.red + `creada el ${getFormatDate(createdAt)}`;
    console.log(`${idx} ${desc} :: ${state}`);
  });
};
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

  listComplete() {
    printTasks(this.getList);
  }

  listForState(complete = true) {
    printTasks(
      this.getList.filter(({ completeAt }) => Boolean(completeAt) === complete)
    );
  }
  deleteTask(id = '') {
    if (this._list[id]) delete this._list[id];
  }
  toggleStatusTasks(ids = []) {
    this.setTasks = this.getList.reduce(
      (acc, task) => [
        ...acc,
        {
          ...task,
          completeAt: ids.includes(task.id) ? new Date().toISOString() : null,
        },
      ],
      []
    );
  }
}
