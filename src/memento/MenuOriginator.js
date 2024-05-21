import Memento from './Memento';

class MenuOriginator {
  constructor(initialState) {
    this.state = initialState;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  createMemento() {
    return new Memento(this.state);
  }

  restore(memento) {
    this.state = memento.getState();
  }
}

export default MenuOriginator;