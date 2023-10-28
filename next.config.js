const withExportImages = require('next-export-optimize-images')

let assetPrefix = ''
let basePath = ''

const hasRepoSlug = process.env.NEXT_PUBLIC_REPO_SLUG || false
if (hasRepoSlug) {
  const repo = process.env.NEXT_PUBLIC_REPO_SLUG.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: 'export',
  assetPrefix,
  basePath,
})
// const nextConfig = {  
//   assetPrefix,
//   basePath,
// }

module.exports = nextConfig
