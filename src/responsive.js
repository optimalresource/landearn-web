export const screenSizes = {
  smallMobile: 270,
  moreText: 456,
  mobile: 768,
  tablet: 1140,
  desktop: 1366,
};

export const mediaQueries = {
  smallMobileQuery: `(max-width: ${screenSizes.smallMobile}px)`,
  moreTextQuery: `(min-width: ${screenSizes.moreText}px)`,
  mobileQuery: `(max-width: ${screenSizes.mobile}px)`,
  tabletMinQuery: `(min-width: ${screenSizes.mobile}px)`,
  tabletQuery: `(max-width: ${screenSizes.tablet}px)`,
  desktopMinQuery: `(min-width: ${screenSizes.tablet}px)`,
  desktopQuery: `(max-width: ${screenSizes.desktop}px)`,
};
