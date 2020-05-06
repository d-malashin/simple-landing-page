import "./main.scss";
import heroImageSrc from './assets/images/Hero BG Image.jpg'
import bigFeatureSrc from "./assets/images/Big Feature Image.png";
import quoteImageSrs from "./assets/images/Quote Image.png";

const imageSetter = () => {
  document.querySelector(".review__image").src = quoteImageSrs;
  document.querySelector(".about__image").src = bigFeatureSrc;
  document.querySelector(".header").style.background = `url('${heroImageSrc}')`;
};

imageSetter()