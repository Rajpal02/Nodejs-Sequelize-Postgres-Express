function errorsMiddlewares(err, req, res, next) {
  console.error('[Errors Middleware] \n', err.stack);
  res.status(500).end({ success: false, message: err.message });
}

export default errorsMiddlewares;
