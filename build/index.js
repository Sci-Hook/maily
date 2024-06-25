"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransport = exports.Email = void 0;
var Email_1 = require("./class/Email");
Object.defineProperty(exports, "Email", { enumerable: true, get: function () { return Email_1.Email; } });
var nodemailer_1 = require("nodemailer");
Object.defineProperty(exports, "createTransport", { enumerable: true, get: function () { return nodemailer_1.createTransport; } });
