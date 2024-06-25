"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var set_data_1 = require("../function/set-data");
var set_html_texts_1 = require("../function/set-html-texts");
var fs_1 = require("fs");
var Email = /** @class */ (function () {
    function Email(name, from, transporter) {
        this.from = from;
        this.transporter = transporter;
        var subject = (0, fs_1.readFileSync)("email/".concat(name, "/subject.json"));
        this.subject = JSON.parse("".concat(subject));
        var text = (0, fs_1.readFileSync)("email/".concat(name, "/text.json"));
        this.text = JSON.parse("".concat(text));
        var html_texts = (0, fs_1.readFileSync)("email/".concat(name, "/html-texts.json"));
        this.html_texts = JSON.parse("".concat(html_texts));
        var html = (0, fs_1.readFileSync)("email/".concat(name, "/index.html"));
        this.html = "".concat(html);
    }
    Email.prototype.send = function (email, lang, dataset) {
        return __awaiter(this, void 0, void 0, function () {
            var html, subject, text, html_texts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subject = this.subject[lang];
                        text = this.subject[lang];
                        html_texts = this.html_texts[lang];
                        if (!this.html) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, set_html_texts_1.set_html_texts)(this.html, html_texts)];
                    case 1:
                        html = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!dataset) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, set_data_1.set_datas)(subject, dataset)];
                    case 3:
                        subject = _a.sent();
                        return [4 /*yield*/, (0, set_data_1.set_datas)(text, dataset)];
                    case 4:
                        text = _a.sent();
                        return [4 /*yield*/, (0, set_data_1.set_datas)(html, dataset)];
                    case 5:
                        html = _a.sent();
                        _a.label = 6;
                    case 6:
                        this.transporter.sendMail({
                            from: this.from,
                            to: email,
                            subject: subject,
                            text: text,
                            html: html
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Email;
}());
exports.Email = Email;
