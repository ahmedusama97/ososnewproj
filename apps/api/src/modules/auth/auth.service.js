"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var node_crypto_1 = require("node:crypto");
var storage_path_1 = require("../../shared/storage-path");
var DEFAULT_USERNAME = "admin";
var DEFAULT_PASSWORD = "admin123";
var AuthService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthService = _classThis = /** @class */ (function () {
        function AuthService_1() {
            var _a;
            this.storagePath = (0, storage_path_1.resolveStoragePath)("admin-auth.json");
            this.settings = this.loadSettings();
            this.currentToken = (_a = process.env.ADMIN_TOKEN) !== null && _a !== void 0 ? _a : (0, node_crypto_1.randomBytes)(24).toString("hex");
        }
        AuthService_1.prototype.login = function (username, password) {
            if (username !== this.settings.username || !this.verifyPassword(password)) {
                throw new common_1.UnauthorizedException("Invalid admin credentials.");
            }
            return {
                token: this.currentToken,
                username: this.settings.username,
            };
        };
        AuthService_1.prototype.changePassword = function (authorization, currentPassword, newPassword) {
            this.assertAuthorized(authorization);
            if (!this.verifyPassword(currentPassword)) {
                throw new common_1.UnauthorizedException("Current password is incorrect.");
            }
            if (newPassword.trim().length < 8) {
                throw new common_1.BadRequestException("New password must be at least 8 characters.");
            }
            var newSalt = (0, node_crypto_1.randomBytes)(16).toString("hex");
            var newHash = (0, node_crypto_1.scryptSync)(newPassword, newSalt, 64).toString("hex");
            this.settings.salt = newSalt;
            this.settings.passwordHash = newHash;
            this.persistSettings();
            this.currentToken = (0, node_crypto_1.randomBytes)(24).toString("hex");
            return {
                token: this.currentToken,
                username: this.settings.username,
            };
        };
        AuthService_1.prototype.assertAuthorized = function (authorization) {
            var token = (authorization === null || authorization === void 0 ? void 0 : authorization.startsWith("Bearer "))
                ? authorization.slice(7)
                : authorization;
            if (token !== this.currentToken) {
                throw new common_1.UnauthorizedException("Unauthorized admin request.");
            }
        };
        AuthService_1.prototype.verifyPassword = function (password) {
            var candidate = (0, node_crypto_1.scryptSync)(password, this.settings.salt, 64);
            var stored = Buffer.from(this.settings.passwordHash, "hex");
            if (candidate.length !== stored.length) {
                return false;
            }
            return (0, node_crypto_1.timingSafeEqual)(candidate, stored);
        };
        AuthService_1.prototype.loadSettings = function () {
            var _a, _b, _c;
            if ((0, node_fs_1.existsSync)(this.storagePath)) {
                try {
                    var raw = (0, node_fs_1.readFileSync)(this.storagePath, "utf8");
                    return JSON.parse(raw);
                }
                catch (_d) { }
            }
            var salt = (_a = process.env.ADMIN_PASSWORD_SALT) !== null && _a !== void 0 ? _a : (0, node_crypto_1.randomBytes)(16).toString("hex");
            var passwordHash = (_b = process.env.ADMIN_PASSWORD_HASH) !== null && _b !== void 0 ? _b : (0, node_crypto_1.scryptSync)(DEFAULT_PASSWORD, salt, 64).toString("hex");
            var settings = {
                username: (_c = process.env.ADMIN_USERNAME) !== null && _c !== void 0 ? _c : DEFAULT_USERNAME,
                passwordHash: passwordHash,
                salt: salt,
            };
            this.persistRaw(settings);
            return settings;
        };
        AuthService_1.prototype.persistSettings = function () {
            this.persistRaw(this.settings);
        };
        AuthService_1.prototype.persistRaw = function (settings) {
            (0, node_fs_1.mkdirSync)((0, node_path_1.dirname)(this.storagePath), { recursive: true });
            (0, node_fs_1.writeFileSync)(this.storagePath, JSON.stringify(settings, null, 2), "utf8");
        };
        return AuthService_1;
    }());
    __setFunctionName(_classThis, "AuthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
}();
exports.AuthService = AuthService;
