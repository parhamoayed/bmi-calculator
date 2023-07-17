let inputKg=document.querySelector('#kg')
let spanKg=document.querySelector('#tkg')
let inputM=document.querySelector('#m')
let spanM=document.querySelector('#tm')
let result=document.querySelector('.result')
let Status=document.querySelector('.status')
inputKg.addEventListener('change',function(){
  spanKg.innerHTML=String(inputKg.value+' kg')
  countBmi(inputKg.value,inputM.value)
  let status=(inputKg.value/(inputM.value/100*inputM.value/100)).toFixed(1);
  console.log(status);
  if(status<18.5){
    Status.innerHTML=' status : Underweight'
    Status.style.color='rgb(147 181 215)'
  }
  if(status>=18.5 && status<25){
    Status.innerHTML=' status : Normal'
    Status.style.color='rgb(143 199 159)'
  }
  if(status>=25 && status<30){
    Status.innerHTML=' status : Overweight'
    Status.style.color='rgb(249 215 72)'
  }
  if(status>=30&& status<35){
    Status.innerHTML=' status : fat'
    Status.style.color='rgb(229 153 94)'
  }
  if(status>=35){
    Status.innerHTML=' status : very fat'
    Status.style.color='rgb(215 92 90)'
  }
  
})
inputM.addEventListener('change',function(){
  spanM.innerHTML=String(inputM.value+' cm')
  countBmi(inputKg.value,inputM.value)
  let status=(inputKg.value/(inputM.value/100*inputM.value/100)).toFixed(1);
  console.log(status);
  if(status<18.5){
    Status.innerHTML=' status : Underweight'
    Status.style.color='rgb(147 181 215)'
  }
  if(status>=18.5 && status<25){
    Status.innerHTML=' status : Normal'
    Status.style.color='rgb(143 199 159)'
  }
  if(status>=25 && status<30){
    Status.innerHTML=' status : Overweight'
    Status.style.color='rgb(249 215 72)'
  }
  if(status>=30&& status<35){
    Status.innerHTML=' status : fat'
    Status.style.color='rgb(229 153 94)'
  }
  if(status>=35){
    Status.innerHTML=' status : very fat'
    Status.style.color='rgb(215 92 90)'
  }
  
})
//-------------------------------------------------

function countBmi(kg,m){
  result.innerHTML=String('BMI : '+(kg/(m/100*m/100)).toFixed(1))
 
}