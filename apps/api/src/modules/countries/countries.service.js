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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
var common_1 = require("@nestjs/common");
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var storage_path_1 = require("../../shared/storage-path");
var defaultAccent = "from-[#964900] via-[#ffb787] to-[#126c39]";
var defaultCountries = [
    { id: "fr", code: "fr", nameAr: "فرنسا", nameEn: "France", flag: "🇫🇷", visaType: "تأشيرة سياحية", accent: "from-[#213f8f] via-white to-[#d42028]", createdAt: new Date().toISOString() },
    { id: "us", code: "us", nameAr: "أمريكا", nameEn: "United States", flag: "🇺🇸", visaType: "تأشيرة سياحية", accent: "from-[#123c7d] via-white to-[#c62839]", createdAt: new Date().toISOString() },
    { id: "gb", code: "gb", nameAr: "بريطانيا", nameEn: "United Kingdom", flag: "🇬🇧", visaType: "تأشيرة سياحية", accent: "from-[#1a3b8f] via-white to-[#cf2d37]", createdAt: new Date().toISOString() },
    { id: "de", code: "de", nameAr: "ألمانيا", nameEn: "Germany", flag: "🇩🇪", visaType: "تأشيرة سياحية", accent: "from-black via-[#d52b1e] to-[#ffce00]", createdAt: new Date().toISOString() },
    { id: "it", code: "it", nameAr: "إيطاليا", nameEn: "Italy", flag: "🇮🇹", visaType: "تأشيرة سياحية", accent: "from-[#009246] via-white to-[#ce2b37]", createdAt: new Date().toISOString() },
    { id: "es", code: "es", nameAr: "إسبانيا", nameEn: "Spain", flag: "🇪🇸", visaType: "تأشيرة سياحية", accent: "from-[#aa151b] via-[#f1bf00] to-[#aa151b]", createdAt: new Date().toISOString() },
    { id: "jp", code: "jp", nameAr: "اليابان", nameEn: "Japan", flag: "🇯🇵", visaType: "تأشيرة سياحية", accent: "from-white via-[#f5f2f2] to-[#bc002d]", createdAt: new Date().toISOString() },
    { id: "ch", code: "ch", nameAr: "سويسرا", nameEn: "Switzerland", flag: "🇨🇭", visaType: "تأشيرة سياحية", accent: "from-[#d52b1e] via-[#ef3b2d] to-[#d52b1e]", createdAt: new Date().toISOString() }
];
var CountriesService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CountriesService = _classThis = /** @class */ (function () {
        function CountriesService_1() {
            this.storagePath = (0, storage_path_1.resolveStoragePath)("countries.json");
            this.countries = this.loadCountries();
        }
        CountriesService_1.prototype.list = function () {
            return this.countries;
        };
        CountriesService_1.prototype.create = function (input) {
            var _a, _b;
            var code = (((_a = input.code) === null || _a === void 0 ? void 0 : _a.trim()) || input.nameEn.slice(0, 2)).toLowerCase();
            var uniqueCode = this.ensureUniqueCode(code);
            var record = {
                id: crypto.randomUUID(),
                code: uniqueCode,
                nameAr: input.nameAr.trim(),
                nameEn: input.nameEn.trim(),
                flag: input.flag.trim(),
                visaType: input.visaType.trim(),
                accent: ((_b = input.accent) === null || _b === void 0 ? void 0 : _b.trim()) || defaultAccent,
                createdAt: new Date().toISOString(),
            };
            this.countries.unshift(record);
            this.persistCountries();
            return record;
        };
        CountriesService_1.prototype.ensureUniqueCode = function (code) {
            var candidate = code;
            var counter = 1;
            while (this.countries.some(function (country) { return country.code === candidate; })) {
                candidate = "".concat(code).concat(counter);
                counter += 1;
            }
            return candidate;
        };
        CountriesService_1.prototype.loadCountries = function () {
            if (!(0, node_fs_1.existsSync)(this.storagePath)) {
                this.persistRaw(defaultCountries);
                return __spreadArray([], defaultCountries, true);
            }
            try {
                var raw = (0, node_fs_1.readFileSync)(this.storagePath, "utf8");
                var parsed = JSON.parse(raw);
                if (parsed.length) {
                    return parsed;
                }
            }
            catch (_a) { }
            this.persistRaw(defaultCountries);
            return __spreadArray([], defaultCountries, true);
        };
        CountriesService_1.prototype.persistCountries = function () {
            this.persistRaw(this.countries);
        };
        CountriesService_1.prototype.persistRaw = function (payload) {
            (0, node_fs_1.mkdirSync)((0, node_path_1.dirname)(this.storagePath), { recursive: true });
            (0, node_fs_1.writeFileSync)(this.storagePath, JSON.stringify(payload, null, 2), "utf8");
        };
        return CountriesService_1;
    }());
    __setFunctionName(_classThis, "CountriesService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CountriesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CountriesService = _classThis;
}();
exports.CountriesService = CountriesService;
