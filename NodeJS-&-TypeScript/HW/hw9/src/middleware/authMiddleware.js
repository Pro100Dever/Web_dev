function checkMustChangePassword(req, res, next) {
  // Предполагаем, что пользователь уже аутентифицирован и доступен в req.user
  if (req.user && req.user.mustChangePassword === true) {
    return res.redirect('/change-password') // или другой путь смены пароля
  }
  next()
}

function checkAuth(req, res, next) {
  if (!req.user) {
    return res.redirect('/register')
  }
  next()
}
export { checkAuth, checkMustChangePassword }
