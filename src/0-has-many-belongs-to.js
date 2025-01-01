const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, dueDate) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.dueDate = dueDate || null;
  }

  markComplete() {
    this.isDone = true;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }

  isOverdue() {
    if (this.dueDate) {
      return new Date() > new Date(this.dueDate);
    }
    return false;
  }
}



class ToDoList {
  static allLists = [];

  constructor(name) {
    this.id = getId();
    this.name = name;
    this.items = [];
    ToDoList.allLists.push(this);
  }

  markComplete() {
    this.isDone = true;
  }

  createItem(description, priorityLevel) {
    const newItem = new ToDoItem(description, priorityLevel);
    this.items.push(newItem);
    return newItem;
  }

  getItems() {
    return [...this.items];
  }

  getCompletedCount() {
    return this.items.filter(item => item.isDone).length;
  }

  static list() {
    return [...ToDoList.allLists];
  }

  static findBy(id) {
    return ToDoList.allLists.find(list => list.id === id);
  }
}



module.exports = {
  ToDoItem,
  ToDoList
};


