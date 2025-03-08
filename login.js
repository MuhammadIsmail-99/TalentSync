document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          this.classList.toggle('fa-eye-slash');
      });

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = passwordInput.value;

      console.log('Username:', username);
      console.log('Password:', password);

      // Add login logic here
    });


    // Initialize with the visible SVG
    togglePassword.innerHTML = visibleSVG;
  });