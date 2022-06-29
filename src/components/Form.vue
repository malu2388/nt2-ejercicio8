<template>
  <section class="src-components-form">
    <h1>FORM</h1>
    <hr />

    <vue-form :state="formstate" @submit.prevent="enviar()">
      <!-- NOMBRE -->
      <validate tag="div" class="form-group row">
        <label for="nombre" class="col-sm-1 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input
            type="text"
            id="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
            placeholder="Nombre"
            class="form-control"
          />
          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo requiere como máximo {{ nombreMaxLength }} caracteres.
            </div>
          </field-messages>
        </div>
      </validate>

      <!-- EDAD -->
      <validate tag="div" class="form-group row">
        <label for="edad" class="col-sm-1 col-form-label">Edad</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
            name="edad"
            id="edad"
            placeholder="Edad"
          />
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima es {{ edadMin }}.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima es {{ edadMax }}.
            </div>
          </field-messages>
        </div>
      </validate>

      <!-- EMAIL -->
      <validate tag="div" class="form-group row">
        <label for="email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            v-model.trim="formData.email"
            required
            name="email"
            id="email"
            placeholder="Email"
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Email no válido
            </div>
          </field-messages>
        </div>
      </validate>

      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="submit"
            :disabled="formstate.$invalid"
            class="btn btn-success"
          >
            Enviar
          </button>
        </div>
      </div>
    </vue-form>
  </section>
</template>

<script>
export default {
  name: "src-components-form",
  props: [],
  mounted() {},
  data() {
    return {
      formstate: {},
      formData: this.getInitialData(),
      nombreMinLength: 5,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      mockapiLink: "https://62b708ec491a19c97aed7ab6.mockapi.io/form-TP7",
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },

    enviar() {
      let usuario = {
        nombre: this.formData.nombre,
        edad: this.formData.edad,
        email: this.formData.email,
      };
      console.log(usuario);
      this.$store.dispatch("postUsuarios", usuario);
      this.formData = this.getInitialData();
      this.formstate._reset();
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
</style>