
tsParticles
    .loadJSON("tsparticles", "particles.json")
    .then((container) => {
        console.log("callback - tsparticles config loaded");
    })
    .catch((error) => {
        console.error(error);
    });

// example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // fetch all the forms we want to apply custom bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()