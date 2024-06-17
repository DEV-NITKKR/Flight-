// const { text } = require("express")
// alert(location.hostname) 

const data = {
    heli: {
        imgUrl: "helicopter-.png" ,
        text: `<div i="fftext">
                    <h3 class="ftexthh">Helicopter</h3>
                    <div>
                        <p>helicopter is a type of aircraft that uses rotating, or spinning, wings called blades to fly. Unlike an airplane or glider, a helicopter has wings that move, and unlike a balloon, a helicopter is heavier than air and uses an engine to fly</p>
                        <p >Capacity: 3-6 passengers<br/>* Range: 350-500 miles<br/>* Speed: 100-150 mph</p>
                    </div>
                </div>`
    },
    sjet: {
        imgUrl: "sjet.png",
        text:  ` <div class="ftext">
                    <h3 class="ftexthh">Small Jet</h3>
                    <div>
                        <p>This category emerged to accommodate transcontinental flight for larger groups of passengers ( 5 to 10 ) and therefore cabin height, width and comfort are improved on the categories we’ve looked at so far, boosting in-cabin productivity. </p>
                        <p >Capacity: 5-10 passengers<br/>* Range: 2000-3000 miles<br/>* Speed: 430-450 mph</p>
                    </div>
                </div>`
    },
    ljet: {
        imgUrl: "ljet.png",
        text:   `<div class="ftext">
                    <h3 class="ftexthh">large Jet</h3>
                    <div>
                        <p>Tremendously popular in terms of size, these jets offer a highly desirable large cabin feel but have lower operating costs than their heavier counterpartss: a blend which makes this category very special.</p>
                        <p >Capacity: 10-12 passengers<br/>* Range: 7000+ miles<br/>* Speed: 480-560 mph</p>
                    </div>
                </div>`
    },
    luxjet: {
        imgUrl: "luxjet.png",
        text:   `<div class="ftext">
                    <h3 class="ftexthh">Luxury Jet</h3>
                    <div>
                        <p>Tremendously popular in terms of size, these jets offer a highly desirable large cabin feel but have lower operating costs than their heavier counterpartss: a blend which makes this category very special.</p>
                        <p >Capacity: 1-10 passengers<br/>* Range: up to 8000 miles<br/>* Speed: up to 7000 mph</p>
                    </div>
                </div>`
    },
    air: {
        imgUrl: "a380.png",
        text:   `<div class="ftext">
                    <h3 class="ftexthh">Airliner</h3>
                    <div>
                        <p> The largest of our aircraft types, airliners offer inflight passenger environments closer to living spaces and conference rooms than conventional cabins with onboard suites and.</p>
                        <p >Capacity: 15-50 passengers<br/>* Range: 6500+ miles<br/>* Speed: 500-560 mph</p>
                    </div>
                </div>`
    }
    
}
function changeImage(e) {
    // e.stopImmediatePropagation();
    console.log(e.target);
    var img = document.getElementById('image');
    var clickedText = document.getElementById("ftext");
    img.src = data[e.target.name].imgUrl;
    clickedText.innerHTML = data[e.target.name].text
    // img.src = e.target.getAttribute("data-src");
}
