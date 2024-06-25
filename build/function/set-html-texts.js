"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set_html_texts = void 0;
var cheerio = require("cheerio");
require("syncforeachloop");
function set_html_texts(html, texts) {
    var keys = Object.keys(texts);
    var $ = cheerio.load(html);
    return new Promise(function (resolve, reject) {
        keys.syncForEach(function (key, next) {
            $("[text=\"".concat(key, "\"]")).html(texts[key]);
            $("[text=\"".concat(key, "\"]")).removeAttr('text');
            next();
        }, function () {
            resolve($.html());
        });
    });
}
exports.set_html_texts = set_html_texts;
