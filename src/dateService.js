module.exports.getDate = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yy = today.getFullYear();
  return `${dd}-${mm}-${yy}`;
};
