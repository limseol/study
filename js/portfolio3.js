// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const images =document.querySelectorAll('.myImg')
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
    // img.onclick = function() {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }
})

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];
const span = document.getElementById('close');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// document.getElementById('close').addEventListener('click', function() {
//     modal.style.display = "none";
// })
function resize() {
    // const width = document.querySelector('main').scrollWidth
    // const width = document.querySelector('main').scrollWidth
    const width = document.querySelector('main').clientWidth
    // console.log(width)
    const boxWidth= (width - 40) / 3
    document.querySelectorAll('.myImg').forEach(img => {
      img.style.width = `${boxWidth}px`
    })
}
resize()
window.addEventListener('resize', resize)  // 함수 호출이 아니라 함수가 와야