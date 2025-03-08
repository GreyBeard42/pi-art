let range = 1 // chunk *= range
let limit = 360 // chunk %= limit
let add = 0 // chunk += add

fetch("pi1-100-thousand.txt")
    .then(file => file.text())
    .then(data => {
        let row = document.createElement("div")
        let chunk = ""
        let i = 0
        data.match(/.{1,1}/g).forEach((d) => {
            if(d !== ".") {
                if(i%Math.floor(window.screen.width/21*3)/3 === 0) {
                    row.classList.add("row")
                    document.getElementById("content").appendChild(row)
                    row = document.createElement("div")
                }
                if(i%3 === 0) {
                    let text = document.createElement("div")
                    text.classList.add("digit")
                    text.style = `background-color: hsl(${parseInt(chunk*range)%limit+add}, 70%, 70%)`
                    row.appendChild(text)
                    chunk = ""
                }
                chunk += d.toString()
                i++
            } 
        })
    })

let y = 0
setInterval(() => {
    window.scroll(0, y)
    y += 1
}, 20)