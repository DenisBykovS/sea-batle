import { shotComp, shotPlayer } from './shot'

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrString = [null, 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к']
let arrIter = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]

let indexCell = 0
let myFunc = 0
let rem = 0

function removeDataAttrFildComp() {
  let fieldGame = document.querySelector('.computerfield')
  let cellSearch = fieldGame.querySelectorAll('[data-cell-tracing-comp]')
  for (let i = 0; i <= cellSearch.length; i++) {
    if (i == 0 || arrIter.includes(i)) {
      delete cellSearch[i].dataset.cellTracingComp
    }
  }
}

function numberCell() {
  if (myFunc == 11) {
    rem++
    myFunc = 0
  }
  if (rem == 10) {
    rem = 0
  }
  myFunc++

  return arrNumber[rem]
}
let dataAttr = ''

function addDataAttr(el) {
  el.setAttribute(`${dataAttr}`, `${numberCell()}-${arrString[indexCell]}`)
  indexCell++
  if (indexCell > 10) {
    indexCell = 0
  }
  return el
}

const removeAttribute = function (el) {
  return delete el.dataset.cellTracking
}

export function createTrackingField(el, dataAttrName) {
  dataAttr = dataAttrName
  let field = document.querySelector(`${el}`)

  let div = document.createElement('div')
  div.classList.add('grid')
  for (let i = 1; i <= 121; i++) {
    let inDiv = document.createElement('div')
    if (i > 11) {
      addDataAttr(inDiv)
    }
    inDiv.classList.add('cell-tracking')
    inDiv.addEventListener('click', (event) => {
      if (el == '.computerfield') {
        shotComp(event, `${el}`)
      } else {
        shotPlayer(event, `${el}`)
      }
    })
    div.appendChild(inDiv)

    field.append(div)
  }
  indexCellFunc()
}

function indexCellFunc() {
  const cell = document.querySelectorAll('.cell-tracking')
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
  for (let i = 0; i < cell.length; i++) {
    if (arrIter.includes(i) || i < 11) {
      cell[i].classList.remove('cell-tracking')
      cell[i].classList.add('sea')
    }
  }
  cleanCellAttr()
}

function cleanCellAttr() {
  const arrAttr = document.querySelectorAll(`[${dataAttr}]`)

  for (let i = 0; i < arrAttr.length; i++) {
    if (i == 0 || arrIter.includes(i)) {
      removeAttribute(arrAttr[i])
    }
  }
  const arrAttrCell = document.querySelectorAll(`[${dataAttr}]`)
  for (let k = 0; k < arrAttrCell.length; k++) {
    let span = document.createElement('span')
    span.classList.add('span')
    span.innerHTML = '&#10006;'
    arrAttrCell[k].appendChild(span)
  }
  removeDataAttrFildComp()
}
