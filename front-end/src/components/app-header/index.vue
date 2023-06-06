<template>
    <ul class="flex items-center container container-style-extend">
          <li class="mr-auto h-full hover:cursor-pointer text-white dark:text-black">LOGO</li>
          <li class="mx-[20px] px-[10px] h-full py-[20px] hover:cursor-pointer">
            <router-link to="/">
              {{ $t('navLinks.link1') }}
            </router-link>
          </li>
          <li class="mx-[10px] px-[10px] py-[20px] hover:cursor-pointer">
            <router-link to="/">
              {{ $t('navLinks.link2') }}
            </router-link>
          </li>
          <li class="mx-[10px] px-[10px] py-[20px] hover:cursor-pointer">
            <router-link to="/">
              {{ $t('navLinks.link3') }}
            </router-link>
          </li>
          <li class="mx-[10px] px-[10px] py-[20px] hover:cursor-pointer">
            <router-link to="/">
              {{ $t('navLinks.link4') }}
            </router-link>
          </li>
        </ul>
</template>