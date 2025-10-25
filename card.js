
document.addEventListener('DOMContentLoaded', () => {
  const avatarInput = document.querySelector('[data-testid="test-avatar-upload"]');
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && avatarImg) {
        const url = URL.createObjectURL(file);
        avatarImg.src = url;
        avatarImg.alt = `${file.name} - Profile Avatar`;
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMsg = document.getElementById('success');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const clearError = (fieldName) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    }
  };

  
  const showError = (fieldName, message) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  };

  // Validate individual fields
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          showError('name', 'Full name is required');
          return false;
        }
        clearError('name');
        return true;

      case 'email':
        if (!value.trim()) {
          showError('email', 'Email is required');
          return false;
        }
        if (!emailPattern.test(value.trim())) {
          showError('email', 'Please enter a valid email address (e.g., name@example.com)');
          return false;
        }
        clearError('email');
        return true;

      case 'subject':
        if (!value.trim()) {
          showError('subject', 'Subject is required');
          return false;
        }
        clearError('subject');
        return true;

      case 'message':
        if (!value.trim()) {
          showError('message', 'Message is required');
          return false;
        }
        if (value.trim().length < 10) {
          showError('message', 'Message must be at least 10 characters long');
          return false;
        }
        clearError('message');
        return true;

      default:
        return true;
    }
  };

  
  if (nameInput) nameInput.addEventListener('blur', () => validateField('name', nameInput.value));
  if (emailInput) emailInput.addEventListener('blur', () => validateField('email', emailInput.value));
  if (subjectInput) subjectInput.addEventListener('blur', () => validateField('subject', subjectInput.value));
  if (messageInput) messageInput.addEventListener('blur', () => validateField('message', messageInput.value));

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const isNameValid = validateField('name', nameInput.value);
    const isEmailValid = validateField('email', emailInput.value);
    const isSubjectValid = validateField('subject', subjectInput.value);
    const isMessageValid = validateField('message', messageInput.value);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.setAttribute('role', 'alert');
      form.reset();

      
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 4000);
    }
  });
});



