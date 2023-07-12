// const sweetAlert = document.querySelector("#sweetAlert");

// sweetAlert.addEventListener("click", () => {

//   Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'question',
//     confirmButtonText: 'Aceptar',
//     showCancelButton: true,
//     cancelButtonText: 'Rechazar',
//     iconHtml: '<i class="bi bi-emoji-heart-eyes"></i>'
//         }).then((result) => {
//             if(result.isConfirmed) {
//                 alert("Bien hecho!")
//             } else {
//                 alert("Rechazado")
//             }
//         })

//       })

const toastify = document.querySelector("#toastify");

toastify.addEventListener("click", () => {

  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  
})

