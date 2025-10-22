window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('success');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    
    document.querySelectorAll('.error').forEach(el => (el.textContent = ''));
    successMsg.hidden = true;

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    
    if (!name) {
      document.getElementById('error-name').textContent = 'Name is required';
      valid = false;
    }

    if (!email) {
      document.getElementById('error-email').textContent = 'Email is required';
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Invalid email format';
      valid = false;
    }

    if (!subject) {
      document.getElementById('error-subject').textContent = 'Subject is required';
      valid = false;
    }

    if (!message || message.length < 10) {
      document.getElementById('error-message').textContent = 'Message must be at least 10 characters';
      valid = false;
    }

    if (valid) {
      successMsg.hidden = false;
      form.reset();

      
      setTimeout(() => {
        successMsg.hidden = true;
      }, 3000);
    }
  });
});
