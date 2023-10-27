let basePath = ''

const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}
console.log(basePath);
/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  // your configuration values.
  basePath
}

module.exports = config
