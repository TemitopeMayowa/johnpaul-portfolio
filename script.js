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

    document.getElementById("about-description").textContent =
  data.personal.about_description;

document.getElementById("height").textContent =
  data.measurements.height;

document.getElementById("chest").textContent =
  data.measurements.chest + '"';

document.getElementById("waist").textContent =
  data.measurements.waist + '"';

document.getElementById("trouser-length").textContent =
  data.measurements.trouser_length + '"';

document.getElementById("shoe-size").textContent =
  data.measurements.shoe_size;

document.getElementById("eyes").textContent =
  data.measurements.eyes;

  })
  .catch(error => {
    console.error("Could not load portfolio content:", error);
  });
