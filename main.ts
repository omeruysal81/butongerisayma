input.onButtonPressed(Button.A, function () {
    sayi += -1
    basic.showNumber(sayi)
    if (sayi == 0) {
        sayi = 10
        basic.pause(100)
        basic.showNumber(sayi)
    }
})
let sayi = 0
sayi = 10
basic.showNumber(sayi)
