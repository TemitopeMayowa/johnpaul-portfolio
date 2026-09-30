fetch("content/portfolio.yml")
  .then(response => response.text())
  .then(data => {
    console.log("CMS content loaded:", data);
  })
  .catch(error => {
    console.error("Could not load CMS content:", error);
  });
