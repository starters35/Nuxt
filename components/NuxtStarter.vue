<script setup lang="ts">
  import VStack from '+/layout/VStack.vue'
  import HStack from '+/layout/HStack.vue'

  const { t, locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const config = useRuntimeConfig()

  function openUrl(url?: string): void {
    if (!import.meta.client) return

    if (url) {
      window.open(url, '_blank')
    }
  }

  interface ItemGrid {
    title: string
    description: string
    items: GridItem[]
  }

  interface GridItem {
    title: string
    description: string
    icon: string
    url?: string
  }

  const FeatureGrid: ItemGrid = {
    title: 'welcome.features.title',
    description: 'welcome.features.description',
    items: [
      {
        title: 'welcome.features.nuxt.title',
        description: 'welcome.features.nuxt.description',
        icon: 'logos:nuxt-icon',
      },
      {
        title: 'welcome.features.typescript.title',
        description: 'welcome.features.typescript.description',
        icon: 'logos:typescript-icon',
      },
      {
        title: 'welcome.features.sass.title',
        description: 'welcome.features.sass.description',
        icon: 'logos:sass',
      },
      {
        title: 'welcome.features.nuxtModules.title',
        description: 'welcome.features.nuxtModules.description',
        icon: 'lucide:a-large-small',
      },
      {
        title: 'welcome.features.i18n.title',
        description: 'welcome.features.i18n.description',
        icon: 'lucide:languages',
      },
      {
        title: 'welcome.features.prettier.title',
        description: 'welcome.features.prettier.description',
        icon: 'logos:prettier',
      },
    ],
  }

  const ResourceGrid: ItemGrid = {
    title: 'welcome.resources.title',
    description: 'welcome.resources.description',
    items: [
      {
        title: 'welcome.resources.documentation.title',
        description: 'welcome.resources.documentation.description',
        icon: 'lucide:book-open-text',
        url: 'https://nuxt.com/docs',
      },
      {
        title: 'welcome.resources.modules.title',
        description: 'welcome.resources.modules.description',
        icon: 'lucide:puzzle',
        url: 'https://nuxt.com/modules',
      },
      {
        title: 'welcome.resources.examples.title',
        description: 'welcome.resources.examples.description',
        icon: 'lucide:code',
        url: 'https://nuxt.com/docs/4.x/examples',
      },
      {
        title: 'welcome.resources.deploy.title',
        description: 'welcome.resources.deploy.description',
        icon: 'lucide:rocket',
        url: 'https://nuxt.com/deploy',
      },
    ],
  }

  const Grids: ItemGrid[] = [FeatureGrid, ResourceGrid]
</script>

<template>
  <VStack class="nuxtStarter">
    <HStack class="fullWidth autoSpace header">
      <a href="https://github.com/starters35/Nuxt" target="_blank">
        <button>
          <Icon name="mingcute:github-fill" />
          {{ t('welcome.viewOnGitHub') }}
        </button>
      </a>

      <HStack class="langPicker">
        <NuxtLink
          v-for="lang in locales"
          :key="lang.code"
          :to="switchLocalePath(lang.code)"
          :class="{ highlight: locale === lang.code }"
          class="pick"
        >
          {{ lang.code }}
        </NuxtLink>
      </HStack>
    </HStack>

    <h1>{{ t('welcome.title', { version: config.public.version }) }}</h1>

    <p>
      <i18n-t keypath="welcome.description">
        <template #path>
          <code class="inlineCode">/pages/index.vue</code>
        </template>

        <template #component>
          <code class="inlineCode">/components/NuxtStarter.vue</code>
        </template>
      </i18n-t>
    </p>

    <VStack v-for="grid in Grids" class="gridSection">
      <h2>{{ t(grid.title) }}</h2>
      <p>{{ t(grid.description) }}</p>

      <div class="grid">
        <div
          v-for="item in grid.items"
          class="gridItem"
          :class="{ clickable: item.url }"
          @click="openUrl(item.url)"
        >
          <Icon name="lucide:external-link" class="linkIcon" v-if="item.url" />
          <Icon :name="item.icon" class="icon" />

          <h3>{{ t(item.title) }}</h3>
          <p>{{ t(item.description) }}</p>
        </div>
      </div>
    </VStack>
  </VStack>
</template>

<style scoped lang="sass">
  .nuxtStarter
    .header
      .langPicker
        padding: 0 0.5rem

        .pick:not(.highlight)
          opacity: 0.6

    .inlineCode
      display: inline-block
      background: var(--foregroundColor)
      border: var(--foregroundColor) solid 0.1rem
      color: var(--accentText)
      padding: 0 0.25rem
      border-radius: 0.5rem

    .gridSection
      margin-top: 1.5rem
      width: 100%

      .grid
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
        gap: 0.5rem
        margin-top: 1rem
        width: 100%

        .gridItem
          display: flex
          position: relative
          flex-direction: column
          align-items: flex-start
          gap: 0.5rem
          padding: 1.5rem
          border: 0.1rem solid var(--foregroundColor)
          border-radius: 1.5rem
          transition: 0.2s ease

          &:hover
            border-color: var(--accentColor)

            .linkIcon
              transform: scale(1.5)

          &.clickable
            cursor: pointer

          .icon
            width: 2rem
            height: 2rem
            color: var(--accentText)

          .linkIcon
            position: absolute
            right: 1.5rem
            top: 1.5rem
            width: 1rem
            height: 1rem
            transform-origin: top right
            transition: 0.2s ease
            opacity: 0.6
</style>
