const view = {
  renderMain(students) {
    const elMain = document.querySelector('.main')
    elMain.innerHTML = ''
    const elGenerateTables = generateTablet(students)
    elMain.appendChild(elGenerateTables)
  },
}

function onClickButtonLoad() {
  controller.handleLoadApp()
}

function generateTrTh() {
  const eltr = document.createElement('tr')
  const elthThirst = document.createElement('th')
  const elthSecond = document.createElement('th')
  const elthThird = document.createElement('th')
  const elthFourth = document.createElement('th')
  elthThirst.textContent = 'Firstname'
  elthSecond.textContent = 'Secondname'
  elthThird.textContent = 'Age'
  elthFourth.textContent = 'Faculty'
  eltr.appendChild(elthThirst)
  eltr.appendChild(elthSecond)
  eltr.appendChild(elthThird)
  eltr.appendChild(elthFourth)
  return eltr
}
function generateTrTd(student) {
  const eltr = document.createElement('tr')
  const eltdThirst = document.createElement('td')
  const eltdSecond = document.createElement('td')
  const eltdThird = document.createElement('td')
  const eltdFourth = document.createElement('td')
  eltdThirst.textContent = student.firstName
  eltdSecond.textContent = student.secondName
  eltdThird.textContent = student.age
  eltdFourth.textContent = student.faculty
  eltr.appendChild(eltdThirst)
  eltr.appendChild(eltdSecond)
  eltr.appendChild(eltdThird)
  eltr.appendChild(eltdFourth)
  return eltr
}
function generateTablet(students) {
  const elTablet = document.createElement('tablet')
  elTablet.classList.add('table')
  const elgenerateTrTh = generateTrTh()
  elTablet.appendChild(elgenerateTrTh)
  for (const student of students) {
    const elGenerateTrTd = generateTrTd(student)
    elTablet.appendChild(elGenerateTrTd)
  }
  return elTablet
}

const elButton = document.querySelector('button')
elButton.onclick = onClickButtonLoad
