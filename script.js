window.addEventListener('load', loadPage)

function loadPage() {
beginSlider()
}

let imageIndex = 0

function beginSlider(interval) {
    setInterval(changePicture, 3000)
}

function changePicture() {
    const images = document.querySelectorAll('img')

    images[imageIndex].classList.add('show')
    
    imageIndex = (imageIndex + 1) % images.length

    images[imageIndex].classList.remove('show')
    
}


