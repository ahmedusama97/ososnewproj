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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisaRequestDto = exports.VisaApplicantDto = exports.RequestContextDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var RequestContextDto = function () {
    var _a;
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    var _userAgent_decorators;
    var _userAgent_initializers = [];
    var _userAgent_extraInitializers = [];
    var _deviceType_decorators;
    var _deviceType_initializers = [];
    var _deviceType_extraInitializers = [];
    var _browser_decorators;
    var _browser_initializers = [];
    var _browser_extraInitializers = [];
    var _operatingSystem_decorators;
    var _operatingSystem_initializers = [];
    var _operatingSystem_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RequestContextDto() {
                this.channel = __runInitializers(this, _channel_initializers, void 0);
                this.userAgent = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _userAgent_initializers, void 0));
                this.deviceType = (__runInitializers(this, _userAgent_extraInitializers), __runInitializers(this, _deviceType_initializers, void 0));
                this.browser = (__runInitializers(this, _deviceType_extraInitializers), __runInitializers(this, _browser_initializers, void 0));
                this.operatingSystem = (__runInitializers(this, _browser_extraInitializers), __runInitializers(this, _operatingSystem_initializers, void 0));
                __runInitializers(this, _operatingSystem_extraInitializers);
            }
            return RequestContextDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _channel_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _userAgent_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _deviceType_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _browser_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _operatingSystem_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
            __esDecorate(null, null, _userAgent_decorators, { kind: "field", name: "userAgent", static: false, private: false, access: { has: function (obj) { return "userAgent" in obj; }, get: function (obj) { return obj.userAgent; }, set: function (obj, value) { obj.userAgent = value; } }, metadata: _metadata }, _userAgent_initializers, _userAgent_extraInitializers);
            __esDecorate(null, null, _deviceType_decorators, { kind: "field", name: "deviceType", static: false, private: false, access: { has: function (obj) { return "deviceType" in obj; }, get: function (obj) { return obj.deviceType; }, set: function (obj, value) { obj.deviceType = value; } }, metadata: _metadata }, _deviceType_initializers, _deviceType_extraInitializers);
            __esDecorate(null, null, _browser_decorators, { kind: "field", name: "browser", static: false, private: false, access: { has: function (obj) { return "browser" in obj; }, get: function (obj) { return obj.browser; }, set: function (obj, value) { obj.browser = value; } }, metadata: _metadata }, _browser_initializers, _browser_extraInitializers);
            __esDecorate(null, null, _operatingSystem_decorators, { kind: "field", name: "operatingSystem", static: false, private: false, access: { has: function (obj) { return "operatingSystem" in obj; }, get: function (obj) { return obj.operatingSystem; }, set: function (obj, value) { obj.operatingSystem = value; } }, metadata: _metadata }, _operatingSystem_initializers, _operatingSystem_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RequestContextDto = RequestContextDto;
var VisaApplicantDto = function () {
    var _a;
    var _fullName_decorators;
    var _fullName_initializers = [];
    var _fullName_extraInitializers = [];
    var _nationality_decorators;
    var _nationality_initializers = [];
    var _nationality_extraInitializers = [];
    var _passportNumber_decorators;
    var _passportNumber_initializers = [];
    var _passportNumber_extraInitializers = [];
    var _issuingCountry_decorators;
    var _issuingCountry_initializers = [];
    var _issuingCountry_extraInitializers = [];
    var _passportIssueDate_decorators;
    var _passportIssueDate_initializers = [];
    var _passportIssueDate_extraInitializers = [];
    var _passportExpiryDate_decorators;
    var _passportExpiryDate_initializers = [];
    var _passportExpiryDate_extraInitializers = [];
    var _passportDocumentName_decorators;
    var _passportDocumentName_initializers = [];
    var _passportDocumentName_extraInitializers = [];
    var _personalPhotoName_decorators;
    var _personalPhotoName_initializers = [];
    var _personalPhotoName_extraInitializers = [];
    return _a = /** @class */ (function () {
            function VisaApplicantDto() {
                this.fullName = __runInitializers(this, _fullName_initializers, void 0);
                this.nationality = (__runInitializers(this, _fullName_extraInitializers), __runInitializers(this, _nationality_initializers, void 0));
                this.passportNumber = (__runInitializers(this, _nationality_extraInitializers), __runInitializers(this, _passportNumber_initializers, void 0));
                this.issuingCountry = (__runInitializers(this, _passportNumber_extraInitializers), __runInitializers(this, _issuingCountry_initializers, void 0));
                this.passportIssueDate = (__runInitializers(this, _issuingCountry_extraInitializers), __runInitializers(this, _passportIssueDate_initializers, void 0));
                this.passportExpiryDate = (__runInitializers(this, _passportIssueDate_extraInitializers), __runInitializers(this, _passportExpiryDate_initializers, void 0));
                this.passportDocumentName = (__runInitializers(this, _passportExpiryDate_extraInitializers), __runInitializers(this, _passportDocumentName_initializers, void 0));
                this.personalPhotoName = (__runInitializers(this, _passportDocumentName_extraInitializers), __runInitializers(this, _personalPhotoName_initializers, void 0));
                __runInitializers(this, _personalPhotoName_extraInitializers);
            }
            return VisaApplicantDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fullName_decorators = [(0, class_validator_1.IsString)()];
            _nationality_decorators = [(0, class_validator_1.IsString)()];
            _passportNumber_decorators = [(0, class_validator_1.IsString)()];
            _issuingCountry_decorators = [(0, class_validator_1.IsString)()];
            _passportIssueDate_decorators = [(0, class_validator_1.IsString)()];
            _passportExpiryDate_decorators = [(0, class_validator_1.IsString)()];
            _passportDocumentName_decorators = [(0, class_validator_1.IsString)()];
            _personalPhotoName_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _fullName_decorators, { kind: "field", name: "fullName", static: false, private: false, access: { has: function (obj) { return "fullName" in obj; }, get: function (obj) { return obj.fullName; }, set: function (obj, value) { obj.fullName = value; } }, metadata: _metadata }, _fullName_initializers, _fullName_extraInitializers);
            __esDecorate(null, null, _nationality_decorators, { kind: "field", name: "nationality", static: false, private: false, access: { has: function (obj) { return "nationality" in obj; }, get: function (obj) { return obj.nationality; }, set: function (obj, value) { obj.nationality = value; } }, metadata: _metadata }, _nationality_initializers, _nationality_extraInitializers);
            __esDecorate(null, null, _passportNumber_decorators, { kind: "field", name: "passportNumber", static: false, private: false, access: { has: function (obj) { return "passportNumber" in obj; }, get: function (obj) { return obj.passportNumber; }, set: function (obj, value) { obj.passportNumber = value; } }, metadata: _metadata }, _passportNumber_initializers, _passportNumber_extraInitializers);
            __esDecorate(null, null, _issuingCountry_decorators, { kind: "field", name: "issuingCountry", static: false, private: false, access: { has: function (obj) { return "issuingCountry" in obj; }, get: function (obj) { return obj.issuingCountry; }, set: function (obj, value) { obj.issuingCountry = value; } }, metadata: _metadata }, _issuingCountry_initializers, _issuingCountry_extraInitializers);
            __esDecorate(null, null, _passportIssueDate_decorators, { kind: "field", name: "passportIssueDate", static: false, private: false, access: { has: function (obj) { return "passportIssueDate" in obj; }, get: function (obj) { return obj.passportIssueDate; }, set: function (obj, value) { obj.passportIssueDate = value; } }, metadata: _metadata }, _passportIssueDate_initializers, _passportIssueDate_extraInitializers);
            __esDecorate(null, null, _passportExpiryDate_decorators, { kind: "field", name: "passportExpiryDate", static: false, private: false, access: { has: function (obj) { return "passportExpiryDate" in obj; }, get: function (obj) { return obj.passportExpiryDate; }, set: function (obj, value) { obj.passportExpiryDate = value; } }, metadata: _metadata }, _passportExpiryDate_initializers, _passportExpiryDate_extraInitializers);
            __esDecorate(null, null, _passportDocumentName_decorators, { kind: "field", name: "passportDocumentName", static: false, private: false, access: { has: function (obj) { return "passportDocumentName" in obj; }, get: function (obj) { return obj.passportDocumentName; }, set: function (obj, value) { obj.passportDocumentName = value; } }, metadata: _metadata }, _passportDocumentName_initializers, _passportDocumentName_extraInitializers);
            __esDecorate(null, null, _personalPhotoName_decorators, { kind: "field", name: "personalPhotoName", static: false, private: false, access: { has: function (obj) { return "personalPhotoName" in obj; }, get: function (obj) { return obj.personalPhotoName; }, set: function (obj, value) { obj.personalPhotoName = value; } }, metadata: _metadata }, _personalPhotoName_initializers, _personalPhotoName_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.VisaApplicantDto = VisaApplicantDto;
var CreateVisaRequestDto = function () {
    var _a;
    var _fullName_decorators;
    var _fullName_initializers = [];
    var _fullName_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _passportNumber_decorators;
    var _passportNumber_initializers = [];
    var _passportNumber_extraInitializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _visaType_decorators;
    var _visaType_initializers = [];
    var _visaType_extraInitializers = [];
    var _issuingCountry_decorators;
    var _issuingCountry_initializers = [];
    var _issuingCountry_extraInitializers = [];
    var _passportExpiryDate_decorators;
    var _passportExpiryDate_initializers = [];
    var _passportExpiryDate_extraInitializers = [];
    var _passportDocumentName_decorators;
    var _passportDocumentName_initializers = [];
    var _passportDocumentName_extraInitializers = [];
    var _personalPhotoName_decorators;
    var _personalPhotoName_initializers = [];
    var _personalPhotoName_extraInitializers = [];
    var _travelDate_decorators;
    var _travelDate_initializers = [];
    var _travelDate_extraInitializers = [];
    var _applicants_decorators;
    var _applicants_initializers = [];
    var _applicants_extraInitializers = [];
    var _requestContext_decorators;
    var _requestContext_initializers = [];
    var _requestContext_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateVisaRequestDto() {
                this.fullName = __runInitializers(this, _fullName_initializers, void 0);
                this.email = (__runInitializers(this, _fullName_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
                this.passportNumber = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _passportNumber_initializers, void 0));
                this.country = (__runInitializers(this, _passportNumber_extraInitializers), __runInitializers(this, _country_initializers, void 0));
                this.visaType = (__runInitializers(this, _country_extraInitializers), __runInitializers(this, _visaType_initializers, void 0));
                this.issuingCountry = (__runInitializers(this, _visaType_extraInitializers), __runInitializers(this, _issuingCountry_initializers, void 0));
                this.passportExpiryDate = (__runInitializers(this, _issuingCountry_extraInitializers), __runInitializers(this, _passportExpiryDate_initializers, void 0));
                this.passportDocumentName = (__runInitializers(this, _passportExpiryDate_extraInitializers), __runInitializers(this, _passportDocumentName_initializers, void 0));
                this.personalPhotoName = (__runInitializers(this, _passportDocumentName_extraInitializers), __runInitializers(this, _personalPhotoName_initializers, void 0));
                this.travelDate = (__runInitializers(this, _personalPhotoName_extraInitializers), __runInitializers(this, _travelDate_initializers, void 0));
                this.applicants = (__runInitializers(this, _travelDate_extraInitializers), __runInitializers(this, _applicants_initializers, void 0));
                this.requestContext = (__runInitializers(this, _applicants_extraInitializers), __runInitializers(this, _requestContext_initializers, void 0));
                this.status = (__runInitializers(this, _requestContext_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                __runInitializers(this, _status_extraInitializers);
            }
            return CreateVisaRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fullName_decorators = [(0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsEmail)()];
            _phone_decorators = [(0, class_validator_1.IsString)()];
            _passportNumber_decorators = [(0, class_validator_1.IsString)()];
            _country_decorators = [(0, class_validator_1.IsString)()];
            _visaType_decorators = [(0, class_validator_1.IsString)()];
            _issuingCountry_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _passportExpiryDate_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _passportDocumentName_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _personalPhotoName_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _travelDate_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _applicants_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ArrayMaxSize)(100), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return VisaApplicantDto; })];
            _requestContext_decorators = [(0, class_validator_1.IsOptional)()];
            _status_decorators = [(0, class_validator_1.IsIn)(["draft", "submitted", "in_review", "issued", "rejected"])];
            __esDecorate(null, null, _fullName_decorators, { kind: "field", name: "fullName", static: false, private: false, access: { has: function (obj) { return "fullName" in obj; }, get: function (obj) { return obj.fullName; }, set: function (obj, value) { obj.fullName = value; } }, metadata: _metadata }, _fullName_initializers, _fullName_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _passportNumber_decorators, { kind: "field", name: "passportNumber", static: false, private: false, access: { has: function (obj) { return "passportNumber" in obj; }, get: function (obj) { return obj.passportNumber; }, set: function (obj, value) { obj.passportNumber = value; } }, metadata: _metadata }, _passportNumber_initializers, _passportNumber_extraInitializers);
            __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
            __esDecorate(null, null, _visaType_decorators, { kind: "field", name: "visaType", static: false, private: false, access: { has: function (obj) { return "visaType" in obj; }, get: function (obj) { return obj.visaType; }, set: function (obj, value) { obj.visaType = value; } }, metadata: _metadata }, _visaType_initializers, _visaType_extraInitializers);
            __esDecorate(null, null, _issuingCountry_decorators, { kind: "field", name: "issuingCountry", static: false, private: false, access: { has: function (obj) { return "issuingCountry" in obj; }, get: function (obj) { return obj.issuingCountry; }, set: function (obj, value) { obj.issuingCountry = value; } }, metadata: _metadata }, _issuingCountry_initializers, _issuingCountry_extraInitializers);
            __esDecorate(null, null, _passportExpiryDate_decorators, { kind: "field", name: "passportExpiryDate", static: false, private: false, access: { has: function (obj) { return "passportExpiryDate" in obj; }, get: function (obj) { return obj.passportExpiryDate; }, set: function (obj, value) { obj.passportExpiryDate = value; } }, metadata: _metadata }, _passportExpiryDate_initializers, _passportExpiryDate_extraInitializers);
            __esDecorate(null, null, _passportDocumentName_decorators, { kind: "field", name: "passportDocumentName", static: false, private: false, access: { has: function (obj) { return "passportDocumentName" in obj; }, get: function (obj) { return obj.passportDocumentName; }, set: function (obj, value) { obj.passportDocumentName = value; } }, metadata: _metadata }, _passportDocumentName_initializers, _passportDocumentName_extraInitializers);
            __esDecorate(null, null, _personalPhotoName_decorators, { kind: "field", name: "personalPhotoName", static: false, private: false, access: { has: function (obj) { return "personalPhotoName" in obj; }, get: function (obj) { return obj.personalPhotoName; }, set: function (obj, value) { obj.personalPhotoName = value; } }, metadata: _metadata }, _personalPhotoName_initializers, _personalPhotoName_extraInitializers);
            __esDecorate(null, null, _travelDate_decorators, { kind: "field", name: "travelDate", static: false, private: false, access: { has: function (obj) { return "travelDate" in obj; }, get: function (obj) { return obj.travelDate; }, set: function (obj, value) { obj.travelDate = value; } }, metadata: _metadata }, _travelDate_initializers, _travelDate_extraInitializers);
            __esDecorate(null, null, _applicants_decorators, { kind: "field", name: "applicants", static: false, private: false, access: { has: function (obj) { return "applicants" in obj; }, get: function (obj) { return obj.applicants; }, set: function (obj, value) { obj.applicants = value; } }, metadata: _metadata }, _applicants_initializers, _applicants_extraInitializers);
            __esDecorate(null, null, _requestContext_decorators, { kind: "field", name: "requestContext", static: false, private: false, access: { has: function (obj) { return "requestContext" in obj; }, get: function (obj) { return obj.requestContext; }, set: function (obj, value) { obj.requestContext = value; } }, metadata: _metadata }, _requestContext_initializers, _requestContext_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateVisaRequestDto = CreateVisaRequestDto;
