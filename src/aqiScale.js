import "./aqiScale.css";

export const weatherComponent = () => {
  const div = document.createElement("div");
  div.className = "weather-component";

  const heading = document.createElement("h2");
  heading.textContent = "How good is the weather?";
  div.appendChild(heading);

  const weatherQualities = [
    {
      quality: "Good",
      description:
        "0 to 50: Air quality is satisfactory, and air pollution poses little or no risk.",
    },
    {
      quality: "Moderate",
      description:
        "51 to 100: Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
    },
    {
      quality: "Unhealthy for Sensitive Groups",
      description:
        "101 to 150: Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
    },
    {
      quality: "Unhealthy",
      description:
        "151 to 200: Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
    },
    {
      quality: "Very Unhealthy",
      description:
        "201 to 300: Health alert: The risk of health effects is increased for everyone.",
    },
    {
      quality: "Hazardous",
      description:
        "301 and higher: Health warning of emergency conditions: everyone is more likely to be affected.",
    },
  ];

  weatherQualities.forEach(({ quality, description }) => {
    const container = document.createElement("div");
    container.className = "weather-quality-indicator";

    const title = document.createElement("div");
    title.className = `weather-quality-title ${quality
      .toLowerCase()
      .replace(/\s/g, "-")}`;
    title.textContent = quality;

    const desc = document.createElement("div");
    desc.className = "weather-quality-description";
    desc.textContent = description;

    container.appendChild(title);
    container.appendChild(desc);
    div.appendChild(container);
  });

  return div;
};
