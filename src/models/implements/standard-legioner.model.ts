import { Legioner } from '../interfaces/legioner.interface';
import { UserContent } from '../interfaces/user-content.interface';

class StandardLegioner implements Legioner {
  #data: UserContent;

  constructor(data: UserContent) {
    this.#data = data;
  }

  changeState(changes: { [p: string]: any }): boolean {
    return false;
  }

  content = (): UserContent => this.#data;

  enrollEvent(eventId: string): boolean {
    return false;
  }
}
