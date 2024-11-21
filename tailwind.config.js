module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React file paths
    "./node_modules/flowbite/**/*.js" // Include Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add Flowbite plugin
  ],
};
