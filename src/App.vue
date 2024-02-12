<script setup lang="ts">
import {ref} from 'vue'
import {
  PinInput,
  PinInputInput,
} from '@/components/ui/pin-input'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

const value = ref<string[]>([])
const handleComplete = () =>  {
  if(value.value.join('') === '43135') {
    isRight.value = true
  } else {
    value.value = []
  }

}
const isRight = ref<boolean>(false)

</script>

<template>
  <main class="h-[150dvw] md:h-screen w-full bg-pink-300 flex items-center justify-center">
    <div class="relative flex items-center w-full justify-center">
      <div class="heart-shape top-10 md:top-10 z-10" :class="(isRight ? 'blur-0' : 'blur-3xl')"/>
      <img v-if="isRight" src="../public/yay.png" width="160px" class="w-48 h-48 absolute -top-2 z-40"/>
      <Card class="w-[250px] h-fit z-20 mx-auto" v-if="!isRight">
        <CardHeader>
          <CardTitle>Valentine Guard</CardTitle>
          <CardDescription class="flex items-center gap-x-2">
            <p>
              Are you sure you know the password?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"
            ><path fill="#FFCC4D" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071"/><path fill="#E75A70" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5"/><path fill="#F18F26" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8m32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8"/><path fill="#FFCC4D" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5m26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5"/><path fill="#FEE7B8" d="M.701 25a.5.5 0 0 1-.31-.892c.162-.127 4.02-3.12 10.648-2.605c.275.02.481.261.46.536c-.021.275-.257.501-.537.46c-6.233-.474-9.915 2.366-9.951 2.395a.51.51 0 0 1-.31.106m8.868-4.663a.512.512 0 0 1-.149-.022c-4.79-1.497-8.737-.347-8.777-.336a.499.499 0 1 1-.288-.957c.173-.052 4.286-1.247 9.362.338a.5.5 0 0 1-.148.977M35.299 25a.5.5 0 0 0 .31-.892c-.162-.127-4.02-3.12-10.648-2.605a.499.499 0 0 0-.46.536c.021.275.257.501.537.46c6.233-.474 9.915 2.366 9.951 2.395a.51.51 0 0 0 .31.106m-8.868-4.663c.049 0 .1-.007.149-.022c4.79-1.497 8.737-.347 8.777-.336a.499.499 0 1 0 .288-.957c-.173-.052-4.286-1.247-9.362.338a.5.5 0 0 0 .148.977"/><path fill="#292F33" d="M25.327 25.622a.5.5 0 0 0-.551-.069l-4 2c-1.871.935-6.727.947-6.776.947a.5.5 0 0 0-.25.933v.001h.001v.001c.071.04.153.063.24.065h7.008c2.658 0 4.089-2.186 4.475-3.342a.5.5 0 0 0-.147-.536"/><g fill="#292F33"><ellipse cx="12" cy="14.5" rx="2" ry="3.5"/><ellipse cx="24" cy="14.5" rx="2" ry="3.5"/><path d="M21 12a.999.999 0 0 1-.707-1.707C24.537 6.049 28.819 6 29 6a1 1 0 0 1 .005 2c-.065.001-3.687.096-7.298 3.707A.997.997 0 0 1 21 12m-6 0a.997.997 0 0 1-.707-.293C10.667 8.082 7.031 8 6.995 8a1.002 1.002 0 0 1-.992-1.005A.997.997 0 0 1 7 6c.18 0 4.463.049 8.707 4.293A.999.999 0 0 1 15 12"/></g></svg>
          </CardDescription>
        </CardHeader>
        <CardContent class="flex items-center justify-center">
          <img src="../public/hello.png" width="160px" class="w-24 h-24"/>
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Sheet>
            <SheetTrigger class="">
              <Button variant="outline">
                Help me!
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" class="h-[50%]">
              <SheetHeader>
                <SheetTitle>Password hints </SheetTitle>
                <SheetDescription class="flex ">
                  <ul class="*:py-2 *:font-medium text-start">
                    <li>
                      1. How many pets do I have ?
                    </li>
                    <li>
                      2. Сто Пятьдесят Шесть разделить на Пятьдесят Два
                    </li>
                    <li>
                      3. What day was I born?
                    </li>
                    <li>
                      4. 5
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger class="">
              <Button class="bg-pink-600 hover:bg-pink-700">Yeyeye~</Button>
            </SheetTrigger>
            <SheetContent side="bottom" class="h-[60%]">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription class="flex items-center justify-center flex-col mt-10">
                  You can try type underneath
                </SheetDescription>
              </SheetHeader>
              <PinInput
                id="pin-input"
                v-model="value"
                placeholder=""
                class="flex gap-2 items-center my-8 mx-auto w-fit"
              >
                <PinInputInput
                  v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
                  class="z-20 font-semibold"
                />
              </PinInput>
              <SheetFooter>
                <div class="flex flex-col md:flex-row md:gap-x-4 gap-y-2">
                  <SheetClose as-child>
                    <Button @click="handleComplete" size="lg" class="bg-pink-600 hover:bg-pink-700 font-semibold">
                      Try
                    </Button>
                  </SheetClose>
                  <SheetClose as-child>
                    <Button type="submit" size="lg" variant="outline">
                      Close
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
         
        </CardFooter>
      </Card>
    </div>
  </main>
</template>

<style scoped>
body {
	@apply bg-pink-700
}
.heart-shape{
  position: absolute;
  width: 150px;
  height: 150px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  @apply bg-pink-700
}
.heart-shape:before,
.heart-shape:after{
  position: absolute;
  width: 200px;
  height: 200px;
  content: '';
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  @apply bg-pink-700
}
.heart-shape:before{
  bottom: 0px;
  left: -110px;
}
.heart-shape:after{
  top: -110px;
  right: 0px;
}

</style>
@/src/components/ui/sheet