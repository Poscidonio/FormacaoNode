const fs = require('fs');
const util = require('util');

/* ** passar sem retorno **
class Reader {
  Read(filepath) {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
} */

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath, 'utf-8');
    } catch (err) {
      return undefined;
    }
  }
}

module.exports = Reader;
