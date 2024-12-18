<template>
  <div class="container_contact">
    <div class="container_swiper">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :modules="[EffectFade, Autoplay]"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>
        <swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
        /></swiper-slide>
        <swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-3.jpg"
        /></swiper-slide>
        <swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
        /></swiper-slide>
      </swiper>
    </div>
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
            for="correo"
            :class="{ active: isFocused.email || formData.email.trim() !== '' }"
          >
            Correo Electrónico <span>*</span>
          </label>
          <input
            type="email"
            id="correo"
            v-model="formData.email"
            @focus="isFocused.email = true"
            @blur="checkEmpty('email')"
            @invalid="setError('email')"
            :class="{ error: errors.email }"
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
          <button type="submit">Enviar</button>
        </div>
        <label class="info_user">* Obligatorio</label>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import { reactive, ref } from "vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Datos del formulario
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

// Estados de enfoque
const isFocused = reactive({
  name: false,
  email: false,
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
  errors.email = !formData.email.trim();
  errors.message = !formData.message.trim();
  // Si no hay errores, enviar el formulario
  const hasErrors = Object.values(errors).some((error) => error);
  if (!hasErrors) {
    alert("Formulario enviado con éxito");
  }
};
</script>

<style lang="scss" scoped>
@use "../styles/prefabs" as *;
@use "../styles/variables" as *;

.container_contact {
  width: 100%;
  padding: 10%;
  background: $negro_transparente;
  @include contendor_doble_rejilla();

  .container_swiper {
    width: 100%;
    display: flex;

    .swiper {
      width: 30rem;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 50px;
      .swiper-slide {
        background-position: center;
        background-size: cover;
        @include centrar_elementos();

        img {
          display: block;
          width: 100%;
          border-radius: $border_radius;
          filter: drop-shadow(5px 5px 20px #00000010);
        }
      }
    }
  }

  .container_form {
    width: 100%;
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
          left: 5%;
          position: absolute;
          transition: all 0.3s linear;
          padding: 1% 2%;

          span {
            color: red;
          }
          &.active {
            // Mueve el label hacia arriba
            top: 18%;
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
    padding-top: 20%;

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
