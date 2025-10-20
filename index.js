//document.getElementById("count-el").innerText = 5

// initialize the count as 0
//listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") //pass in arguments
console.log(countEl)

let count = 0



function increment () {

    console.log("clicked")

     count += 1

    countEl.innerText = count

     console.log("count")

}


function save () {

let countDash = " " + count + " - "

let saveEl = document.getElementById("save-el")

saveEl.innerText += countDash

    console.log(countDash)
}
