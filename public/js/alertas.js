function mostrarAlertaExito(exito, class_size) {
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: exito,
            showConfirmButton: false,
            timer: 1000,
            padding: 50,
            width: 400,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
        });
};

function mostrarAlertaError(error) {
    Swal.fire({
        icon: 'error',
        html: `
        <h2 class="form__title">Error</h2>
        <br>
        <br>
        
        <span class="form__label"> ${error} </span>
        <br>
        <br>
        
      `,
        padding: 50,
        width: 600,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          },
        confirmButtonText: `
            <button class="form__btn">
                OK
            </button>
        `
    });
};