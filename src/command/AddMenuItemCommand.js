import Command from './Command';

class AddMenuItemCommand extends Command {
  constructor(caretaker, newItem, menuStructure, setMenuStructure) {
    super();
    this.caretaker = caretaker;
    this.newItem = newItem;
    this.menuStructure = menuStructure;
    this.setMenuStructure = setMenuStructure;
  }

  execute() {
    this.caretaker.save();
    const newMenuStructure = [
      ...this.menuStructure,
      this.newItem
    ];
    this.setMenuStructure(newMenuStructure);
  }

  undo() {
    this.menuOriginator.restore(this.previousState);
  }
}

export default AddMenuItemCommand;