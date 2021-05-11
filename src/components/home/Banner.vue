<template>
  <base-card dark>
    <v-vanta effect="clouds" :options=options
      height="400"
      width="100%"></v-vanta>
      
    <v-img
      :src="require('@/assets/articles/blurcamera.png')"
      class=""
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            Young Ripperzzz
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            The Pro FPV pilots of the future!
          </div>

          <v-btn
            color="primary"
            depressed
            to=""
          >
            Join our group!
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  import VVanta from 'vue-vanta';
  export default {
    name: 'HomeBanner',
    components: { VVanta },
    data () {
      return {
        options: {
            mouseControls: true,
            touchControls: true,
            minHeight: 400.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            skyColor: 0x1E1E1E
        }
      }
    }
  }
</script>
