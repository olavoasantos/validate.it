function MockFile(name, size, mimeType) {
  size = size || 1024;
  name = name || 'mock.txt';
  mimeType = mimeType || 'plain/txt';

  function range(count) {
    var output = '';
    for (var i = 0; i < count; i++) {
      output += 'a';
    }
    return output;
  }

  var blob = new Blob([range(size)], { type: mimeType });
  blob.lastModifiedDate = new Date();
  blob.name = name;

  return blob;
};

export default MockFile;
