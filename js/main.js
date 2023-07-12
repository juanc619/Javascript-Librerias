const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", () => {

  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'question',
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Rechazar',
    iconHtml: '<i class="bi bi-emoji-heart-eyes"></i>'
        }).then((result) => {
            if(result.isConfirmed) {
                alert("Bien hecho!")
            } else {
                alert("Rechazado")
            }
        })

      })
