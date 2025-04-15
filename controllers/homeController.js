const { MENU_LINKS } = require("../constants/navigation");

exports.getHomeView = (_request, response) => {
  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
};