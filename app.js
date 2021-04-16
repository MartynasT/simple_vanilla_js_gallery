const mainHolder = document.getElementById('main');
const images = document.querySelectorAll('img');

//LIGHTBOX
images.forEach(img => {
  img.addEventListener('click', ()=>{
    showLightBox(img);
  })
});

function showLightBox(item){
  const lightbox = document.createElement('div');
  const leftArrow = document.createElement('i');
  const rightArrow = document.createElement('i');
  let img = document.createElement('img');
  img.classList.add('bigImg');

  lightbox.classList.add('lightbox');
  leftArrow.classList.add('las', 'la-chevron-left');
  rightArrow.classList.add('las', 'la-chevron-right');
  lightbox.appendChild(leftArrow);
  lightbox.appendChild(img);
  lightbox.appendChild(rightArrow);

  mainHolder.appendChild(lightbox);
  setTimeout(function (){
    img.classList.add('active')
  }, 50)
  img.src = item.src;

  lightBoxActions(leftArrow, rightArrow, img, lightbox)
}

function lightBoxActions(leftArrow, rightArrow, img, lightbox) {
  leftArrow.addEventListener('click', ()=>{
    const currentSrc = img.src;
    images.forEach((item, index)=> {
      if (item.src === currentSrc) {
        if (index === 0) {
          img.src = images[8].src;
        } else {
          img.src = images[index - 1].src;
        }
      }
    })
  });

  rightArrow.addEventListener('click', ()=>{
    const currentSrc = img.src;
    images.forEach((item, index)=> {
      if (item.src === currentSrc) {
        if (index === 8) {
          img.src = images[0].src;
        } else {
          img.src = images[index + 1].src;
        }
      }
    })
  })

  document.addEventListener('click', function(event) {
    if (event.target.closest('.main')) return;
    img.classList.remove('active')
    setTimeout(function (){
      lightbox.remove();
    }, 350)

  }, false);
}