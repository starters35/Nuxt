export function useMeta(config: {
  title?: string
  description?: string
  group?: string
  ogImage?: string
}): void {
  const { t } = useI18n()
  const localeHead = useLocaleHead()

  const fallbackTitle: string = t('meta.untitled')
  const fallbackDescription: string = t('meta.noDescription')
  const fallbackGroup: string = t('groups.main')

  const inferredTitle: string = config.title ? t(config.title) : fallbackTitle
  const inferredDescription: string = config.description
    ? t(config.description)
    : fallbackDescription
  const inferredGroup: string = config.group ? t(config.group) : fallbackGroup

  const title: string = `${inferredTitle} • ${inferredGroup}`
  const description: string = inferredDescription

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: config.ogImage,
  })

  useHead({
    ...localeHead,
  })
}
