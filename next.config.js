/** @type {import('next').NextConfig} */
const nextConfig = {
    
        distDir: 'build',
        key:'X-Frame-Options',
        value:'DENY',
    
}

module.exports = nextConfig
