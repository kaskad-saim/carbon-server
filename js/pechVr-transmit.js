window.addEventListener('load', () => {
  const selectors = ['.temper-1-skolz', '.temper-2-skolz', '.temper-3-skolz'];
  const allowedOrigins = ['http://169.254.7.86:92', 'http://169.254.6.19:50'];

  selectors.forEach((selector, index) => {
    const element = document.querySelector(selector);
    const value = element ? element.textContent.trim() : null;

    allowedOrigins.forEach((origin) => {
      window.parent.postMessage(
        {
          type: `temperatureValue${index + 1}`,
          value,
        },
        origin
      );
    });
  });
});
