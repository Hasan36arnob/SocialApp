/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Prevent Webpack from scanning 'Application Data'
      config.module.rules.push({
        test: /\.(js|ts|tsx)$/,
        exclude: /Application Data/,
      });
  
      return config;
    }
  };
  
  export default nextConfig;
  