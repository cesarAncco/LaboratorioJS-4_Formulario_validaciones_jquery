$(document).ready(function () {
  const expresiones = {
    inputUsuario: /^[a-zA-Z0-9_]{4,16}$/,
    inputNombre: /^[A-Za-z\s]{4,50}$/,
    inputContrasena:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,50}$/,
    inputCorreo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    inputCelular: /^[+51]+[0-9]{9}$/,
    inputRuc: /[0-9]{11}$/,
    inputComentario: /^[a-zA-Z0-9]{1,100}$/,
  };

  const campos = {
    inputUsuario: false,
    inputNombre: false,
    inputContrasena: false,
    inputRepetirContrasena: false,
    inputCorreo: false,
    inputCelular: false,
    inputRuc: false,
    inputComentario: false,
    // checkboxAcepto: false,
    // inputGenero: false
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test($(input).val())) {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  const validarContrasena = (input, campo) => {
    let inputContrasena = $("#inputContrasena").val();
    if ($(input).val() === inputContrasena && isNaN($(input).val())) {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  // const validarCheckbox = (input, campo) => {
  //     if ($(input).is(':checked')) {
  //         $(`#${campo}`).addClass('is-valid').removeClass('is-invalid');
  //         campos[campo] = true;
  //     } else {
  //         $(`#${campo}`).addClass('is-invalid').removeClass('is-valid');
  //         campos[campo] = false;
  //     }
  // };

  // const validarRadioButtons = (campo) => {
  //     if ($(`input[name="${campo}"]:checked`).length > 0) {
  //         $(`#${campo}`).addClass('is-valid').removeClass('is-invalid');
  //         campos[campo] = true;
  //     } else {
  //         $(`#${campo}`).addClass('is-invalid').removeClass('is-valid');
  //         campos[campo] = false;
  //     }
  // };

  const validarFormulario = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = $(target).attr("name");

    switch (name) {
      case "inputUsuario":
        validarCampo(expresiones.inputUsuario, target, "inputUsuario");
        break;
      case "inputNombre":
        validarCampo(expresiones.inputNombre, target, "inputNombre");
        break;
      case "inputContrasena":
        validarCampo(expresiones.inputContrasena, target, "inputContrasena");
        break;
      case "inputRepetirContrasena":
        validarContrasena(target, "inputRepetirContrasena");
        break;
      case "inputCorreo":
        validarCampo(expresiones.inputCorreo, target, "inputCorreo");
        break;
      case "inputCelular":
        validarCampo(expresiones.inputCelular, target, "inputCelular");
        break;
      case "inputRuc":
        validarCampo(expresiones.inputRuc, target, "inputRuc");
        break;
      case "inputComentario":
        validarCampo(expresiones.inputComentario, target, "inputComentario");
        break;
      case "inputCuidad":
        if ($(target).val() !== "") {
          $("#inputCuidad").addClass("is-valid").removeClass("is-invalid");
        } else {
          $("#inputCuidad").addClass("is-invalid").removeClass("is-valid");
        }
        break;
      case "inputImagen":
        if ($(target).val() !== "") {
          $("#inputImagen").addClass("is-valid").removeClass("is-invalid");
        } else {
          $("#inputImagen").addClass("is-invalid").removeClass("is-valid");
        }
        break;
      // case "checkboxAcepto":
      //     validarCheckbox(target, 'checkboxAcepto');
      //     break;
      // case "inputGenero":
      //     validarRadioButtons('inputGenero');
      //     break;
    }
  };

  $("#formulario input").on("blur", validarFormulario);
  $("#formulario textarea").on("blur", validarFormulario);
  $("#formulario select").on("blur", validarFormulario);
  $('#formulario input[type="checkbox"]').on("change", validarFormulario);
  $('#formulario input[name="inputGenero"]').on("change", validarFormulario);
});
