import Command from './Command';

class RemoveMenuItemCommand extends Command {
  constructor(menuOriginator, index) {
    super();
    this.menuOriginator = menuOriginator;
    this.index = index;
    this.previousState = null;
  }

  execute() {
    this.previousState = this.menuOriginator.createMemento();
    this.menuOriginator.removeItem(this.index);
  }

  undo() {
    this.menuOriginator.restore(this.previousState);
  }
}

export default RemoveMenuItemCommand;