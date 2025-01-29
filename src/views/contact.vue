<template>
  <div class="container_contact">
    <div class="container_form">
      <h2>Contáctanos</h2>
      <p>
        ¡Queremos saber más acerca de tu proyecto! Déjanos tu información y
        cuéntenos un poco al respecto, nos pondremos en contacto contigo lo
        antes posible.
      </p>
      <form @submit.prevent="validateForm">
        <div>
          <label
            for="nombre"
            :class="{ active: isFocused.name || formData.name.trim() !== '' }"
          >
            Nombre <span>*</span>
          </label>
          <input
            type="text"
            id="nombre"
            v-model="formData.name"
            @focus="isFocused.name = true"
            @blur="checkEmpty('name')"
            @invalid="setError('name')"
            :class="{ error: errors.name }"
          />
        </div>

        <div>
          <label
            for="mensaje"
            :class="{
              active: isFocused.message || formData.message.trim() !== '',
            }"
          >
            Mensaje <span>*</span>
          </label>
          <textarea
            id="mensaje"
            v-model="formData.message"
            @focus="isFocused.message = true"
            @blur="checkEmpty('message')"
            @invalid="setError('message')"
            rows="5"
            :class="{ error: errors.message }"
          ></textarea>
        </div>
        <div class="container_buttons">
          <a target="_blank" @click="validateForm">Enviar</a>
        </div>
        <label class="info_user">* Obligatorio</label>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import { onMounted, reactive, ref } from "vue";
import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Datos del formulario
const formData = reactive({
  name: "",
  message: "",
});

const linkForm = ref("#");

// Estados de enfoque
const isFocused = reactive({
  name: false,
  message: false,
});

// Errores
const errors = reactive({
  name: false,
  email: false,
  message: false,
});

// Verifica si el campo está vacío al desenfocar
const checkEmpty = (field) => {
  if (formData[field].trim() === "") {
    isFocused[field] = false;
  }
};
// Función que se activa cuando el input es inválido
const setError = (field) => {
  errors[field] = true; // Establece el error cuando el navegador muestra el mensaje
};

// Validar el formulario al enviar
const validateForm = () => {
  // Reiniciar errores
  errors.name = !formData.name.trim();
  errors.message = !formData.message.trim();
  // Si no hay errores, enviar el formulario
  const hasErrors = Object.values(errors).some((error) => error);
  if (!hasErrors) {
    window.open(
      `https://wa.me/52${
        footerInfo.tel_1
      }?text=Hola, soy ${formData.name.trim()}!\n\n ${formData.message.trim()} `
    );
  } else {
    return false;
  }
};
import footerData from "@/json/infoEmpresa.json";

// Usamos los datos directamente
const footerInfo = footerData.footer.find((t) => t.id === 1);

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
@use "../styles/prefabs" as *;
@use "../styles/variables" as *;

.container_contact {
  padding: 5% 10%;
  background: $negro_transparente;
  @include centrar_elementos();

  .container_form {
    width: 60dvw;
    margin: auto;
    padding: 5%;
    @include columnas_flexibles();

    h2 {
      color: $color_principal;
      font-size: 2rem;
    }
    p {
      margin: 2% 0;
    }
    form {
      width: 100%;
      margin-top: 2%;
      backdrop-filter: blur($blur);
      background: #ffffff1e;
      border-radius: $border_radius * 2;
      border: solid 3px $color_principal;
      background-color: #fff0ac07;
      @include columnas_flexibles_izquierda();
      padding: 5%;

      div {
        position: relative;
        width: 100%;
        padding: 2%;
        @include columnas_flexibles_izquierda();

        input {
          width: 100%;
          padding: 1.3rem 0.5rem;
          font-size: 1.5rem;

          border: 2px solid transparent;
          border-bottom: solid 2px $color_principal;
          background: $negro_transparente;
          margin: 2% 0;
          transition: all 0.3s linear;
          &:focus {
            outline: none;
            border: 2px solid $color_principal;

            &.error {
              border: 2px solid red !important;
            }
          }
        }
        label {
          top: 50%;
          transform: translateY(-50%);
          left: 3%;
          position: absolute;
          transition: all 0.3s linear;
          padding: 1% 2%;

          span {
            color: red;
          }
          &.active {
            // Mueve el label hacia arriba
            top: 25%;
            left: 0%;
            opacity: 1;
            color: #fff;
            border-radius: $border_radius;
            background: $color_principal;
          }
        }

        textarea {
          width: 100%;
          padding-top: 1.5rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          border: 2px solid transparent;
          border-bottom: solid 2px $color_principal;
          font-size: 1rem;
          margin-top: 3%;
          background: $negro_transparente;
          transition: all 0.3s linear;
          &:focus {
            outline: none;
            border: 2px solid $color_principal;
          }
        }
      }

      .info_user {
        font-size: 0.8rem;
        color: red;
        margin-left: 2%;
      }

      .error {
        border: 2px solid red;
      }
    }
  }

  @media screen and (max-width: 900px) {
    @include columnas_flexibles();
    flex-direction: column-reverse;
    padding-top: 30%;

    textarea {
      margin-top: 5% !important;
    }
  }

  @media screen and (max-width: 800px) {
    textarea {
      margin-top: 9% !important;
    }
  }
}
</style>
