import { step } from './step'

let shotNumArr = []
let forbiddenCells = []
let playersAccount = 0
let computerAccount = 0
let missAfterHit = 0
let lastShot = null
let firstShot = null
let direction = missAfterHit == 2 ? 'x' : 'y'

function shot(e, f) {
  let shotCell =
    e.target.dataset.cellTracingComp || e.target.dataset.cellTracingPlay
  let field = ''
  if (f == '.playersfield') {
    field = '.computerfield'
  } else {
    field = '.playersfield'
  }
  let fieldGame = document.querySelector(field)
  let filterChild = fieldGame.querySelectorAll('[data-ship]')
  let coord = []
  filterChild.forEach((el) => {
    coord.push(el.dataset.cell || el.dataset.cellComp)
  })
  if (coord.includes(shotCell)) {
    if (field == '.computerfield') {
      playersAccount++
    }
    if (field == '.playersfield') {
      computerAccount++
    }
    console.log(playersAccount, 'playersAccount')
    console.log(computerAccount, 'computerAccount')
    if (playersAccount == 20) {
      alert('you win')
    }
    if (computerAccount == 20) {
      alert('you lose')
    }
    return true
  } else {
    return false
  }
}

function checkingForAMissCounter(elOne, elTwo) {
  missAfterHit++
}

function nextCell(el) {
  let x = el.getBoundingClientRect().x
  let y = el.getBoundingClientRect().y

  let elX = el.getBoundingClientRect().x + step
  let prevelX = el.getBoundingClientRect().x - step
  let elY = el.getBoundingClientRect().y + step
  let prevelY = el.getBoundingClientRect().y - step

  let elementNext = document.elementFromPoint(elX, y)
  let elementPrev = document.elementFromPoint(prevelX, y)
  let elementUp = document.elementFromPoint(x, prevelY)
  let elementDown = document.elementFromPoint(x, elY)
  switch (direction) {
    case 'y':
      if (
        elementUp.classList.contains('cell-tracking') &&
        !forbiddenCells.includes(elementUp)
      ) {
        shotNumArr.push(elementUp)
      }
      if (
        elementDown.classList.contains('cell-tracking') &&
        !forbiddenCells.includes(elementDown)
      ) {
        shotNumArr.push(elementDown)
      }
      break
    case 'x':
      if (
        elementNext.classList.contains('cell-tracking') &&
        !forbiddenCells.includes(elementNext)
      ) {
        shotNumArr.push(elementNext)
      }
      if (
        elementPrev.classList.contains('cell-tracking') &&
        !forbiddenCells.includes(elementPrev)
      ) {
        shotNumArr.push(elementPrev)
      }
      break
  }
  // console.log(shotNumArr, 'END')
}

function goalSearch() {
  if (shotNumArr.length == 0) {
    let fieldGame = document.querySelector('.computerfield')
    let cellSearch = fieldGame.querySelectorAll('[data-cell-tracing-comp]')
    let cellShot = Math.floor(Math.random() * cellSearch.length)
    let element = cellSearch[cellShot]
    if (!forbiddenCells.includes(element)) {
      forbiddenCells.push(element)
      // console.log(element)
      let click = new MouseEvent('click')
      element.dispatchEvent(click)
    }
  } else {
    shotNumArr = []
    let x = lastShot ? lastShot : firstShot
    nextCell(x)
    let element = shotNumArr[0]
    forbiddenCells.push(element)
    // console.log(element, 'pppppppp')
    // console.log(shotNumArr, '1')
    shotNumArr.splice(0, 1)
    // console.log(shotNumArr, '2')
    let click = new MouseEvent('click')
    element.dispatchEvent(click)
  }
}

export function shotComp(e, field) {
  if (shot(e, field)) {
    shotNumArr.push(e)
    firstShot = e.target
    lastShot = e.target
    lastShot.classList.add('destroyed')
    goalSearch()
    // console.log('ok')
  } else {
    lastShot = null
    e.target.firstChild.style.display = 'block'
    // console.log('no', lastShot.firstChild)
  }
}
export function shotPlayer(e, field) {
  if (shot(e, field)) {
    // console.log('1', e.target)
    e.target.classList.add('destroyed')
  } else {
    e.target.firstChild.style.display = 'block'
    // console.log('2', e.target)
    goalSearch()
  }
}
