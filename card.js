document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Your message must be at least 10 characters long.");
      return;
    }

    successMsg.hidden = false;
    form.reset();

    setTimeout(() => {
      successMsg.hidden = true;
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const avatarInput = document.querySelector('[data-testid="test-avatar-upload"]');
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

  const updateTime = () => {
    timeEl.textContent = Date.now();
  };

  updateTime();
  setInterval(updateTime, 1000);

  avatarInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      avatarImg.src = url;
    }
  });
});



