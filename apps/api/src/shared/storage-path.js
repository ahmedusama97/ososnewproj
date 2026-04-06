"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveStoragePath = resolveStoragePath;
var node_os_1 = require("node:os");
var node_path_1 = require("node:path");
function resolveStoragePath(fileName) {
    if (process.env.VERCEL) {
        return (0, node_path_1.join)((0, node_os_1.tmpdir)(), "visaflow-data", fileName);
    }
    return (0, node_path_1.join)(process.cwd(), "data", fileName);
}
