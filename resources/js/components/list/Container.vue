<template>
    
    <v-container fluid grid-list-md text-xs-center>
            
            <v-layout row justify-center>

                <v-flex xs12>
                        
                        <v-card>
                            
                            <v-toolbar :class="HeadColor" dark>
                                
                                <h3>{{titulo}}</h3>
                                
                                <v-spacer></v-spacer>
                                
                                <v-btn icon  @click="ayuda1" dark>
                                    <v-icon>help</v-icon>
                                </v-btn>
                                
                            </v-toolbar>

                            <v-card-text>
                                <slot></slot>
                            </v-card-text>
                        
                        </v-card>

                </v-flex>

            </v-layout>
        
    </v-container>      
    
</template>

<script>
export default {
    props:['titulo', 'ayuda', 'HeadColor', 'TextColor' ],
    methods: {
        ayuda1()
        {
            return true
        }
    },
}
</script>
