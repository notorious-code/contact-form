 const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset
      const fields = ['firstName', 'lastName', 'email', 'message'];
      let valid = true;

      fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        input.classList.remove('input-error');
        error.textContent = '';
        if (!input.value.trim()) {
          input.classList.add('input-error');
          error.textContent = 'This field is required';
          valid = false;
        }
      });

      // Email format check
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value && !emailRegex.test(email.value)) {
        email.classList.add('input-error');
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
      }

      // Query Type
      const queryTypes = document.getElementsByName('queryType');
      const queryTypeError = document.getElementById('queryTypeError');
      let queryTypeSelected = false;
      for (const qt of queryTypes) {
        if (qt.checked) {
          queryTypeSelected = true;
          break;
        }
      }
      queryTypeError.textContent = '';
      if (!queryTypeSelected) {
        queryTypeError.textContent = 'Please select a query type';
        valid = false;
      }

      // Consent checkbox
      const consent = document.getElementById('consent');
      const consentError = document.getElementById('consentError');
      consentError.textContent = '';
      if (!consent.checked) {
        consentError.textContent = 'To submit this form, please consent to being contacted';
        valid = false;
      }

      // If valid, show success
      if (valid) {
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });