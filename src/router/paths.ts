const ROOTS_AUTH = '/auth/login';
const ROOTS_DASHBOARD = '/dashboard';
const ROOT_MAIN = '/';

// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password')
};

export const PATH_PAGE = {
  root: ROOT_MAIN,
  //   seeAll: '/all-ads',
  //   category: (nameCategory: string) => `/all-ads/category/${nameCategory}`,
  //   articles: (nameCategory: string, articleId: string | number) =>
  //     `/all-ads/category/${nameCategory}/articles/${articleId}`,
  maintenance: '/maintenance',
  page404: '/404',
  page500: '/500'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  app: path(ROOTS_DASHBOARD, '/index')
};
