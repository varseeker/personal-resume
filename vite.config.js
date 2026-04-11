import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Repository: https://github.com/varseeker/personal-resume
 * GitHub Pages: https://varseeker.github.io/personal-resume/
 */
const GITHUB_REPO_SLUG = 'personal-resume'

/** Ensures leading/trailing slash for GitHub project pages: /repo-name/ */
function ghPagesBase(path) {
  if (!path || path === '/') return '/'
  const p = path.startsWith('/') ? path : `/${path}`
  return p.endsWith('/') ? p : `${p}/`
}

// https://vite.dev/config/
// CI sets VITE_BASE_PATH from the repo name (see .github/workflows/deploy-github-pages.yml)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:
    command === 'build'
      ? ghPagesBase(process.env.VITE_BASE_PATH || `/${GITHUB_REPO_SLUG}/`)
      : '/',
}))
