<template>
  <div class="">
    <div class="container py-4">
      <div class="row">
          <div class="col-md-4 mx-auto">
              <div class="card">
                  <div class="card-body text-center">
                      <form >
                          <!-- <div class="form-group">
                              <input type="text" class="form-control" name="titulo" placeholder="Título del cómic" required autofocus>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" name="volumen" placeholder="Volúmen" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" name="id_categoria" placeholder="Categoría (número de la categoría)" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" name="id_editorial" placeholder="Editorial (número de la editorial)" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" name="estado" placeholder="Estado (Disponible, Agotado o Descatalogado)">
                          </div> -->
                          <div class="form-group">
                              <input type="text" class="form-control" v-model="titulo" placeholder="Título del cómic" required autofocus>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" v-model="volumen" placeholder="Volúmen" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" v-model="id_categoria" placeholder="Categoría (número de la categoría)" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" v-model="id_editorial" placeholder="Editorial (número de la editorial)" required>
                          </div>
                          <div class="form-group">
                              <input type="number" class="form-control" v-model="estado" placeholder="Estado (Disponible, Agotado o Descatalogado)">
                          </div>
                          <div class="form-group">
                              <button class="btn btn-info px-5" @click="createProduct">Guardar</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default { 
    data () {
      return {
        // Pasamos los campos del la tabla comic  
        titulo: "",
        volumen: "",
        id_categoria: "",
        id_editorial: "",
        estado: ""
      }
    },
    created() {

    },
    methods: {
      // Crear un nuevo comic
      async createProduct(){
        try{
          await axios.post("http://localhost:3000/comic/agregar", {
            titulo: this.titulo,
            volumen: this.volumen,
            id_categoria: this.id_categoria,
            id_editorial: this.id_editorial,
            estado: this.estado
          });
          (this.titulo = ""),
          (this.volumen = ""),
          (this.id_categoria = ""),
          (this.id_editorial = ""),
          (this.estado = "")
          // this.titulo = "",
          // this.volumen = "",
          // this.id_categoria = "",
          // this.id_editorial = "",
          // this.estado = ""
  
          // Redireccionamos al producto
          this.$router.push("/comic")
        }catch(err) {
          console.log(err)
        }
      }
    }
}
</script>

<style>

</style>