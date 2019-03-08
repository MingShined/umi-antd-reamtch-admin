/**
 * @name 获取面包屑
 */
export const filterBreadCrumbs = (menuData, pathname, breadCrumbs) => {
  return menuData.find(item => {
    breadCrumbs.push(item);
    if (item.path === pathname) {
      return true;
    }
    if (item.children) {
      const isFind = filterBreadCrumbs(item.children, pathname, breadCrumbs);
      if (isFind) {
        return true;
      }
    }
    breadCrumbs.pop();
    return false;
  });
};
