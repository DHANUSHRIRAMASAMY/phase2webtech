const API_URL = 'http://localhost:5000/api';

// Login Form
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = this.querySelector('input[type="text"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    const btn = this.querySelector('button[type="submit"]');

    btn.textContent = 'Logging in...';
    btn.disabled = true;

    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Login failed.');
            btn.textContent = 'Login';
            btn.disabled = false;
            return;
        }

        // Save token and user info
        localStorage.setItem('token', data.token);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('userId', data.user.id);

        window.location.href = 'home.html';

    } catch (error) {
        alert('Cannot connect to server. Make sure backend is running.');
        btn.textContent = 'Login';
        btn.disabled = false;
    }
});

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    const btn = this.querySelector('button[type="submit"]');

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    btn.textContent = 'Registering...';
    btn.disabled = true;

    try {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Registration failed.');
            btn.textContent = 'Register';
            btn.disabled = false;
            return;
        }

        // Save token and user info
        localStorage.setItem('token', data.token);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('userId', data.user.id);

        alert('Registration successful!');
        window.location.href = 'home.html';

    } catch (error) {
        alert('Cannot connect to server. Make sure backend is running.');
        btn.textContent = 'Register';
        btn.disabled = false;
    }
});

function showRegister() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.register-box').style.display = 'block';
}

function showLogin() {
    document.querySelector('.register-box').style.display = 'none';
    document.querySelector('.login-box').style.display = 'block';
}
