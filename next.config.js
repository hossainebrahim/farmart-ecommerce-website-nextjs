/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i0.wp.com"],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyBPa2SnFPNk7GFxYbs0Nta7qByMUj86UdA",
    FIREBASE_AUTH_DOMAIN: "farmart-grocery-19596.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-grocery-19596",
    FIREBASE_STORAGE_BUCKET: "farmart-grocery-19596.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "910840582021",
    FIREBASE_APP_ID: "1:910840582021:web:ae7ae8d8e0849a76337eec",
  },
};

module.exports = nextConfig;
