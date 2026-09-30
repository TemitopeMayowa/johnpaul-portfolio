fetch("content/portfolio.json")
  .then(response => response.json())
  .then(data => {

    // Hero section
    document.getElementById("hero-title").textContent =
      data.personal.title;

    document.getElementById("hero-name").innerHTML =
      data.personal.name.replace(" ", "<br>");

    document.getElementById("hero-description").textContent =
      data.personal.hero_description;

  })
  .catch(error => {
    console.error("Could not load portfolio content:", error);
  });
