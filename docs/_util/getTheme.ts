function findParentWithAttribute(
  node: HTMLElement | null,
  attr = 'data-theme',
) {
  while (node) {
    if (node.hasAttribute(attr)) return node.getAttribute(attr);
    node = node.parentNode as HTMLElement;
  }
  return null;
}

export const getTheme = (node?: HTMLElement | null): string => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  if (node) {
    const parentTheme = findParentWithAttribute(node);
    parentTheme && (currentTheme = parentTheme);
  }

  return currentTheme ?? 'light';
};
