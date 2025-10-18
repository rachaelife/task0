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