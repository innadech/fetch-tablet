const storage = {
  setStudentsStorage(students) {
    const stringifiedStudents = JSON.stringify(students)
    localStorage.setItem('students', stringifiedStudents)
  },
  getStudentsStorage() {
    const stringifiedStudents = localStorage.getItem('students')
    const parsedStudents = JSON.parse(stringifiedStudents)
    return parsedStudents
  },
}
