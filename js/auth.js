document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get username
    const username = this.querySelector('input[type="text"]').value;
    
    // Set login status
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('username', username);
    
    // Redirect to home page
    window.location.href = 'home.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get username
    const username = this.querySelector('input[type="text"]').value;
    
    // Set login status
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('username', username);
    
    alert('Registration successful!');
    
    // Redirect to home page
    window.location.href = 'home.html';
});

function showRegister() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.register-box').style.display = 'block';
}

function showLogin() {
    document.querySelector('.register-box').style.display = 'none';
    document.querySelector('.login-box').style.display = 'block';
}
