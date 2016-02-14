/**
 * Created by yixinyin on 16/2/13.
 */
var MongoClient = require('mongodb').MongoClient;
var database ='mongodb://yinyixin:yinyixin@ds061415.mongolab.com:61415/yyxtest';

exports.connectmongodb = function (url) {
    return new Promise(function (resolve, reject) {
        new MongoClient.connect(url, function(err, db) {
            if (err){
                reject(err);
                console.log(err);
            }
            else{
                resolve(db);
            }

            console.log("Connected correctly to server.");
            //showinfo(db, function () {
            //    db.close();

        });
    })
}

exports.config = {
    database:'mongodb://yinyixin:yinyixin@ds061415.mongolab.com:61415/yyxtest',
    collection:'mycollection'
}


