const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/profile/all", controller.allAccess);

  app.get("/api/profile/user", [authJwt.verifyToken], controller.userProfile);

  app.get(
    "/api/profile/mod",
    [authJwt.verifyToken, authJwt.isSuperuser],
    controller.superuserProfile
  );

  app.get(
    "/api/profile/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminProfile
  );
};
