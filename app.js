const wordTextarea =document.querySelector(".text2 .words")
const Btn =document.querySelector(".text2 .btn")
const wordcount =document.querySelector(".text2 .wordcount span")


const countwords =() =>{

      let dunyo = wordTextarea.value
      let Trimmed = dunyo.replace(/\s+/g," ").trim();
      let splitee = Trimmed.split(" ");
      
      let number =splitee.length;
      wordcount.innerHTML=number
      let numberr=splitee.length;
      if(splitee[0]== ""){
          numberr=0
      }
}
Btn.addEventListener("click",countwords)



