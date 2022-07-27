import { v4 } from 'uuid';

export default class Task {
  constructor(desc) {
    this.id = v4();
    this.desc = desc;
    this.createdAt = Date.now();
    this.completeAt = null;
  }
}
