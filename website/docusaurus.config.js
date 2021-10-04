module.exports = {
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-GE16D1JY6T',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
};