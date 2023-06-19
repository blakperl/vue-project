<script setup>
import menuIcon from "./icons/menuIcon.vue";
import closeIcon from "./icons/closeIcon.vue";
import { ref } from "vue";

const isOpened = ref(false);
</script>

<template>
  <div class="lg:p-4 sm:p-3 border-b-2 bg-white shadow-sm">
    <div class="lg:justify-between lg:flex md:hidden sm:hidden hidden">
      <a href="">
        <h1 class="text-dark font-bold text-xl">LMS</h1>
      </a>
      <div class="text-light flex gap-10">
        <a href="" class="no-underline">Courses</a>
        <a href="" class="no-underline">Library</a>
        <a href="" class="no-underline">Learning forum</a>
      </div>

      <div class="flex gap-4">
        <button class="">
          <svg
            width="27"
            height="26"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.016 19.8954C23.8315 17.418 24.6447 14.3464 24.2928 11.2951C23.9409 8.24382 22.4499 5.43794 20.118 3.4388C17.7862 1.43966 14.7855 0.394689 11.7163 0.512951C8.64709 0.631214 5.7357 1.90399 3.56461 4.07663C1.39351 6.24928 0.122825 9.16158 0.00675912 12.2309C-0.109307 15.3002 0.93781 18.3001 2.93862 20.6305C4.93943 22.9609 7.74638 24.4499 10.7979 24.7997C13.8494 25.1494 16.9204 24.334 19.3966 22.5167H19.3947C19.451 22.5917 19.511 22.6629 19.5785 22.7323L26.7972 29.9511C27.1488 30.3029 27.6257 30.5006 28.1231 30.5008C28.6205 30.501 29.0976 30.3036 29.4494 29.952C29.8012 29.6004 29.999 29.1235 29.9992 28.6261C29.9993 28.1287 29.8019 27.6516 29.4504 27.2998L22.2316 20.0811C22.1646 20.0132 22.0925 19.9505 22.016 19.8936V19.8954ZM22.4997 12.6879C22.4997 14.0422 22.233 15.3832 21.7147 16.6344C21.1965 17.8855 20.4369 19.0224 19.4793 19.98C18.5217 20.9376 17.3848 21.6972 16.1337 22.2154C14.8825 22.7337 13.5415 23.0004 12.1872 23.0004C10.833 23.0004 9.49198 22.7337 8.24081 22.2154C6.98964 21.6972 5.8528 20.9376 4.89519 19.98C3.93759 19.0224 3.17797 17.8855 2.65972 16.6344C2.14147 15.3832 1.87473 14.0422 1.87473 12.6879C1.87473 9.95289 2.96122 7.32986 4.89519 5.39589C6.82916 3.46193 9.45219 2.37543 12.1872 2.37543C14.9223 2.37543 17.5453 3.46193 19.4793 5.39589C21.4132 7.32986 22.4997 9.95289 22.4997 12.6879V12.6879Z"
              fill="#033E96" />
          </svg>
        </button>
        <button class="bg-graylight rounded-full py-2 px-6 text-light">
          Register
        </button>
        <button class="bg-light rounded-full py-2 px-7 text-white">
          Login
        </button>
      </div>
    </div>
    <!-- mobile -->
    <div>
      <div class="flex justify-between p-4 pt-8 lg:hidden">
        <a href="">
          <h1 class="text-dark font-bold text-lg ml-3lg:hidden">LMS</h1>
        </a>
        <button @click="isOpened = !isOpened">
          <menuIcon />
        </button>
      </div>
      <div
        :class="isOpened === true ? 'translate-x-0' : 'translate-x-[100%]'"
        class="bg-white h-[100vh] text-dark fixed z-50 top-0 w-64 p-4 pt-8 right-0 transition ease-linear shadow-2xl lg:hidden">
        <div class="flex justify-between">
          <h1 class="text-dark font-bold text-lg ml-3lg:hidden">LMS</h1>
          <button @click="isOpened = !isOpened">
            <closeIcon />
          </button>
        </div>
        <div class="flex gap-3 mt-20 mb-9">
          <button class="bg-graylight rounded-lg py-2 px-6 text-light">
            Register
          </button>
          <button class="bg-light rounded-lg py-2 px-8 text-white">
            Login
          </button>
        </div>
        <div class="text-light text-xl leading-loose">
        <a href="" class=" block no-underline mb-4">Courses</a>
        <a href=""  class=" block no-underline mb-4 " >Library</a>
        <a href=""  class=" block no-underline mb-4" >Learning forum</a>
        
      </div>
      </div>
    </div>
  </div>
</template>
