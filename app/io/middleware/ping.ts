module.exports = () => {
  return async (_, next) => {
    await next();
  }
}
