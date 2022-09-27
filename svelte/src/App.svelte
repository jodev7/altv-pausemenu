<script lang="ts">

  const ClickBtn = (e:string) => {
    if('alt' in window) {
      switch (e) {
      case 'resume':
         window.alt.emit('PauseMenu::close')
        break
      case 'settings':
         window.alt.emit('PauseMenu::settings')
        break
      case 'map':
         window.alt.emit('PauseMenu::map')
        break
      case 'quit':
         window.alt.emit('PauseMenu::exit')
    }
    }
  }

</script>

<main class="flex flex-col h-screen bg-zinc-700">
    <div class="w-[200px] flex justify-center mx-auto my-auto">
      <!-- <img src="/big-logo.svg" alt="logo"> -->
      <h1 class="text-white text-[80px]">Logo</h1>
    </div>
    <div class="flex flex-col gap-1 absolute bottom-10 left-10 text-white text-4xl">
      <div on:click={() => ClickBtn('resume')} class="cursor-pointer hover:text-5xl hover:text-sky-500">Resume</div>
      <div on:click={() => ClickBtn('settings')} class="cursor-pointer hover:text-5xl hover:text-sky-500">Settings</div>
      <div on:click={() => ClickBtn('map')} class="cursor-pointer hover:text-5xl hover:text-sky-500">Map</div>
      <div on:click={() => ClickBtn('quit')} class="cursor-pointer hover:text-5xl hover:text-sky-500">Quit</div>
    </div>
</main>

<style>
</style>