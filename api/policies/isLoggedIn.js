const localStorage = require('localStorage');

module.exports = async function (req, res, next) {
  var aux = localStorage.getItem('Authorization');
  console.log("***************");
  console.log(aux);
  if (!req.headers || !req.headers.authorization) {
    const tokenParam = aux;
    res.redirect('/login');
    console.log("sin autorización");
    return res.badRequest({err: 'authorization header is missing'});
  }


  const tokenParam = req.headers.authorization;
  const decodedToken = JWTService.verify(tokenParam);
  const user = await User.findOne({
    id: decodedToken.user
  });
  if (!user) {
    return next({err:'invalid credentials provided'});
  }
  req.user = user.id;
  next();
};
