import { shipPositioningOne } from '../src/ship/shipsComputer'
import { createTrackingField } from '../src/shared/trackingField'
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrString = [null, 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к']
let arrIter = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]

let indexCell = 0
let myFunc = 0
let rem = 0

const computerfield = document.querySelector('.computerfield')

function numberCell() {
  if (myFunc == 11) {
    rem++
    myFunc = 0
  }
  myFunc++
  return arrNumber[rem]
}

function addDataAttr(el) {
  el.setAttribute('data-cell-comp', `${numberCell()}-${arrString[indexCell]}`)
  indexCell++
  if (indexCell > 10) {
    indexCell = 0
  }
  return el
}

const removeAttribute = function (el) {
  return delete el.dataset.cell
}

export function createField() {
  let div = document.createElement('div')
  div.classList.add('grid')
  for (let i = 1; i <= 121; i++) {
    let inDiv = document.createElement('div')
    if (i > 11) {
      addDataAttr(inDiv)
    }
    inDiv.classList.add('cell')
    div.appendChild(inDiv)

    computerfield.append(div)
  }
  indexCellFunc()
}

function indexCellFunc() {
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
  cleanCellAttr()
}

function cleanCellAttr() {
  const arrAttr = document.querySelectorAll('[data-cell-comp]')
  for (let i = 0; i < arrAttr.length; i++) {
    if (i == 0 || arrIter.includes(i)) {
      removeAttribute(arrAttr[i])
    }
  }
  const arrAttrCell = document.querySelectorAll('[data-cell-comp]')
  for (let k = 0; k < arrAttrCell.length; k++) {
    let span = document.createElement('span')
    span.classList.add('span')
    span.innerHTML = '&#10006;'
    arrAttrCell[k].appendChild(span)
  }
  setTimeout(() => {
    shipPositioningOne()
    createTrackingField('.computerfield', 'data-cell-tracing-comp')
  }, 2000)
}
