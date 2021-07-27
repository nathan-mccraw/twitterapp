const formatDateTime = (dtg) => {
  let a = dtg.split(/[-t:.]/gi);
  const timestamp = new Date(Date.UTC(a[0], --a[1], a[2], a[3], a[4], a[5]));

  return timestamp.toUTCString();
};

module.exports = formatDateTime;
