<template>
  <main class="p-12 flex flex-col justify-between h-[100vh]">
    <div class="flex flex-col justify-between">
      <div class="flex justify-between items-center">
        <img src="/branding/beacon_logo_base.png" class="h-12 w-12">
        <img src="/svg/close--filled.svg" class="h-12 w-12">
      </div>
      
      <hr class="w-full h-[1px] my-6">

      <div class="grid grid-cols-1 gap-2">
        <div v-for="item in NAV" class="flex gap-4">
          <img :src="'/svg/' + item[1] + '.svg'" class="h-8 w-8">
          <a class="text-semibold uppercase text-xl text-black" href="{{ item[0] }}">
            {{ item[1] }}
          </a>
        </div>
      </div>
    </div>
    
    <div class="flex justify-between">
    
    </div>
  </main>
</template>

<script>
const NAV = [
  ["/", "home"],
  ["/properties", "search"],
  ["/blog", "writing"],
  ["/about", "info"]
]
</script>