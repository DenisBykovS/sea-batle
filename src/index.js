import { shipPositioningOne } from '@ship/ships'
import { createField } from './indexComputerField'
import { createTrackingField } from './shared/trackingField'
import './styles/index.css'
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrString = [null, 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к']
let arrIter = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]

let indexCell = 0
let myFunc = 0
let rem = 0

const btnStart = document.querySelector('.start-btn')
const btnShow = document.querySelector('.show')
// const cellTracking = document.querySelector('.cell-tracking')

const compfield = document.querySelector('.computerfield')
const playField = document.querySelector('.playersfield')

function numberCell() {
  if (myFunc == 11) {
    rem++
    myFunc = 0
  }
  myFunc++
  return arrNumber[rem]
}

function addDataAttr(el) {
  el.setAttribute('data-cell', `${numberCell()}-${arrString[indexCell]}`)
  indexCell++
  if (indexCell > 10) {
    indexCell = 0
  }
  return el
}

;(function create() {
  let div = document.createElement('div')
  div.classList.add('grid')
  for (let i = 1; i <= 121; i++) {
    let inDiv = document.createElement('div')
    if (i > 11) {
      addDataAttr(inDiv)
    }
    inDiv.classList.add('cell')
    div.appendChild(inDiv)
    // document.body.append(div)
    playField.append(div)
  }
})()
;(function indexCellFunc() {
  const cell = document.querySelectorAll('.cell')
  for (let i = 0; i < 11; i++) {
    if (i == 0) {
      continue
    } else {
      cell[i].innerText = `${arrString[i]}`
    }
  }
  let index = 0
  for (let i = 0; i < cell.length; i++) {
    if (arrIter.includes(i)) {
      do {
        cell[i].innerText = `${arrNumber[index]}`
        index++
      } while (false)
    } else {
      continue
    }
  }
})()
const removeAttribute = function (el) {
  return delete el.dataset.cell
}
;(function cleanCellAttr() {
  const arrAttr = document.querySelectorAll('[data-cell]')
  for (let i = 0; i < arrAttr.length; i++) {
    if (i == 0 || arrIter.includes(i)) {
      removeAttribute(arrAttr[i])
    }
  }
  const arrAttrCell = document.querySelectorAll('[data-cell]')
  for (let k = 0; k < arrAttrCell.length; k++) {
    let span = document.createElement('span')
    span.classList.add('span')
    span.innerHTML = '&#10006;'
    arrAttrCell[k].appendChild(span)
  }
})()

btnStart.addEventListener('click', () => {
  shipPositioningOne()

  setTimeout(() => {
    createField()
    createTrackingField('.playersfield', 'data-cell-tracing-play')
  }, 1000)
})
btnShow.addEventListener('click', () => {
  compfield.style.display = 'block'
})
