export function scrollToSection(targetId: string) {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return;
  }

  const headerHeight = document.querySelector(".global-header")?.getBoundingClientRect().height ?? 0;
  const subNavigationHeight = document.querySelector(".sub-navigation")?.getBoundingClientRect().height ?? 0;
  const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
  const offset = headerHeight + subNavigationHeight + 12;

  window.scrollTo({
    top: Math.max(0, targetTop - offset),
    behavior: "smooth",
  });
}
