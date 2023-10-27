const withExportImages = require('next-export-optimize-images')

let assetPrefix = ''
let basePath = ''

const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: 'export',
  assetPrefix,
  basePath,
  experimental: {
    appDir: true,
  },
  images: {
    loader: "custom",
    path: ""
  }
})
// const nextConfig = {  
// }

module.exports = nextConfig
