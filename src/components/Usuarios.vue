<template>
  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr />
      <br />

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Mail</th>
          </tr>
          <tr v-for="(usuario, i) in usuarios" :key="i">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        No se encontraron usuarios
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  mounted() {
    this.getUsuariosAxios();
  },
  data() {
    return {
    };
  },
  methods: {
     getUsuariosAxios() {
     this.$store.dispatch('getUsuarios');
    },
  },

  computed: {
    usuarios() {
      return this.$store.state.usuarios;
    }
  },
};
</script>

<style scoped lang="css">
</style>
