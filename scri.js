const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 33.33}%`
    }
)

const gonext = () => {
    counter++
    counter = counter % slides.length;
    slideImage()
}

const goback = () => {
    counter--
    counter = (counter + slides.length) % slides.length
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide,index) => {
            slide.style.left = `${(index-counter) * 33.4}%`
        }
    )
}
 window.onload=setInterval(function() {     slideImage( gonext() )
 },3000);
