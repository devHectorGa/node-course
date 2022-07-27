import { v4 } from 'uuid';

class Tarea {
  constructor(desc) {
    this.id = v4();
    this.desc = desc;
    this.createdAt = Date.now();
    this.completeAt = null;
  }
}

export default Tarea;
