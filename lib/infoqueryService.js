/**
 * Created by yixinyin on 16/2/13.
 */
var db_config = require("./db_info");
var infoquerymodel = require('./infoquerymodel');
var database = db_config.config.database;
var collection = db_config.config.collection;


exports.queryinfo = function (id) {
    var info = {
        id:id
    }
    return db_config.connectmongodb(database).then(
        function (db) {
            info.db = db;
            return infoquerymodel.queryByID(info).then(
                function (result) {
                    var db = result.db;
                    var data = result.doc;
                    db.close();
                    //console.log(data);
                    return data;
                }
            )
        }
    )
}


//exports.queryinfo(11).then(
//    function (ret) {
//        console.log(ret)
//    }
//)
