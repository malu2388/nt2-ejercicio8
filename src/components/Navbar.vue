<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/notas">
      <a class="navbar-brand" href="#">Inicio</a>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/form">
            <a class="nav-link" href="#">Form</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/usuarios">
            <a class="nav-link" href="#">Usuarios</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>