/** @format */

// utils/smoothScroll.js
export const smoothScrollTo = (id) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const target = document.getElementById(id);
  if (target) {
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
