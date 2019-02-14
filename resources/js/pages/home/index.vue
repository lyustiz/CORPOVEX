<template>
  
  <v-card>
    
    <v-alert color="primary" :value="clipped">
      hello
    </v-alert>
  </v-card>

</template>

<script>
  export default {
    
    data () {
      return {
        clipped: true,
      }
    }
  }
</script>
