import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

export default withNextIntl({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
})
