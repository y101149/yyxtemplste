/**
 * Created by yixinyin on 16/2/13.
 */

var db_config = require("./db_info");
var database = db_config.config.database;
var collection = db_config.config.collection;

exports.queryByID = function (info) {
    return new Promise(function (resolve, reject) {
        var obj = {};
        info.db.collection(collection).find({id:info.id}).toArray(function (err, doc) {
            if (err){
                console.log(err)
                reject(err);
            }
            else{
                obj = {
                    doc:doc,
                    db:info.db
                }
                resolve(obj);
            }
        })
    })
}


//db_config.connectmongodb(database).then(
//    function (db) {
//        exports.queryByID({db:db,id:12}).then(
//            function (ret) {
//                ret.db.close()
//                console.log(ret.doc);
//            }
//        )
//    }
//)



