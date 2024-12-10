<template>
  <footer>
    <div class="container_footer">
      <div class="container_info">
        <div class="content_logo">
          <img src="../../public/logo_header.png" alt="" />
        </div>
        <h5>Contacto</h5>
        <ul>
          <li>hola</li>
          <li>hola</li>
          <li>hola</li>
        </ul>
      </div>
      <div class="container_info">
        <h5>Nosotros</h5>
        <ul>
          <li>Politica de Privacidad</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
      <div class="container_info">
        <h5>Enlaces</h5>
        <ul>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
    <div class="container_copyright">
      <h2>Nueva Era Digital &#169;​ 2024, Todos los derechos reservados.</h2>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

footer {
  width: 100%;
  position: relative;
  @include columnas_flexibles();
  .container_footer {
    width: 80%;
    margin: auto;
    padding-bottom: 3%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    .container_info {
      display: flex;
      flex-direction: column;
      h5 {
        color: $color_principal;
        text-transform: uppercase;
        font-size: 1rem;
        margin-bottom: 2%;
      }
    }
    .content_logo {
      width: 100%;
      margin-bottom: 3%;
      img {
        width: 100%;
      }
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      li {
        width: 100%;
        margin: 2% 0;
        color: #4e4d4d;

        &:hover {
          color: $color_principal_transparente;
          cursor: pointer;
        }
      }
    }

    @media screen and (max-width: 600px) {
      @include columnas_flexibles_izquierda();
      padding-bottom: 10%;
    }
  }
  .container_copyright {
    position: fixed;
    bottom: 0;
    height: 20px;
    background: $blanco_transparente;
    backdrop-filter: blur($blur);
    width: 100%;
    padding: 1% 0;
    box-shadow: -1px -1px 10px $color_principal_transparente;
    z-index: 90;
    @include centrar_elementos();
    h2 {
      color: $color_principal;
      text-transform: uppercase;
      font-size: 1rem;

      @media screen and (max-width: 600px) {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
