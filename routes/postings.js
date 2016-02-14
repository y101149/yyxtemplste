/**
 * Created by yixinyin on 16/2/13.
 */
var express = require('express');
var router = express.Router();
var infoqueryService = require('../lib/infoqueryService');
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/query', function (req, res, next) {
    Promise.resolve(1).then(
        function () {
            var id = req.body.id;
            if (_.isNumber(id)){
                return infoqueryService.queryinfo(id);
            }
            else{
                return false;
            }
        }
    ).then(
        function (result) {
            if (result === false){
                return {
                    code:1,//means fail
                    data:null
                }
            }
            else{
                return {
                    code:0,//means suc
                    data:result
                }
            }
        }
    ).then(
        function (results) {
            res.json(results);
        },
        function (err) {
            res.json({
                code:1,
                data: null,
                errorNo: 99,//未知错误
            })
        }
    )
})
module.exports = router;
