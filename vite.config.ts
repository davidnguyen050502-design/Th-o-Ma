// FIX: Explicitly import `process` to provide Node.js types and resolve the error with `process.cwd()`.
import process from 'process';
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Tải các biến môi trường từ tệp .env trong thư mục gốc
  // Tham số thứ ba là '' để tải tất cả các biến, không cần tiền tố VITE_
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Cung cấp biến process.env.API_KEY cho code phía client
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  }
})
