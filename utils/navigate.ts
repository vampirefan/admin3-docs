export function closeAndNavigateTo(to: any) {
  return navigateTo(to)
}

export function closeAndNavigateBack() {
  const router = useRouter()
  return router.back()
}

export function openUrl(url: any) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'temp-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('temp-link')!)
}
