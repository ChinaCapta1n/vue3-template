<template>
  <header class="bg-rose-200">
    <slot name="header"></slot>
  </header>
  <main class="basis-full bg-pink-200">
    <div class="container container-style-extend">
      <slot></slot>
    </div>
  </main>
  <footer class="bg-yellow-200 py-[20px]">
    <slot name="footer"></slot>
  </footer>
</template>
