import Script from 'next/script'

const umamiUrl = process.env.UMAMI_URL
const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID
const isDev = process.env.NODE_ENV === 'development'

export default function UmamiAnalytics() {
  if (isDev || !umamiUrl || !umamiWebsiteId) {
    return null
  }

  return (
    <Script
      defer
      src={umamiUrl}
      data-website-id={umamiWebsiteId}
      strategy="lazyOnload"
    />
  )
}