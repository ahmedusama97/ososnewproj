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
exports.AdminRequestsController = void 0;
var common_1 = require("@nestjs/common");
var class_validator_1 = require("class-validator");
var UpdateStatusDto = function () {
    var _a;
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateStatusDto() {
                this.status = __runInitializers(this, _status_initializers, void 0);
                this.note = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _note_initializers, void 0));
                __runInitializers(this, _note_extraInitializers);
            }
            return UpdateStatusDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _status_decorators = [(0, class_validator_1.IsIn)(["draft", "submitted", "in_review", "issued", "rejected"])];
            _note_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var CreateCountryDto = function () {
    var _a;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _nameAr_decorators;
    var _nameAr_initializers = [];
    var _nameAr_extraInitializers = [];
    var _nameEn_decorators;
    var _nameEn_initializers = [];
    var _nameEn_extraInitializers = [];
    var _flag_decorators;
    var _flag_initializers = [];
    var _flag_extraInitializers = [];
    var _visaType_decorators;
    var _visaType_initializers = [];
    var _visaType_extraInitializers = [];
    var _accent_decorators;
    var _accent_initializers = [];
    var _accent_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateCountryDto() {
                this.code = __runInitializers(this, _code_initializers, void 0);
                this.nameAr = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _nameAr_initializers, void 0));
                this.nameEn = (__runInitializers(this, _nameAr_extraInitializers), __runInitializers(this, _nameEn_initializers, void 0));
                this.flag = (__runInitializers(this, _nameEn_extraInitializers), __runInitializers(this, _flag_initializers, void 0));
                this.visaType = (__runInitializers(this, _flag_extraInitializers), __runInitializers(this, _visaType_initializers, void 0));
                this.accent = (__runInitializers(this, _visaType_extraInitializers), __runInitializers(this, _accent_initializers, void 0));
                __runInitializers(this, _accent_extraInitializers);
            }
            return CreateCountryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _nameAr_decorators = [(0, class_validator_1.IsString)()];
            _nameEn_decorators = [(0, class_validator_1.IsString)()];
            _flag_decorators = [(0, class_validator_1.IsString)()];
            _visaType_decorators = [(0, class_validator_1.IsString)()];
            _accent_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _nameAr_decorators, { kind: "field", name: "nameAr", static: false, private: false, access: { has: function (obj) { return "nameAr" in obj; }, get: function (obj) { return obj.nameAr; }, set: function (obj, value) { obj.nameAr = value; } }, metadata: _metadata }, _nameAr_initializers, _nameAr_extraInitializers);
            __esDecorate(null, null, _nameEn_decorators, { kind: "field", name: "nameEn", static: false, private: false, access: { has: function (obj) { return "nameEn" in obj; }, get: function (obj) { return obj.nameEn; }, set: function (obj, value) { obj.nameEn = value; } }, metadata: _metadata }, _nameEn_initializers, _nameEn_extraInitializers);
            __esDecorate(null, null, _flag_decorators, { kind: "field", name: "flag", static: false, private: false, access: { has: function (obj) { return "flag" in obj; }, get: function (obj) { return obj.flag; }, set: function (obj, value) { obj.flag = value; } }, metadata: _metadata }, _flag_initializers, _flag_extraInitializers);
            __esDecorate(null, null, _visaType_decorators, { kind: "field", name: "visaType", static: false, private: false, access: { has: function (obj) { return "visaType" in obj; }, get: function (obj) { return obj.visaType; }, set: function (obj, value) { obj.visaType = value; } }, metadata: _metadata }, _visaType_initializers, _visaType_extraInitializers);
            __esDecorate(null, null, _accent_decorators, { kind: "field", name: "accent", static: false, private: false, access: { has: function (obj) { return "accent" in obj; }, get: function (obj) { return obj.accent; }, set: function (obj, value) { obj.accent = value; } }, metadata: _metadata }, _accent_initializers, _accent_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var AdminRequestsController = function () {
    var _classDecorators = [(0, common_1.Controller)("admin")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _listRequests_decorators;
    var _updateStatus_decorators;
    var _listCountries_decorators;
    var _createCountry_decorators;
    var AdminRequestsController = _classThis = /** @class */ (function () {
        function AdminRequestsController_1(visaRequestsService, countriesService, authService) {
            this.visaRequestsService = (__runInitializers(this, _instanceExtraInitializers), visaRequestsService);
            this.countriesService = countriesService;
            this.authService = authService;
        }
        AdminRequestsController_1.prototype.listRequests = function (authorization) {
            this.authService.assertAuthorized(authorization);
            return this.visaRequestsService.list();
        };
        AdminRequestsController_1.prototype.updateStatus = function (referenceCode, dto, authorization) {
            this.authService.assertAuthorized(authorization);
            var updated = this.visaRequestsService.updateStatus(referenceCode, dto.status, dto.note);
            if (!updated) {
                throw new common_1.NotFoundException("Request not found.");
            }
            return updated;
        };
        AdminRequestsController_1.prototype.listCountries = function (authorization) {
            this.authService.assertAuthorized(authorization);
            return this.countriesService.list();
        };
        AdminRequestsController_1.prototype.createCountry = function (dto, authorization) {
            this.authService.assertAuthorized(authorization);
            return this.countriesService.create(dto);
        };
        return AdminRequestsController_1;
    }());
    __setFunctionName(_classThis, "AdminRequestsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _listRequests_decorators = [(0, common_1.Get)("requests")];
        _updateStatus_decorators = [(0, common_1.Patch)("requests/:referenceCode/status")];
        _listCountries_decorators = [(0, common_1.Get)("countries")];
        _createCountry_decorators = [(0, common_1.Post)("countries")];
        __esDecorate(_classThis, null, _listRequests_decorators, { kind: "method", name: "listRequests", static: false, private: false, access: { has: function (obj) { return "listRequests" in obj; }, get: function (obj) { return obj.listRequests; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateStatus_decorators, { kind: "method", name: "updateStatus", static: false, private: false, access: { has: function (obj) { return "updateStatus" in obj; }, get: function (obj) { return obj.updateStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listCountries_decorators, { kind: "method", name: "listCountries", static: false, private: false, access: { has: function (obj) { return "listCountries" in obj; }, get: function (obj) { return obj.listCountries; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCountry_decorators, { kind: "method", name: "createCountry", static: false, private: false, access: { has: function (obj) { return "createCountry" in obj; }, get: function (obj) { return obj.createCountry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdminRequestsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdminRequestsController = _classThis;
}();
exports.AdminRequestsController = AdminRequestsController;
