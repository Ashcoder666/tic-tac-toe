const columns = document.querySelectorAll(".col");
var letter;
var i =1;
var modal = document.getElementById("modal")
winningPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const classfinder = () =>{
columns.forEach(col=>{
        col.addEventListener("click",()=>{
            letter = 'x'
            if(i%2==0){
                letter="o"
            }
            if(col.classList.contains("x") || (col.classList.contains("o"))){
                return
            }
            col.classList.add(letter)
            i++
            checker()
        })
        })
    }
const checker = () =>{
    for(let j=0;j<winningPattern.length;j++){
        if(columns[winningPattern[j][0]].classList.contains("x") && columns[winningPattern[j][1]].classList.contains("x") && columns[winningPattern[j][2]].classList.contains("x")){
            console.log("x wins")
            const h2 = document.createElement("h2");
            const text = document.createTextNode("X wins");
            h2.appendChild(text)
            modal.appendChild(h2)
            modal.style.display= "block"
            
        }else if(columns[winningPattern[j][0]].classList.contains("o") && columns[winningPattern[j][1]].classList.contains("o") && columns[winningPattern[j][2]].classList.contains("o")){
            console.log("o wins")
            const h2 = document.createElement("h2");
            const text = document.createTextNode("O wins");
            h2.appendChild(text)
            modal.appendChild(h2)
            modal.style.display= "block"
        }
}

gameover()
}
const gameover =()=>{
 
}
 classfinder()