let elemDom = document.getElementById('imageGallery')
let showImages = document.getElementById('showImages')
let mainImg = document.getElementById('mainImg')


function showImage() {
  mainImg.remove()
  showImages.remove()
  JSON.stringify(data, function () {
    for (i of data) {
      let imgElem = document.createElement('img')
      imgElem.className = 'galleryItem'
      imgElem.src = i.imgSmall
      imgElem.alt = i.name


      elemDom.appendChild(imgElem)

      imgElem.addEventListener('click', function () {
        let largeDiv = document.createElement('div')
        largeDiv.className = 'largeDiv'

        let divImg = document.createElement('img')
        divImg.className = 'largeScreen'
        divImg.src = imgElem.src
        imgElem.alt = i.name

        let xBtn = document.createElement('button')
        xBtn.innerHTML = 'X'
        xBtn.className = 'xBtn'

        largeDiv.appendChild(xBtn)
        largeDiv.appendChild(divImg)
        elemDom.appendChild(largeDiv)

        xBtn.addEventListener('click', function () {
          largeDiv.style.display = 'none'
        })
      })
    }
  })
}
