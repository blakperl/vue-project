<script setup>
import instagramIcon from "./icons/instagramIcon.vue";
import twitterIcon from "./icons/twitterIcon.vue";
import linkedinIcon from "./icons/linkedinIcon.vue";
import facebookIcon from "./icons/facebookIcon.vue";
</script>

<template>
  <div>
    <div class="bg-dark text-white lg:px-24 lg:pt-36 pb-24 max-xl:px-14 max-xl:pt-20">
      <div class="lg:flex lg:gap-32">
        <div class="">
          <img src="../assets/images/iLearnNG.svg" alt="" class="mb-8" />

          <div class="w-[465px] tracking-wide leading-loose text-justify mb-8">
            <p class="tracking-wide">
              Creating a fully online learning platform with the aim of
              supporting lecturers to develop effective courses to ensure
              quality learning outcomes for their students whilst guarantying a
              smooth real time communication between the lecturers and students.
            </p>
          </div>
          <div class="flex gap-5">
            <div
              class="w-[35px] h-[35px] rounded-md bg-white flex justify-center items-center">
              <a href=""> <instagram-icon /> </a>
            </div>
            <div
              class="w-[35px] h-[35px] rounded-md bg-white flex justify-center items-center">
              <a href=""><twitter-icon /></a>
            </div>
            <div
              class="w-[35px] h-[35px] rounded-md bg-white flex justify-center items-center">
              <a href=""> <linkedin-icon /> </a>
            </div>
            <div
              class="w-[35px] h-[35px] rounded-md bg-white flex justify-center items-center">
              <a href=""> <facebook-icon /> </a>
            </div>
          </div>
        </div>
        <div class="lg:flex justify-between grid grid-cols-2 mt-6 gap-x-36">
          <div>
            <p class="text-xl font-semibold mb-10">Pages</p>
            <ul class="">
              <li class="mb-4">
                <a href="#" class="hover:underline">Course</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Dashboard</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Learning Forum</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Library</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-xl font-semibold mb-10">Case</p>
            <ul class="">
              <li class="mb-4">
                <a href="#" class="hover:underline">Browse Issues</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hove`r:underline">Reports</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">FAQs</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Screenshot</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Testimonial</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-xl font-semibold mb-10">Power</p>
            <ul class="">
              <li class="mb-4">
                <img src="../assets/images/BimsLogo.svg" class="lg:w-[100px] max-xl:[80px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="items-center">
      <div class=" py-6  text-center items-center text-dark ">
        <p class="text-center">© Copyright <span><a href="" class="hover:underline">2023</a></span> | iLearnNG</p>
      </div>
    </div>
  </div>
</template>
