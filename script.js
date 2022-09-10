let submitBtn = document.querySelector('.early-access-section button')
let input = document.querySelector('.early-access-section input')
let errText = document.querySelector('.early-access-section div p')
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submitBtn.addEventListener('click',e=>{
    e.preventDefault()
    if(!input.value.match(pattern)){
        errText.innerText = 'Please enter a valid email address'
        if(input.value == ''){
            errText.innerText = 'Please enter a email address'
        }
    }else{
        errText.innerText = ''
        location.reload()
    }
})

window.addEventListener('load',()=>{
    errText.innerText = ''
    input.value = ''
})