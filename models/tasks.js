import { getFormatDate } from '../helpers/formatDate.js';
import Task from './task.js';

const printTasks = (tasks) => {
  console.log();
  tasks.forEach(({ desc, completeAt }, i) => {
    const idx = `${i + 1}`.green;
    const state = completeAt
      ? `Completada el ${getFormatDate(completeAt)}`.green
      : 'Pendiente'.red;
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
}
