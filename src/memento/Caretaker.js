class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.history = [];
    this.redoStack = [];
    console.log("Creó");
  }

  save() {
    const memento = this.originator.createMemento();
    console.log(this.history);
    this.history.push(memento);
    console.log(memento);
    console.log(this.history);
    this.redoStack = []; // Clear redo stack on new save
  }

  undo() {
    if (this.history.length > 0) {
      const memento = this.history.pop();
      this.redoStack.push(this.originator.createMemento());
      this.originator.restore(memento);
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      const memento = this.redoStack.pop();
      this.history.push(this.originator.createMemento());
      this.originator.restore(memento);
    }
  }
}

export default Caretaker;