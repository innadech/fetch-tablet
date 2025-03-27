const view = {
  renderTBodyStudents(students) {
    const elTBody = document.querySelector('.table-students tbody')
    elTBody.innerHTML = ''
    students.forEach(student => {
      const elTr = generateTr(student)
      elTBody.appendChild(elTr)
    })
    // for (const student of students) {
    //   const elTr = generateTr(student)
    //   elTBody.appendChild(elTr)
    // }
  },
}

function onClickButtonLoad() {
  controller.handleLoadApp()
}

function generateTr(student) {
  const elTr = document.createElement('tr')
  const elTdZero = document.createElement('td')
  const elTdFirst = document.createElement('td')
  const eltdSecond = document.createElement('td')
  const eltdThird = document.createElement('td')
  const eltdFourth = document.createElement('td')
  elTdZero.textContent = student.id
  elTdFirst.textContent = student.firstName
  eltdSecond.textContent = student.secondName
  eltdThird.textContent = student.age
  eltdFourth.textContent = student.faculty
  elTr.appendChild(elTdZero)
  elTr.appendChild(elTdFirst)
  elTr.appendChild(eltdSecond)
  elTr.appendChild(eltdThird)
  elTr.appendChild(eltdFourth)
  return elTr
}

document.querySelector('button').onclick = onClickButtonLoad
