const arrayImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg' , 'img/5.jpg', 'img/6.jpg']

const images = document.querySelector('.imgMe')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const mainBgc = document.querySelector('main')

let indexImg = 0

next.addEventListener('click', nextTmg)
function nextTmg(){
    indexImg ++
    if (indexImg > arrayImg.length-1) {
        indexImg = 0
        }
    images.setAttribute('src', arrayImg[indexImg])
    mainBgc.style.backgroundImage = `url(${arrayImg[indexImg]})`

}

prev.addEventListener('click', prevTmg)
function prevTmg(){
    indexImg --
    if (indexImg < 0) {
        indexImg = arrayImg.length-1
        }
    images.setAttribute('src', arrayImg[indexImg])
    mainBgc.style.backgroundImage = `url(${arrayImg[indexImg]})`

}

