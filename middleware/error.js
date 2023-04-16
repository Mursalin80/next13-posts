export const onError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end('Something broke!');
};
export const onNoMatch = (req, res) => {
  res.status(404).end('Page is not found');
};
