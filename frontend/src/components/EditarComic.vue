<template>
  <div class="">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card">
            <div class="card-body text-center">
              <form>
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
                  <input type="enum" class="form-control" v-model="estado" placeholder="Estado (Disponible, Agotado o Descatalogado)">
                </div>
                <div class="form-group">
                  <button class=" btn_actualizar btn btn-warning px-5" @click="updateProduct()">Actualizar</button>
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
import { enumDeclaration } from '@babel/types';
import axios from 'axios';
export default {
    data() {
      return {
        // Pasamos los campos de la tabla comic  
        titulo: "",
        volumen: parseInt,
        id_categoria: parseInt,
        id_editorial: parseInt,
        estado: enumDeclaration,
        id: parseInt
    };
  },
  created:function() {
    this.getPorductById()
  },
  methods: {
    async getPorductById() {
      try{
        const response=await axios.get(`http://localhost:3000/comic/${this.$route.params.id}`)
        
        this.titulo=response.data.titulo
        this.volumen=response.data.volumen
        this.id_categoria=response.data.id_categoria
        this.id_editorial=response.data.id_editorial
        this.estado=response.data.estado
        this.id=response.data.id

      }catch(err) {
        console.log(err)
      }
    },
    async updateProduct() {
      try{
        const comicEditado = {
          titulo: this.titulo,
          volumen: this.volumen,
          id_categoria: this.id_categoria,
          id_editorial: this.id_editorial,
          estado: this.estado,
          id: this.id
        }
        await axios.put(`http://localhost:3000/comic/${this.$route.params.id}`, comicEditado)
          this.$router.push("/comic") 
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style lang="sass">
  .btn_actualizar
    color: white
</style>