<template>
  <div class="flex flex-row h-screen">

    <div class="basis-1/2 h-full bg-men">
      <div class="flex items-center justify-center h-screen relative">
        <!-- MEN -->
        <div class="content-backdrop">
          <button class="text-[82px] tracking-widest text-white text-shadow transition-transform duration-300 hover:scale-110" @click="redirectToMen">MEN</button>
        </div>
      </div>
    </div>

    <div class="basis-1/2 h-full bg-women">
      <div class="flex items-center justify-center h-screen relative">
        <!-- WOMEN -->
        <div class="content-backdrop">
          <button class="text-[82px] tracking-widest text-white text-shadow transition-transform duration-300 hover:scale-110" @click="redirectToWomen">WOMEN</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    redirectToMen() {
      window.location.href = 'men'; // Redirige a una URL externa
    },
    redirectToWomen() {
      window.location.href = 'women'; // Redirige a una URL externa
    }
  }
};
</script>

<style scoped>
.hello {
  font-family: Arial, sans-serif;
}



.relative {
  position: relative;
  backdrop-filter: blur(3px);
  /* Desenfoca solo el fondo, no el contenido */
}


.content-backdrop {
  position: relative;
  z-index: 1;
  padding: 20px;
}

body {
  font-family: 'Big Shoulders Stencil Display', sans-serif;
}

/**End Background Blur */
</style>
