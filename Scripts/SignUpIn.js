document.getElementById('toggle').addEventListener('change', function(){
    const loginform=document.getElementById('login-form');
    const signupform=document.getElementById('signup-form');
    if(this.checked){
        loginform.classList.add('hidden');
        signupform.classList.remove('hidden');
    } else {
        loginform.classList.remove('hidden');
        signupform.classList.add('hidden');
    }
})