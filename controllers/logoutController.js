const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");

exports.getLogoutView = (_request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
};

exports.killApplication = (_request, _response) => {
  logger.getProcessLog();
  process.exit();
};