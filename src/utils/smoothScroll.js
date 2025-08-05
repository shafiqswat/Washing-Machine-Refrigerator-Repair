/** @format */

// utils/smoothScroll.js
export const smoothScrollTo = (id) => {
  const target = document.getElementById(id);
  if (target) {
    const yOffset = -80; // adjust for sticky header
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
