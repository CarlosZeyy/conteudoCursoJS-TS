export const middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  next();
};

export const checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render('404');
  }
  next();
}

export const csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}