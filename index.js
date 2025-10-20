//document.getElementById("count-el").innerText = 5

// initialize the count as 0
//listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") //pass in arguments
let count = 0
let saveEl = document.getElementById("save-el")

function increment () {

    console.log("clicked")

     count += 1

    countEl.textContent = count

     console.log("count")

}


function save () {

let countDash = " " + count + " - "


saveEl.textContent += countDash

    console.log(countDash)
}
