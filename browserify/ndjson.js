exports.parse = (string) => {
  var result = string.split('\n').map(JSON.parse);
  return result;
}

exports.stringify = (rows) => {
  var result = rows.map(JSON.stringify).join('\n');
  return result;
}
