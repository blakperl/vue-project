<script setup>
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import CardsTwo from "../components/CardsTwo.vue";
import StarCards from "../components/StarCards.vue";
import Footer from "../components/Footer.vue";
import FiveStar from "../components/FiveStar.vue";
</script>

<template>
  <div class="lg:w-screen max-lg:w-full">
    <NavBar />

    <section>
      <div
        class="bg-bg1 w-screen h-full pt-28 lg:pl-24 lg:flex justify-between items-center bg-no-repeat sm:pl-10">
        <div class="flex">
          <div class="w-[1/2] justify-center max-xl:w-full">
            <img
              src="../assets/images/dot.svg"
              alt=""
              class="mb-6 w-[18%] max-xl:hidden" />
            <p class="text-dark font-semibold lg:mb-8 max-xl: mb-4">
              BETTER ACADEMIC PLATFORM
            </p>
            <p class="max-xl:hidden text-5xl font w-[80%] mb-8 leading-normal">
              Strong Academic and social skills with safe and joyful learning
            </p>
            <!-- mobile -->
            <p
              class="lg:hidden text-4xl font-semibold mb-4 leading-normal text-dark">
              Strong Academic <br />
              and social skills with <br />
              <span class="text-black">safe and joyful learning</span>
            </p>
            <p class="w-[76%] h-16 text-lg text-graydark mb-10">
              Engage students inside and outside the classroom through a
              reliable system that delivers life-changing teaching and learning
              experiences.
            </p>
            <div class="flex gap-6 mb-14">
              <button class="px-8 py-3 bg-dark text-white rounded-lg">
                Learn More
              </button>
              <button
                class="px-14 py-3 border-2 border-dark text-dark rounded-lg mr-16 font-semibold">
                Demo
              </button>
            </div>
          </div>
          <div class="grid w-[1/2] grid-cols-2 gap-6 max-xl:hidden">
            <img src="../assets/images/image1.svg" alt="" class="w-full" />
            <img src="../assets/images/image2.svg" alt="" class="w-[80%]" />
            <img src="../assets/images/image3.svg" alt="" class="ml-[170px]" />
            <div>
              <img
                src="../assets/images/image4.svg"
                alt=""
                class="w-[79%] pt-[45%] ml-[-75%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="bg-[#F6F4FF] lg:w-screen max-xl:w-full lg:flex lg:justify-center lg:items-center bg-repeat py-4">
        <div class="">
          <div class="flex justify-center flex-col items-center mt-24">
            <p class="text-dark font-semibold">OUR FEATURES</p>
            <p class="text-4xl mt-4 font-semibold mb-16">
              Top Feature & Services
            </p>
          </div>
          <div class="mb-14 lg:ml-36">
            <Cards />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="lg:py-24 lg:pl-24 lg:w-screen sm:py-12 w-full">
        <div>
          <div>
            <div class="max-xl:hidden">
              <p class="font-bold text-center text-3xl mb-10">
                More than your average e-Learning platform
              </p>
              <p class="text-xs text-center text-graydark">
                Web and Mobile-friendly e-Learning experience with our online
                LMS platform
              </p>
            </div>
            <!-- mobile -->
            <div class="lg:hidden">
              <p class="font-semibold text-center text-4xl mb-5 leading-normal">
                More than your average <br />
                E-Learning platform
              </p>

              <p class="text-xs text-center text-graydark">
                Web and Mobile-friendly e-Learning experience <br />
                with our online LMS platform
              </p>
            </div>
          </div>
          <img
            src="../assets/images/dot.svg"
            alt=""
            class="w-[10%] max-xl:hidden" />
          <div
            class="flex justify-center w-[80%] items-center ml-36 mt-4 relative max-xl:hidden">
            <img src="../assets/images/groupimg.svg" alt="" class="" />
            <img
              src="../assets/images/dot.svg"
              alt=""
              class="w-[12%] absolute -right-24 max-xl:hidden" />
          </div>
          <!-- mobile -->
          <div class="px-12 py-8 lg:hidden">
            <img src="../assets/images/groupimg.svg" alt="" class="h-[80%]" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="bg-dark lg:w-screen max-xl:w-full py-16 lg:flex justify-center">
        <div class="">
          <div class="max-xl:hidden">
            <p class="font-bold text-center text-white text-3xl mb-6">
              A wide range of courses
            </p>
            <p class="text-white text-center mb-10">
              Creating a fully online learning platform with the aim of
              supporting lecturers to develop effective courses to ensure <br />
              quality learning outcomes for their students whilst guarantying a
              smooth real time communication between the <br />
              lecturers and students.
            </p>
          </div>
          <div class="lg:hidden px-16">
            <p class="font-semibold text-white text-3xl mb-6 ml-12">
              A wide range of courses
            </p>
            <p class="text-white text-center mb-10 mr-44 leading-7">
              Creating a fully online learning platform with the aim <br />
              of supporting lecturers to develop effective courses to <br />
              ensure quality learning outcomes for their students <br />
              whilst guarantying a smooth real time communication <br />
              between the lecturers and students.
            </p>
            <div><CardsTwo /></div>
          </div>
          <div class="max-xl:hidden"><CardsTwo /></div>
          <div class="flex justify-center">
            <button
              class="px-10 py-3 bg-white text-dark rounded-lg mr-16 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="bg-[#F6F4FF] lg:w-screen max-xl:w-full flex justify-center items-center bg-repeat pb-20">
        <div class="">
          <div class="flex justify-center flex-col items-center mt-24 mb-16">
            <p class="text-dark font-semibold">OUR PRICING</p>
            <p class="text-4xl mt-4 font-semibold mb-16 text-center h-10">
              Suitable And Nice Pricing Plan <br />
              With Our Top Services
            </p>
            <p class="text-sm text-graydark">
              We have created pricing plans to suit your budget.
            </p>
          </div>
          <div class="mb-14 ml-36">
            <StarCards />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="bg-feedback lg:w-screen max-xl:w-full flex justify-center items-center bg-repeat text-white pb-20">
        <div>
          <div class="flex justify-center flex-col items-center mt-24 mb-16">
            <p class="text-dark font-semibold mb-10">TESTIMONIAL</p>
            <p class="text-center text-3xl font-semibold mb-8">
              The True Measure of Value of Any <br />
              Business is Performance
            </p>
          </div>
          <div
            class="w-[700px] h-[240px] rounded-lg bg-white text-center pt-16 relative">
            <img src=".." class="absolute" alt="" />
            <p class="text-graydark text-sm mb-6">
              The LMS is very user-friendly, and it significantly improved our
              current academic process.
            </p>
            <p class="text-black">
              Mobolaji Ajayi Vice <br />
              <span class="text-graydark text-sm"> Chancellor, Unilag</span>
            </p>
            <FiveStar />
            <div></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="lg:w-screen max-xl:w-full items-center bg-repeat px-36 py-10">
        <div class="bg-transparent p-8 lg:flex justify-between gap-x-8">
          <div
            class="bg-dark w-full py-32 px-10 rounded-sm max-xl:mb-6 max-xl:hidden">
            <div class="text-white">
              <p class="text-white text-3xl mb-6 font-semibold">Get in touch</p>
              <p class="h-16 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="font-semibold text-lg mb-6 underline">
                +1 (308) 321 321
              </p>
              <a href="" class="font-semibold text-lg mb-6 underline">
                Info@alphas.com
              </a>

              <p class="mt-6 h-14 text-xl">
                545, Street 11, Block F <br />
                Dean Boulevard, Ohio
              </p>
            </div>
          </div>
          <!-- mobile -->
          <div
            class="bg-dark w-full py-24 px-10 rounded-sm max-xl:mb-6 lg:hidden">
            <div class="text-white">
              <p class="text-white text-3xl mb-6 font-semibold">Get in touch</p>
              <p class="h-16 mb-6 text-sm leading-6">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="font-semibold text-lg mb-6 underline">
                +1 (308) 321 321
              </p>
              <a href="" class="font-semibold text-lg mb-6 underline">
                Info@alphas.com
              </a>

              <p class="mt-6 h-14 text-lg">
                545, Street 11, Block F <br />
                Dean Boulevard, Ohio
              </p>
            </div>
          </div>
          <div class="bg-white w-full rounded-sm p-8 pb-10">
            <div>
              <p class="text-xl font-semibold">Enter Details</p>
              <form class="pt-6 w-full">
                <div class="flex flex-wrap gap-5 mb-3 max-xl:hidden">
                  <div class="w-[1/2]">
                    <label class="block mb-2" for="full name">Full Name</label>
                    <input
                      class="shadow appearance-none border rounded py-3 px-3 w-64 mr-6 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" />
                  </div>
                  <div class="w-[1/2]">
                    <label class="block mb-2" for="email">Email</label>
                    <input
                      class="shadow appearance-none border rounded py-3 px-5 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" />
                  </div>
                </div>
                <div class="lg:hidden mb-3">
                  <label class="block mb-2" for="full name">Full Name</label>
                  <input
                    class="shadow appearance-none border rounded py-3 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                    type="text" />
                </div>
                <div class="lg:hidden mb-3">
                  <label class="block mb-2" for="full name">Email</label>
                  <input
                    class="shadow appearance-none border rounded py-3 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                    type="text" />
                </div>
                <div class="mb-3">
                  <label class="block mb-2" for="phone">Phone</label>
                  <input
                    class="shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" />
                </div>
                <div>
                  <label class="block mb-3" for="message">Message</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="mt-8">
                  <button class="px-10 py-3 bg-dark text-white rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <Footer />
      </div>
    </footer>
  </div>
</template>
