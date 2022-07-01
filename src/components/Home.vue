<template>
  <div class="flex flex-row">
    <transition name="fade">
      <div v-show="show" class="flex">
        <div class="flex w-5/12 h-screen justify-center">
          <img src="../assets/light.png" class="h-5/6 self-center"/>
          <img src="../assets/dark.png" class="h-5/6 self-center mt-4 -ml-48 filter drop-shadow-3xl"/>
        </div>
        <div class="flex flex-col w-1/2 -mt-64 justify-center">
          <div class="flex w-full text-8xl p-8">KTC App</div>
          <div class="flex text-justify  text-5xl indent-16">
            Официальное приложение для Канского технологического колледжа с приятным интерфейсом
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default{
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true;
  },
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    transform: translateX(-10em);
    opacity: 0;
  }

  .fade-enter-to, .fade-leave-from {
    transform: translateX(0px);
    opacity: 1;
  }
</style>

