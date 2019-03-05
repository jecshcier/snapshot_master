"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.default = {
    PORT: '3033',
    DB: {
        username: "",
        password: "",
        database: "",
        option: {
            host: '',
            dialect: "",
            define: {
                paranoid: true,
                freezeTableName: true,
            }
        }
    },
    DIR: {
        cacheDir: 'cache_img',
        fileDir: 'files'
    },
    STATIC: {
        prefix: '/snapshot/static',
        dir: path.join(__dirname, 'public')
    },
    VIEW: {
        dir: path.join(__dirname, 'views')
    },
    DOMAIN: 'http://127.0.0.1:3033'
};
//# sourceMappingURL=config.js.map