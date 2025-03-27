const controller = {
  async handleLoadApp() {
    const students = await api.getStudents()
    storage.setStudentsStorage(students)
    model.setStudents(students)
    view.renderMain(model.students)
  },
  // handleRemoveTodo(id) {
  //   const newTodos = model.removeTodoById(model.todos, id)
  //   model.setTodos(newTodos)
  //   storage.setTodos(newTodos)
  //   console.log(newTodos)
  //   view.renderContainer(model.todos)
  // },
}
