let homeTeam = document.getElementById("home")
let awayTeam = document.getElementById("away")

let countAOne = 0
let countHOne = 0



function oneH(){
   countHOne += 1
    homeTeam.textContent = countHOne
}

function oneA(){
    countAOne += 1
    awayTeam.textContent = countAOne
 }

 function twoH(){
    countHOne += 2
    homeTeam.textContent =  countHOne
 }

 function twoA(){
    countAOne += 2
    awayTeam.textContent = countAOne
 }

 function threeH(){
    countHOne += 3
    homeTeam.textContent =  countHOne
 }

 function threeA(){
    countAOne += 3
    awayTeam.textContent = countAOne
 }
