<template>
  <div id="app">
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
  #app
    --padding: 2rem

    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: var(--padding)
    min-height: 100dvh

  @media (max-width: 35rem)
    #app
      --padding: 1rem
</style>
