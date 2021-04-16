const form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const firstName=form['first-name'].value
    const lastName= form['last-name'].value
    const email= form['email'].value
    const password= form['password'].value

    if(firstName===''){
        failureError('first-name','First Name cannot be empty')
    }
    else{
        success('first-name')
    }
    if(lastName===''){
        failureError('last-name','Last Name cannot be empty')
    }
    else{
        success('last-name')
    }
    if(email===''){
        failureError('email','Email cannot be empty')
    }
    else if(!isEmailValid(email)){
        failureError('email','Enter a valid email')
    }
    else{
        success('email')
    }
    if(password===''){
        failureError('password','Password cannot be empty')
    }
    else{
         success('password')
    }

})
function failureError(input,message){
        const formInput =form[input].parentNode
        formInput.classList.add('error')

        const span=formInput.querySelector('span')
        span.innerText=message
        span.style.opacity='1'
}
function success(input){
        const formInput =form[input].parentNode
        formInput.classList.remove('error')
        const span=formInput.querySelector('span')
        span.style.opacity='0'
}
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
