// stem 1 add even listener
document.getElementById('btn-login').addEventListener('click', function () {
    // step 2
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if (email === 'naimkhan01856@gmail.com' && password === '1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please check Your emil or password')
    }
})