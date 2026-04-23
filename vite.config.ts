import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/route-dist/', // 保持你原来的 GitHub Pages 配置

  build: {
    // 解决动态导入警告的配置
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },

  // 适配 Vite 8.0 的依赖优化配置
  optimizeDeps: {
    rolldownOptions: {
      ignoreAnnotations: true
    }
  }
})