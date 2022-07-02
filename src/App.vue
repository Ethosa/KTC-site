<template>
  <main class="flex flex-row" style="background: #14061d">
    <div class="flex">
      <div class="flex w-5/12 h-screen justify-center">
        <img src="./assets/light.png" class="h-5/6 self-center anim" />
        <img
          src="./assets/dark.png"
          class="h-5/6 self-center mt-4 -ml-48 filter drop-shadow-3xl anim2"
        />
      </div>
      <div
        class="flex flex-col w-1/2 -mt-64 justify-center text-white font-sans"
      >
        <div class="flex w-full text-8xl p-8">KTC App</div>
        <div class="flex text-justify text-5xl indent-16">
          Официальное приложение для Канского технологического колледжа с
          приятным интерфейсом
        </div>
      </div>
    </div>
  </main>
</template>

<style>
* {
  color: #cfb7d4;
}
@keyframes move {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}

.anim {
  animation: 2s move ease-in-out infinite alternate-reverse;
}

.anim2 {
  animation: 2s move ease-in-out infinite alternate-reverse;
  animation-delay: 0.2s;
}
</style>
