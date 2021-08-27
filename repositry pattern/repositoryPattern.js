// *** Repository Pattern ***

// The repository, in simple words, is a pattern used to keep a loose connection between the client and the server data storing procedures hiding all complex implementation.
// This means that the client will not have to be concerned as to how to access the database, 
// add or remove items from a collection of items, pointers, etc.

class TodoItem {
    /**
     * Naming attributes the same as in the database
     * helps when adding the items back to the database.
     */
    constructor(id, description, duration) {
        this.DESCR = description;
        this.DURATION = duration;
        this.ID = id;
    }
  
    getDescription() {
        return this.DESCR;
    }
  
    getDuration() {
        return this.DURATION;
    }
  
    getId() {
        return this.ID;
    }
  }
  
  class TodoItemRepository {
  
      constructor() {
           this.todoItems = [];
  
           this.todoItemDataContext = new TodoItemDataContext();
      }
  
      getAll() {
          return this.todoItemDataContext.getAll().then(response => {
              if (Array.isArray(response)) {
                  response.map( todoItem => {
                      this.todoItems.push(new TodoItem(todoItem.ID, todoItem.DESCRIPTION, todoItem.DURATION));
                  })
              }
              return this.todoItems;
          });
      }
  
      add(todoItem) {
          this.todoItemDataContext.add(todoItem).then((newTodoItem) => {
  
              this.todoItems.push(todoItem);
          }).catch((error) => {
              console.error('Error:', error);
          });
      }
  
  }