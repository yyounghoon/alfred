const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const path = require('path');

/** @type {import('next').NextConfig} */

console.log('path', path.join(__dirname, 'src/styles'));

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: '@use "@/styles/_mixins.scss" as *;',
  },
};

module.exports = withVanillaExtract(nextConfig);
