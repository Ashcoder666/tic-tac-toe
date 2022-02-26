const columns = document.querySelectorAll(".col");
var letter;
var i =1;
winningPattern =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3.6,9],
    [1,5,9],
    [3,5,7],
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
        })
        
    })

}
 const xandoAdder =() =>{
     
 }
classfinder()