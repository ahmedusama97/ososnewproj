"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.VisaRequestsService = void 0;
var common_1 = require("@nestjs/common");
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var storage_path_1 = require("../../shared/storage-path");
var VisaRequestsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var VisaRequestsService = _classThis = /** @class */ (function () {
        function VisaRequestsService_1() {
            this.storagePath = (0, storage_path_1.resolveStoragePath)("visa-requests.json");
            this.requests = this.loadRequests();
        }
        VisaRequestsService_1.prototype.list = function () {
            return this.requests;
        };
        VisaRequestsService_1.prototype.create = function (dto, incomingContext) {
            var _a, _b, _c, _d, _e, _f, _g;
            var requestContext = this.buildRequestContext(incomingContext);
            var applicants = this.normalizeApplicants(dto.applicants);
            var primaryApplicant = applicants[0];
            var record = __assign(__assign({}, dto), { applicants: applicants, fullName: (_a = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.fullName) !== null && _a !== void 0 ? _a : dto.fullName, passportNumber: (_b = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.passportNumber) !== null && _b !== void 0 ? _b : dto.passportNumber, issuingCountry: (_c = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.issuingCountry) !== null && _c !== void 0 ? _c : dto.issuingCountry, passportExpiryDate: (_d = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.passportExpiryDate) !== null && _d !== void 0 ? _d : dto.passportExpiryDate, passportDocumentName: (_e = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.passportDocumentName) !== null && _e !== void 0 ? _e : dto.passportDocumentName, personalPhotoName: (_f = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.personalPhotoName) !== null && _f !== void 0 ? _f : dto.personalPhotoName, travelDate: (_g = primaryApplicant === null || primaryApplicant === void 0 ? void 0 : primaryApplicant.passportIssueDate) !== null && _g !== void 0 ? _g : dto.travelDate, requestContext: requestContext, id: crypto.randomUUID(), referenceCode: "VF-".concat(new Date().toISOString().slice(0, 10).replaceAll("-", ""), "-").concat(Math.floor(1000 + Math.random() * 9000)), createdAt: new Date().toISOString(), statusHistory: [
                    {
                        fromStatus: null,
                        toStatus: dto.status,
                        note: "Request created",
                        createdAt: new Date().toISOString(),
                    },
                ] });
            this.requests.unshift(record);
            this.persistRequests();
            return record;
        };
        VisaRequestsService_1.prototype.updateStatus = function (referenceCode, status, note) {
            var target = this.requests.find(function (request) { return request.referenceCode === referenceCode; });
            if (!target) {
                return null;
            }
            var previousStatus = target.status;
            target.status = status;
            target.statusHistory.unshift({
                fromStatus: previousStatus,
                toStatus: status,
                note: note,
                createdAt: new Date().toISOString(),
            });
            this.persistRequests();
            return target;
        };
        VisaRequestsService_1.prototype.loadRequests = function () {
            if (!(0, node_fs_1.existsSync)(this.storagePath)) {
                return [];
            }
            try {
                var raw = (0, node_fs_1.readFileSync)(this.storagePath, "utf8");
                return JSON.parse(raw);
            }
            catch (_a) {
                return [];
            }
        };
        VisaRequestsService_1.prototype.persistRequests = function () {
            (0, node_fs_1.mkdirSync)((0, node_path_1.dirname)(this.storagePath), { recursive: true });
            (0, node_fs_1.writeFileSync)(this.storagePath, JSON.stringify(this.requests, null, 2), "utf8");
        };
        VisaRequestsService_1.prototype.buildRequestContext = function (context) {
            var _a, _b, _c;
            var userAgent = (_b = (_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
            var normalizedAgent = userAgent.toLowerCase();
            var browser = normalizedAgent.includes("edg/")
                ? "Microsoft Edge"
                : normalizedAgent.includes("samsungbrowser/")
                    ? "Samsung Internet"
                    : normalizedAgent.includes("opr/") || normalizedAgent.includes("opera")
                        ? "Opera"
                        : normalizedAgent.includes("firefox/")
                            ? "Firefox"
                            : normalizedAgent.includes("chrome/")
                                ? "Chrome"
                                : normalizedAgent.includes("safari/")
                                    ? "Safari"
                                    : "Unknown";
            var operatingSystem = normalizedAgent.includes("android")
                ? "Android"
                : normalizedAgent.includes("iphone") || normalizedAgent.includes("ipad") || normalizedAgent.includes("ios")
                    ? "iOS"
                    : normalizedAgent.includes("windows")
                        ? "Windows"
                        : normalizedAgent.includes("mac os x") || normalizedAgent.includes("macintosh")
                            ? "macOS"
                            : normalizedAgent.includes("linux")
                                ? "Linux"
                                : "Unknown";
            var deviceType = normalizedAgent.includes("ipad") || normalizedAgent.includes("tablet")
                ? "tablet"
                : normalizedAgent.includes("mobi") || normalizedAgent.includes("android") || normalizedAgent.includes("iphone")
                    ? "mobile"
                    : "desktop";
            return {
                channel: ((_c = context === null || context === void 0 ? void 0 : context.channel) === null || _c === void 0 ? void 0 : _c.trim()) || "web",
                userAgent: userAgent || "Unknown",
                browser: browser,
                operatingSystem: operatingSystem,
                deviceType: deviceType,
            };
        };
        VisaRequestsService_1.prototype.normalizeApplicants = function (applicants) {
            return applicants.map(function (applicant) { return (__assign(__assign({}, applicant), { fullName: applicant.fullName.trim(), nationality: applicant.nationality.trim(), passportNumber: applicant.passportNumber.trim(), issuingCountry: applicant.issuingCountry.trim(), passportIssueDate: applicant.passportIssueDate.trim(), passportExpiryDate: applicant.passportExpiryDate.trim(), passportDocumentName: applicant.passportDocumentName.trim(), personalPhotoName: applicant.personalPhotoName.trim() })); });
        };
        return VisaRequestsService_1;
    }());
    __setFunctionName(_classThis, "VisaRequestsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VisaRequestsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VisaRequestsService = _classThis;
}();
exports.VisaRequestsService = VisaRequestsService;
