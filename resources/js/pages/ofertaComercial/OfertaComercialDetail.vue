<template>

<div>
    <v-tabs 
     grow 
     v-model="tabs"
     color="grey lighten-4"
    >
        <v-tab href="#tab1" class="blue--text">
            <v-icon color="red darken-2">mdi-notebook-outline</v-icon> Oferta Comercial
        </v-tab>

        <v-tab href="#tab2"  class="blue--text">
            <v-icon color="red darken-2">mdi-dolly</v-icon> Datos de la Carga
        </v-tab>

        <v-tab href="#tab3" class="blue--text">
            <v-icon color="red darken-2">mdi-feature-search-outline</v-icon> Detalles tecnicos
        </v-tab>

    </v-tabs>

    <v-tabs-items v-model="tabs">
        
        <v-tab-item value="tab1">
            <v-card flat>
                <v-card-text>
                    Oferta Comercial. 
                </v-card-text>
            </v-card>
        </v-tab-item>
        
        <v-tab-item value="tab2">
            <v-card flat>
                <v-card-text>
                    Datos de la carga. 
                </v-card-text>
            </v-card>
        </v-tab-item>
        
        <v-tab-item value="tab3"> 
            <v-card flat>
                <v-card-text>
                    Detalles Tecnicos. 
                </v-card-text>
            </v-card>
        </v-tab-item>

    </v-tabs-items>

</div>
</template>

<script>
export default {
    data(){
        return {
            tabs : 'tab1'
        }
    }


}
</script>

<style>

</style>
