<template>
    <div>
        <router-link :to="{name: 'Agregar'}" class="boton btn btn-info">Cómic nuevo</router-link>
        <div class="container">
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-md-4 my-3">
                    <div class="card py-3">
                        <div class="card-body text-center">
                            <h1 class="my-3 text-uppercase text-primary">{{item.titulo}} vol. {{item.volumen}}</h1>
                            <h3 class="my-3">{{item.id_categoria}}</h3>
                            <p class="descrip px-2 py-4">{{item.id_editorial}}</p>
                            <p class="my-3">Este comic está {{item.estado}}</p>
                        </div>
                        <router-link :to="{name: 'Editar', params: {id: item.id}}" class="btn btn-light">Editar</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            // FIXME: array para mostrar los parámetros predeterminados
            items: []
        }
    },
    // definimos create() para declarar nuestras funciones
    created(){
        // Declaramos getComics(), cuando se llame al componente de listComics, irá dentro de esta función porque ESTÁ DENTRO DE CREATED
        this.getComics()
    },
    // Para declarar los métodos creamos el methods donde irán estos
    methods: {
        // Obtener todos los comics
        async getComics(){
            try {
                // Llamamos a la API de la parte del backend 
                const response = await axios.get("http://localhost:3000/comic") // Puerto 5000 porque es donde se está ejecutando el archivo index.js del backend. La (¿o las?) respuesta(¿s?) que devuelva la API se almacenará en la variable response 

                // Una vez tenemos la respuesta se la pasamos a items
                this.items = response.data

                console.log(this.items)

            } catch (err) {
                console.log(err)
            }
        }
    }

}
</script>

<style lang="sass">
.boton
    color: white

</style>