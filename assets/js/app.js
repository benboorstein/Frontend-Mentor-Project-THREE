const menuState = [
    { // menu visible and X
        menuItems: 'visible',
        menuIcon: './assets/img/icon-close.svg',
        menuIconWidth: '23px',
        menuIconHeight: '23px'
    },
    { // menu hidden and hamburger
        menuItems: 'hidden',
        menuIcon: './assets/img/icon-hamburger.svg',
        menuIconWidth: '29px',
        menuIconHeight: '19.3px'
    }
]

function menuShow(list) { // Functions should ALWAYS have inputs and expect outputs, and functions should behave exactly the same way every time they're run. And remember that what are passed in as parameters are "the things on which the function will operate".
    document.querySelector('.menu-items').style.visibility = list[0].menuItems // QQQ: Should I just change the class "menu-items" to an id "menuItems" in HTML, CSS, and JS?
    document.querySelector('.menu-three-lines').src = list[0].menuIcon // QQQ: Refer to "header button:active" QQQ in CSS regarding outline/border around the X.
    document.querySelector('.menu-three-lines').style.width = list[0].menuIconWidth
    document.querySelector('.menu-three-lines').style.height = list[0].menuIconHeight
}

function menuHide(list) {
    document.querySelector('.menu-items').style.visibility = list[1].menuItems
    document.querySelector('.menu-three-lines').src = list[1].menuIcon
    document.querySelector('.menu-three-lines').style.width = list[1].menuIconWidth
    document.querySelector('.menu-three-lines').style.height = list[1].menuIconHeight
}

document.getElementById('menuThreeLines').addEventListener('click', getMenuState)

// ***** I think below is the problem area (and the only thing I can think is that maybe function calls can't be used this way). I could be wrong of course. ... On another note: I know it's not best to end an if...else statement with an "else if", but for now I'm just trying to make it work, and then I'll worry about correcting that part. *****
function getMenuState() {

    let x = menuHide(menuState)
    let y = menuShow(menuState)

    if (x.style.display === 'block') {
        x.style.display === 'none'
        y.style.display === 'block'
    } else if (y.style.display === 'block') {
        y.style.display === 'none'
        x.style.display === 'block'
    }
}
