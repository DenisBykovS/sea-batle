import { step } from './step'

export function bool(el) {
  try {
    if (el.dataset.cell) {
      return true
    }
  } catch (error) {
    false
  }
}

export function boolTwo(el) {
  try {
    if (el.dataset.cellComp) {
      return true
    }
  } catch (error) {
    false
  }
}

function coordCell(el) {
  let x = el.getBoundingClientRect().x
  let y = el.getBoundingClientRect().y

  let elX = el.getBoundingClientRect().x + step
  let prevelX = el.getBoundingClientRect().x - step
  let elY = el.getBoundingClientRect().y + step
  let prevelY = el.getBoundingClientRect().y - step

  let xp = document.elementFromPoint(elX, y)
  let xn = document.elementFromPoint(prevelX, y)
  let yp = document.elementFromPoint(x, elY)
  let yn = document.elementFromPoint(x, prevelY)
  if ((xp, xn, yp, yn)) {
    return [xn, xp, yp, yn]
  } else {
    return false
  }
}

export function noShip(el) {
  const tap = coordCell(el)
  if (tap == false) {
    return false
  }
  if (tap.includes(null)) {
    return false
  }
  let xAxis = false
  let yAxis = false

  if (tap[0].dataset.ship === undefined && tap[1].dataset.ship === undefined) {
    xAxis = !xAxis
  }

  if (tap[2].dataset.ship === undefined && tap[3].dataset.ship === undefined) {
    yAxis = !yAxis
  }

  if (xAxis && yAxis) {
    return true
  } else {
    return false
  }
}

export function axisDirection() {
  let cell = Math.floor(Math.random() * 100)
  if (cell > 50) {
    return 'x'
  } else {
    return 'y'
  }
}
