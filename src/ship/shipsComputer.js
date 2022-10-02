import { step, stepThree, stepTwo } from '../shared/step'
import { noShip, axisDirection, boolTwo } from '../shared/verificationFunctions'

let numStep = stepTwo
let numStepTwo = stepThree

export function shipPositioningOne() {
  const arrAttrCell = document.querySelectorAll('[data-cell-comp]')

  for (let i = 0; i < 4; i++) {
    let cell = Math.floor(Math.random() * arrAttrCell.length)
    let element = arrAttrCell[cell]

    if (!element.getAttribute('data-ship') && noShip(element)) {
      element.innerHTML = i
      element.setAttribute('data-ship', 'ship')
    } else {
      i--
    }
  }
  shipPositioningTwo()
}

function shipPositioningTwo() {
  const arrAttrCell = document.querySelectorAll('[data-cell-comp]')

  for (let i = 0; i < 3; ) {
    switch (axisDirection()) {
      case 'x': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis + step, yAxis)
            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              elementNext.innerHTML = k
              elementNext.setAttribute('data-ship', 'ship')
              element.innerHTML = i
              element.setAttribute('data-ship', 'ship')
              i++
            } else {
              k--
              break
            }
          }
        }
        break
      }
      case 'y': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis, yAxis + step)
            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              elementNext.innerHTML = k
              elementNext.setAttribute('data-ship', 'ship')
              element.innerHTML = i
              element.setAttribute('data-ship', 'ship')
              i++
            } else {
              k--
              break
            }
          }
        }
        break
      }
    }
  }
  shipPositioningThree()
}

function shipPositioningThree() {
  const arrAttrCell = document.querySelectorAll('[data-cell-comp]')

  for (let i = 0; i < 2; ) {
    switch (axisDirection()) {
      case 'x': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis + step, yAxis)
            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              for (let j = 0; j < 1; j++) {
                let elementEnd = document.elementFromPoint(
                  xAxis + numStep,
                  yAxis
                )
                if (
                  boolTwo(elementEnd) &&
                  !elementEnd.getAttribute('data-ship') &&
                  noShip(elementEnd)
                ) {
                  elementEnd.innerHTML = j
                  elementEnd.setAttribute('data-ship', 'ship')
                  elementNext.innerHTML = k
                  elementNext.setAttribute('data-ship', 'ship')
                  element.innerHTML = i
                  element.setAttribute('data-ship', 'ship')
                  i++
                } else {
                  j--
                  break
                }
              }
            } else {
              k--
              break
            }
          }
        }
        break
      }
      case 'y': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis, yAxis + step)
            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              for (let j = 0; j < 1; j++) {
                let elementEnd = document.elementFromPoint(
                  xAxis,
                  yAxis + numStep
                )
                if (
                  boolTwo(elementEnd) &&
                  !elementEnd.getAttribute('data-ship') &&
                  noShip(elementEnd)
                ) {
                  elementEnd.innerHTML = j
                  elementEnd.setAttribute('data-ship', 'ship')
                  elementNext.innerHTML = k
                  elementNext.setAttribute('data-ship', 'ship')
                  element.innerHTML = i
                  element.setAttribute('data-ship', 'ship')
                  i++
                } else {
                  j--
                  break
                }
              }
            } else {
              k--
              break
            }
          }
        }
        break
      }
    }
  }
  shipPositioningFour()
}

function shipPositioningFour() {
  const arrAttrCell = document.querySelectorAll('[data-cell-comp]')

  for (let i = 0; i < 1; ) {
    switch (axisDirection()) {
      case 'x': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis + step, yAxis)
            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              for (let j = 0; j < 1; j++) {
                let elementEnd = document.elementFromPoint(
                  xAxis + numStep,
                  yAxis
                )
                if (
                  boolTwo(elementEnd) &&
                  !elementEnd.getAttribute('data-ship') &&
                  noShip(elementEnd)
                ) {
                  for (let a = 0; a < 1; a++) {
                    let elementEndFour = document.elementFromPoint(
                      xAxis + numStepTwo,
                      yAxis
                    )
                    if (
                      boolTwo(elementEndFour) &&
                      !elementEndFour.getAttribute('data-ship') &&
                      noShip(elementEndFour)
                    ) {
                      elementEndFour.innerHTML = a
                      elementEndFour.setAttribute('data-ship', 'ship')
                      elementEnd.innerHTML = j
                      elementEnd.setAttribute('data-ship', 'ship')
                      elementNext.innerHTML = k
                      elementNext.setAttribute('data-ship', 'ship')
                      element.innerHTML = i
                      element.setAttribute('data-ship', 'ship')
                      i++
                    } else {
                      a--
                      break
                    }
                  }
                } else {
                  j--
                  break
                }
              }
            } else {
              k--
              break
            }
          }
        }
        break
      }
      case 'y': {
        let cell = Math.floor(Math.random() * arrAttrCell.length)

        let xAxis = arrAttrCell[cell].getBoundingClientRect().x
        let yAxis = arrAttrCell[cell].getBoundingClientRect().y
        let element = document.elementFromPoint(xAxis, yAxis)

        if (!element.getAttribute('data-ship') && noShip(element)) {
          for (let k = 0; k < 1; k++) {
            let elementNext = document.elementFromPoint(xAxis, yAxis + step)

            if (
              boolTwo(elementNext) &&
              !elementNext.getAttribute('data-ship') &&
              noShip(elementNext)
            ) {
              for (let j = 0; j < 1; j++) {
                let elementEnd = document.elementFromPoint(
                  xAxis,
                  yAxis + numStep
                )
                if (
                  boolTwo(elementEnd) &&
                  !elementEnd.getAttribute('data-ship') &&
                  noShip(elementEnd)
                )
                  for (let a = 0; a < 1; a++) {
                    let elementEndFour = document.elementFromPoint(
                      xAxis,
                      yAxis + numStepTwo
                    )
                    if (
                      boolTwo(elementEndFour) &&
                      !elementEndFour.getAttribute('data-ship') &&
                      noShip(elementEndFour)
                    ) {
                      elementEndFour.innerHTML = a
                      elementEndFour.setAttribute('data-ship', 'ship')
                      elementEnd.innerHTML = j
                      elementEnd.setAttribute('data-ship', 'ship')
                      elementNext.innerHTML = k
                      elementNext.setAttribute('data-ship', 'ship')
                      element.innerHTML = i
                      element.setAttribute('data-ship', 'ship')
                      i++
                    } else {
                      a--
                      break
                    }
                  }
                else {
                  j--
                  break
                }
              }
            } else {
              k--
              break
            }
          }
        }
        break
      }
    }
  }
  let arrShip = document.querySelectorAll('[data-ship]')
  console.log(arrShip.length)
  if (arrShip.length < 20) {
    location.reload()
  }
}
