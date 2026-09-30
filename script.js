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

    document.getElementById("whatsapp-link").href =
  "https://wa.me/" + data.contact.whatsapp;

document.getElementById("phone-link").href =
  "tel:+" + data.contact.whatsapp;

document.getElementById("phone-link").textContent =
  data.contact.whatsapp.replace("234", "0");

document.getElementById("email-link").href =
  "mailto:" + data.contact.email;

document.getElementById("email-link").textContent =
  data.contact.email;

document.getElementById("instagram-link").href =
  "https://instagram.com/" + data.contact.instagram.replace("@", "");

document.getElementById("instagram-link").textContent =
  data.contact.instagram;
    // Portfolio gallery
    const gallery = document.getElementById("gallery");

    data.portfolio_images.forEach(item => {
      if (item.image) {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.alt;

        galleryItem.appendChild(image);
        gallery.appendChild(galleryItem);
      }
    });
  })
  .catch(error => {
    console.error("Could not load portfolio content:", error);
  });
