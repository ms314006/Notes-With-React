import uuid from 'uuid/v1';
import { INote } from '../interface/INote'

class Note implements INote {
  id: string = uuid();

  name: string;

  image: string;

  content: string = '';

  important: boolean = false;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }

  setImportant(value: boolean) {
    this.important = value;
  }

}

export default Note;
