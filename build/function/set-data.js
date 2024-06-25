"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set_datas = void 0;
require("syncforeachloop");
function set_datas(text, dataset) {
    var newtext = text;
    var keys = Object.keys(dataset);
    return new Promise(function (resolve, reject) {
        keys.syncForEach(function (key, next) {
            newtext = newtext.replace("#{".concat(key, "}"), dataset[key]);
            next();
        }, function () {
            resolve(newtext);
        });
    });
}
exports.set_datas = set_datas;
