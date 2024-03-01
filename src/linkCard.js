import "./linkCard.css";

function linkCard(title, description, link) {
  const div = document.createElement("div");
  div.className = "link-card";

  const titleElement = document.createElement("h3");
  titleElement.className = "link-card-title";
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "link-card-description";
  descriptionElement.textContent = description;

  const linkElement = document.createElement("a");
  linkElement.className = "link-card-link";
  linkElement.textContent = "Learn More →";
  linkElement.href = link;
  linkElement.target = "_blank";

  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  div.appendChild(linkElement);

  return div;
}

export { linkCard };
