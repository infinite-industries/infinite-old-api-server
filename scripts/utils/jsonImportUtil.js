const getConnection = require(__dirname +'/../../db/connection.bk.js');
const async = require('async');
const fs = require('fs');

module.exports = {
  importFiles (Controller, files, complete) {
      getConnection((err, mongoose) => {
          if (err)
              return console.error(err);

          async.each(files, (filePath, _nextFile) => {
              fs.readFile(filePath, (err, strData) => {
                  let data = null;
                  try {
                      data = JSON.parse(strData);
                  } catch(ex) {
                      return _nextFile('error parsing json:' + ex);
                  }

                  Controller.create(data, err => {
                      if (err)
                          return _nextFile(err);

                      console.log('created new even list "%s"', data.id);
                      _nextFile();
                  })
              });
          }, err => {
              if (err) {
                  console.error(err);
                  if (complete)
                      complete(err);
              }

              mongoose.disconnect();

              if (complete)
                  complete();
          });
      });
  }
};
