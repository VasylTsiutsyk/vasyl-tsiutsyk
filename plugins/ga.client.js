export default defineNuxtPlugin(() => {
  if (process.client) {
    const gId = 'G-FPMV8FZTB4';
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', gId);
  }
});
