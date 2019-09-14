import uuid from 'uuid/v1';
import { INote } from '../interface/INote'

class Note implements INote {
  id: string = uuid();

  name: string;

  background: string;

  content: string = '';

  important: boolean = false;

  constructor(name: string, background: string) {
    this.name = name;
    this.background = background;
  }

  setImportant(value: boolean) {
    this.important = value;
  }

}

export default Note;
