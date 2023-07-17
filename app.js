let inputKg=document.querySelector('#kg')
let spanKg=document.querySelector('#tkg')
let inputM=document.querySelector('#m')
let spanM=document.querySelector('#tm')
inputKg.addEventListener('change',function(){
  spanKg.innerHTML=String(inputKg.value+' kg')
})
inputM.addEventListener('change',function(){
  spanM.innerHTML=String(inputM.value+' cm')
})