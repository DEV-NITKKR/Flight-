const data = {
    jet: {
        imgUrl: "sjet.png",
        text: `<div id="ftext">
                    <h3 class="ftexthh">smalljet</h3>
                    <div>
                        <p>This category emerged to accommodate transcontinental flight for larger groups of passengers ( 5 to 10 ) and therefore cabin height, width and comfort are improved on the categories we’ve looked at so far, boosting in-cabin productivity. </p>
                        <p >Capacity: 5-10 passengers<br/>* Range: 2000-3000 miles<br/>* Speed: 430-450 mph</p>
                    </div>
                </div>`
    }
    
}

function changeImage(e) {
    e.stopPropagation()
    // // Event.stopImmediatePropagation()
    // console.log(e.target)
    var img = document.getElementById('image');
    // var clickedText = document.getElementById("clickedText");
    // e.stopImmediatePropagation() 
    // console.log(data[e.target.name].imgUrl, data[e.target.name].text)
    img.src = e.target.getAttribute("data-src");
    // clickedText.innerHTML = data[e.target.name].text;
    const elemnts = document.getElementsByClassName("ftext");
    for(var i of elemnts){
        i.setAttribute("style", "display:none;");
    }
    console.log(e.target.name)
    document.getElementById(e.target.name).setAttribute("style", "")
}
