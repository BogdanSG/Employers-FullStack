(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/main-page/main-page.component */ "./src/app/components/pages/main-page/main-page.component.ts");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_pages_treeview_page_treeview_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/treeview-page/treeview-page.component */ "./src/app/components/pages/treeview-page/treeview-page.component.ts");
/* harmony import */ var _components_pages_single_employee_page_single_employee_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/single-employee-page/single-employee-page.component */ "./src/app/components/pages/single-employee-page/single-employee-page.component.ts");
/* harmony import */ var _components_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/list-page/list-page.component */ "./src/app/components/pages/list-page/list-page.component.ts");
/* harmony import */ var _components_pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/sign-in-page/sign-in-page.component */ "./src/app/components/pages/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _components_pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/sign-up-page/sign-up-page.component */ "./src/app/components/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var _components_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/not-found-page/not-found-page.component */ "./src/app/components/pages/not-found-page/not-found-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _components_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        children: [
            { path: '404', component: _components_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundPageComponent"] },
            { path: 'home', component: _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
            { path: '', component: _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
            { path: 'treeview', component: _components_pages_treeview_page_treeview_page_component__WEBPACK_IMPORTED_MODULE_4__["TreeviewPageComponent"] },
            { path: 'list', component: _components_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_6__["ListPageComponent"] },
            { path: 'single-employee/:id', component: _components_pages_single_employee_page_single_employee_page_component__WEBPACK_IMPORTED_MODULE_5__["SingleEmployeePageComponent"] },
            { path: 'sign-in', component: _components_pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_7__["SignInPageComponent"] },
            { path: 'sign-up', component: _components_pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_8__["SignUpPageComponent"] },
            { path: 'single-employee/:id', component: _components_pages_single_employee_page_single_employee_page_component__WEBPACK_IMPORTED_MODULE_5__["SingleEmployeePageComponent"] },
            { path: '**', redirectTo: '/404' }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    } //constructor
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}()); //AppComponent



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/main-page/main-page.component */ "./src/app/components/pages/main-page/main-page.component.ts");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/header/header.component */ "./src/app/components/main/header/header.component.ts");
/* harmony import */ var _components_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/footer/footer.component */ "./src/app/components/main/footer/footer.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_pages_treeview_page_treeview_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/treeview-page/treeview-page.component */ "./src/app/components/pages/treeview-page/treeview-page.component.ts");
/* harmony import */ var _components_main_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/treeview/treeview.component */ "./src/app/components/main/treeview/treeview.component.ts");
/* harmony import */ var _components_main_single_employee_single_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/single-employee/single-employee.component */ "./src/app/components/main/single-employee/single-employee.component.ts");
/* harmony import */ var _components_pages_single_employee_page_single_employee_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/single-employee-page/single-employee-page.component */ "./src/app/components/pages/single-employee-page/single-employee-page.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _components_main_list_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main/list/list.component */ "./src/app/components/main/list/list.component.ts");
/* harmony import */ var _components_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/list-page/list-page.component */ "./src/app/components/pages/list-page/list-page.component.ts");
/* harmony import */ var _components_main_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main/sign-in/sign-in.component */ "./src/app/components/main/sign-in/sign-in.component.ts");
/* harmony import */ var _components_main_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main/sign-up/sign-up.component */ "./src/app/components/main/sign-up/sign-up.component.ts");
/* harmony import */ var _components_pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/sign-up-page/sign-up-page.component */ "./src/app/components/pages/sign-up-page/sign-up-page.component.ts");
/* harmony import */ var _components_pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/sign-in-page/sign-in-page.component */ "./src/app/components/pages/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/regex-helper.service */ "./src/app/services/regex-helper.service.ts");
/* harmony import */ var _components_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/not-found-page/not-found-page.component */ "./src/app/components/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/photo-helper.service */ "./src/app/services/photo-helper.service.ts");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _components_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_pages_treeview_page_treeview_page_component__WEBPACK_IMPORTED_MODULE_10__["TreeviewPageComponent"],
                _components_main_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_11__["TreeviewComponent"],
                _components_main_single_employee_single_employee_component__WEBPACK_IMPORTED_MODULE_12__["SingleEmployeeComponent"],
                _components_pages_single_employee_page_single_employee_page_component__WEBPACK_IMPORTED_MODULE_13__["SingleEmployeePageComponent"],
                _components_main_list_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"],
                _components_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_16__["ListPageComponent"],
                _components_main_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
                _components_main_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                _components_pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_19__["SignUpPageComponent"],
                _components_pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_20__["SignInPageComponent"],
                _components_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"].forRoot()
            ],
            providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"], _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_23__["RegexHelperService"], _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_25__["PhotoHelperService"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_26__["MainMarginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/main/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/main/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-footer\" style=\"margin-left: 10px;\">\n    <span class=\"text-muted\">{{FooterTitle}}</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/main/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/main/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    } //constructor
    FooterComponent.prototype.ngOnInit = function () {
    }; //OnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FooterComponent.prototype, "FooterTitle", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/main/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/main/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}()); //FooterComponent



/***/ }),

/***/ "./src/app/components/main/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/main/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/main/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Fixed navbar -->\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/treeview\">TreeView <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/list\">List</a>\n        </li>\n      </ul>\n      <form class=\"form-inline mt-2 mt-md-0\">\n        <div *ngIf=\"!isAuthorized\">\n          <a class=\"btn btn-outline-success my-2 my-sm-0\" routerLink=\"/sign-in\">Sign in</a>\n          <a class=\"btn btn-outline-warning my-2 my-sm-0\" style=\"margin-left: 10px\" routerLink=\"/sign-up\">Sign up</a>\n        </div>\n        <div *ngIf=\"isAuthorized\">\n          <div class=\"my-2 my-sm-0 navbar-text\" style=\"color: #eff3f3\">Hello, {{UserName}}</div>\n          <button class=\"btn btn-outline-danger my-2 my-sm-0\" style=\"margin-left: 10px\" (click)=\"onLogOutClick()\">Log out</button>\n        </div>\n      </form>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/main/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/main/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(AuthenticationService) {
        this.AuthenticationService = AuthenticationService;
        var user = this.AuthenticationService.isAuthorized();
        if (user) {
            this.UserName = user;
            this.isAuthorized = true;
        } //if
        else {
            this.UserName = '';
            this.isAuthorized = false;
        } //else
        this.AuthenticationService.onLogOut('HeaderComponent', this.onLogOut.bind(this));
        this.AuthenticationService.onSignIn('HeaderComponent', this.onSignIn.bind(this));
    } //constructor
    HeaderComponent.prototype.onSignIn = function (UserName) {
        this.UserName = UserName;
        this.isAuthorized = true;
    }; //onSignIn
    HeaderComponent.prototype.onLogOut = function () {
        this.UserName = '';
        this.isAuthorized = false;
    }; //onLogOut
    HeaderComponent.prototype.onLogOutClick = function () {
        this.AuthenticationService.logOut();
    }; //onLogOut
    HeaderComponent.prototype.ngOnInit = function () {
    }; //OnInit
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/main/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/main/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}()); //HeaderComponent



/***/ }),

/***/ "./src/app/components/main/list/list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/main/list/list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/list/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/main/list/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuthorized\">\n  <div style=\"margin-left: 10px; margin-bottom: 70px;\">\n    <div class=\"row\">\n      <div class=\"col-md-12 order-md-1\">\n        <h4 class=\"mb-3\">Settings</h4>\n        <div>\n\n          <div class=\"row\">\n            <div class=\"col-md-1 mb-3\">\n              <label>Limit: </label>\n              <select class=\"form-control\" (change)=\"onLimitChange($event)\">\n                <option>10</option>\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n              </select>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>Order By</label>\n              <select class=\"form-control\" (change)=\"onOrderByChange($event)\">\n                <option *ngFor=\"let sort of SortArray\">{{sort}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-2 mb-3\">\n              <label>Sort</label>\n              <select class=\"form-control\" (change)=\"onSortChange($event)\">\n                <option>Asc</option>\n                <option>Desc</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-3 mb-3\">\n              <label>Serch By</label>\n              <select class=\"form-control\" (change)=\"onSearchChange($event)\">\n                <option *ngFor=\"let search of SearchArray\">{{search}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>Search</label>\n              <input [(ngModel)]=\"SearchValue\" (input)=\"onSearchValueChange()\" type=\"text\" class=\"form-control\" placeholder=\"\">\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"margin-bottom: 10px\">\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"onPrevClick()\">Prev</button>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"onNextClick()\">Next</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <table *ngIf=\"employeeList.length > 0\" class=\"table table-hover table-bordered\">\n      <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Photo</th>\n        <th scope=\"col\">FirstName</th>\n        <th scope=\"col\">LastName</th>\n        <th scope=\"col\">SurName</th>\n        <th scope=\"col\">Position</th>\n        <th scope=\"col\">Has Chief</th>\n        <th scope=\"col\">Salary</th>\n        <th scope=\"col\">Employment Date</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr style=\"cursor: pointer\" *ngFor=\"let employee of employeeList\" (click)=\"onTableClick(employee.EmployeeID)\">\n        <th scope=\"row\">{{employee.EmployeeID}}</th>\n        <td><img src=\"{{getPhotoPath(employee.ImgName) ? getPhotoPath(employee.ImgName) : getDefaultPhoto()}}\" class=\"rounded mx-auto d-block\" height=\"40\"></td>\n        <td>{{employee.FirstName}}</td>\n        <td>{{employee.LastName}}</td>\n        <td>{{employee.SurName}}</td>\n        <td>{{employee.Position}}</td>\n        <td>{{employee.ChiefID ? 'True' : 'False'}}</td>\n        <td>{{employee.Salary}}</td>\n        <td>{{getNormalDate(employee.EmploymentDate)}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div *ngIf=\"!isAuthorized\">\n  <div class=\"center-content\">\n    <p class=\"big-text\">This Page For Authorized Users</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/main/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/main/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/photo-helper.service */ "./src/app/services/photo-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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






var ListComponent = /** @class */ (function () {
    function ListComponent(AuthenticationService, EmployeeService, PhotoHelperService, Router, MainMarginService) {
        this.AuthenticationService = AuthenticationService;
        this.EmployeeService = EmployeeService;
        this.PhotoHelperService = PhotoHelperService;
        this.Router = Router;
        this.MainMarginService = MainMarginService;
        this.employeeList = [];
        this.SearchArray = [
            'EmployeeID',
            'FirstName',
            'LastName',
            'SurName',
            'Salary',
        ];
        this.SortArray = [
            'EmployeeID',
            'FirstName',
            'LastName',
            'SurName',
            'Salary',
            'Position',
            'EmploymentDate',
        ];
        this.Limit = 10;
        this.Offset = 0;
        this.Sort = 'ASC';
        this.OrderBy = 'EmployeeID';
        this.Search = 'EmployeeID';
        var user = this.AuthenticationService.isAuthorized();
        if (user) {
            this.isAuthorized = true;
            this.MainMarginService.SetZeroMargin();
        } //if
        else {
            this.isAuthorized = false;
            this.MainMarginService.SetCenterMargin();
        } //else
        this.AuthenticationService.onSignIn('ListComponent', this.onSignIn.bind(this));
        this.AuthenticationService.onLogOut('ListComponent', this.onLogOut.bind(this));
    } //constructor
    ListComponent.prototype.onTableClick = function (EmployeeID) {
        if (EmployeeID) {
            this.Router.navigateByUrl("/single-employee/" + EmployeeID);
        } //if
    }; //onTableClick
    ListComponent.prototype.onPrevClick = function () {
        this.Offset -= this.Limit;
        if (this.Offset < 0) {
            this.Offset = 0;
        } //if
        else {
            this.getEmployeeList();
        } //else
    }; //onPrevClick
    ListComponent.prototype.onNextClick = function () {
        if (this.employeeList.length > 0) {
            this.Offset += this.Limit;
            this.getEmployeeList();
        } //if
    }; //onNextClick
    ListComponent.prototype.onLimitChange = function (event) {
        var limit = event.srcElement.value;
        if (+limit) {
            this.Limit = +limit;
            this.getEmployeeList();
        } //if
    }; //onLimitChange
    ListComponent.prototype.onSortChange = function (event) {
        var sort = event.srcElement.value;
        this.Offset = 0;
        if (sort) {
            this.Sort = sort.toUpperCase();
            this.getEmployeeList();
        } //if
    }; //onSortChange
    ListComponent.prototype.onSearchChange = function (event) {
        var search = event.srcElement.value;
        this.Offset = 0;
        this.SearchValue = '';
        if (search) {
            this.Search = search;
        } //if
        this.getEmployeeList();
    }; //onSearchChange
    ListComponent.prototype.onOrderByChange = function (event) {
        var orderBy = event.srcElement.value;
        this.Offset = 0;
        if (orderBy) {
            if (orderBy === 'Position') {
                orderBy += 'ID';
            } //if
            this.OrderBy = orderBy;
            this.getEmployeeList();
        } //if
    }; //onOrderByChange
    ListComponent.prototype.onSearchValueChange = function () {
        this.Offset = 0;
        this.getEmployeeList();
    }; //onSearchValueChange
    ListComponent.prototype.onSignIn = function () {
        this.isAuthorized = true;
        this.MainMarginService.SetZeroMargin();
    }; //onSignIn
    ListComponent.prototype.onLogOut = function () {
        this.isAuthorized = false;
        this.MainMarginService.SetCenterMargin();
    }; //onLogOut
    ListComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    }; //ngOnInit
    ListComponent.prototype.getData = function () {
        return {
            limit: this.Limit,
            offset: this.Offset,
            orderBy: this.OrderBy,
            sort: this.Sort,
            search: this.SearchValue ? this.Search : null,
            searchValue: this.SearchValue ? this.SearchValue.trim() : null
        };
    }; //getData
    ListComponent.prototype.getEmployeeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAuthorized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.EmployeeService.getEmployeeList(this.getData(), this.AuthenticationService.GetToken())];
                    case 1:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.employeeList = data.data;
                        } //if
                        else {
                            this.employeeList = [];
                        } //else
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }; //getEmployeeList
    ListComponent.prototype.getDefaultPhoto = function () {
        return this.PhotoHelperService.DefaultPhotoPath;
    }; //getDefaultPhoto
    ListComponent.prototype.getPhotoPath = function (imgName) {
        return this.PhotoHelperService.getPhotoPath(imgName);
    }; //getPhotoPath
    ListComponent.prototype.getNormalDate = function (date) {
        if (date) {
            date = date.replace('Z', '');
            date = date.replace('T', ' ');
            date = date.slice(0, date.lastIndexOf('.'));
            return date;
        } //if
        else {
            return null;
        } //else
    }; //getNormalDate
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/main/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/main/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_3__["PhotoHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_5__["MainMarginService"]])
    ], ListComponent);
    return ListComponent;
}()); //ListComponent



/***/ }),

/***/ "./src/app/components/main/sign-in/sign-in.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/main/sign-in/sign-in.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/sign-in/sign-in.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/main/sign-in/sign-in.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto\">\n\n  <div class=\"py-5 text-center\">\n    <img class=\"mb-4\" src=\"/img/user.png\" alt=\"\" width=\"100\" height=\"100\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <input [ngClass]=\"{ 'is-invalid': Error }\" [(ngModel)]=\"Login\" type=\"text\" class=\"form-control mb-3 offset-md-3 col-md-6\" style=\"text-align:center;\" placeholder=\"Login\" required=\"\" autofocus=\"\">\n    <input [ngClass]=\"{ 'is-invalid': Error }\" [(ngModel)]=\"Password\" type=\"password\" class=\"form-control mb-3 offset-md-3 col-md-6\" style=\"text-align:center;\" placeholder=\"Password\">\n    <button class=\"btn btn-lg btn-primary btn-block mb-3 offset-md-3 col-md-6\" (click)=\"onSingInCkick()\">Sign in</button>\n    <div *ngIf=\"Error\" class=\"mb-3 offset-md-3 col-md-6 alert alert-danger\" role=\"alert\">\n      {{Error}}\n    </div>\n    <p class=\"mt-5 mb-3 text-muted\">© 2018</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/sign-in/sign-in.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/main/sign-in/sign-in.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var SignInComponent = /** @class */ (function () {
    function SignInComponent(AuthenticationService, Location, MainMarginService) {
        this.AuthenticationService = AuthenticationService;
        this.Location = Location;
        this.MainMarginService = MainMarginService;
        var user = this.AuthenticationService.isAuthorized();
        this.MainMarginService.SetCenterMargin();
        if (user) {
            this.Location.back();
        } //if
    } //constructor
    SignInComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    SignInComponent.prototype.onSingInCkick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.Login || !this.Password) {
                            return [2 /*return*/];
                        } //if
                        return [4 /*yield*/, this.AuthenticationService.signIn({
                                username: this.Login,
                                password: this.Password
                            })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            if (data.error) {
                                this.Error = data.error;
                            } //if
                            else {
                                this.Location.back();
                            } //else
                        } //if
                        return [2 /*return*/];
                }
            });
        });
    }; //onSingInCkick
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/main/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/main/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_3__["MainMarginService"]])
    ], SignInComponent);
    return SignInComponent;
}()); //SignInComponent



/***/ }),

/***/ "./src/app/components/main/sign-up/sign-up.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/main/sign-up/sign-up.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/sign-up/sign-up.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/main/sign-up/sign-up.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto\">\n\n  <div class=\"py-5 text-center\">\n    <img class=\"mb-4\" src=\"/img/user.png\" alt=\"\" width=\"100\" height=\"100\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign up</h1>\n    <input [ngClass]=\"{ 'is-invalid': ErrorUsername }\" [(ngModel)]=\"Login\" type=\"text\" class=\"form-control mb-3 offset-md-3 col-md-6\" style=\"text-align:center;\" placeholder=\"Login\" required=\"\" autofocus=\"\">\n    <input [ngClass]=\"{ 'is-invalid': ErrorPassword }\" [(ngModel)]=\"Password\" type=\"password\" class=\"form-control mb-3 offset-md-3 col-md-6\" style=\"text-align:center;\" placeholder=\"Password\">\n    <input [ngClass]=\"{ 'is-invalid': ErrorPassword }\" [(ngModel)]=\"ConfirmPassword\" type=\"password\" class=\"form-control mb-3 offset-md-3 col-md-6\" style=\"text-align:center;\" placeholder=\"Confirm Password\">\n    <button class=\"btn btn-lg btn-primary btn-block mb-3 offset-md-3 col-md-6\" (click)=\"onSignUp()\" >Sign up</button>\n    <div *ngIf=\"ErrorPassword || ErrorUsername\" class=\"mb-3 offset-md-3 col-md-6 alert alert-danger\" role=\"alert\">\n      {{ErrorPassword ? ErrorPassword : ErrorUsername ? ErrorUsername : ''}}\n    </div>\n    <p class=\"mt-5 mb-3 text-muted\">© 2018</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/main/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/regex-helper.service */ "./src/app/services/regex-helper.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(AuthenticationService, Location, RegexHelperService, MainMarginService) {
        this.AuthenticationService = AuthenticationService;
        this.Location = Location;
        this.RegexHelperService = RegexHelperService;
        this.MainMarginService = MainMarginService;
        var user = this.AuthenticationService.isAuthorized();
        this.MainMarginService.SetCenterMargin();
        if (user) {
            this.Location.back();
        } //if
    } //constructor
    SignUpComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    SignUpComponent.prototype.onSignUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ErrorUsername = null;
                        this.ErrorPassword = null;
                        if (!this.Login || !this.Password || !this.ConfirmPassword) {
                            return [2 /*return*/];
                        } //if
                        if (!(this.Password === this.ConfirmPassword)) return [3 /*break*/, 2];
                        if (!this.RegexHelperService.IsMatch(this.Login, this.RegexHelperService.UserName)) {
                            this.ErrorUsername = 'Invalid UserName';
                            return [2 /*return*/];
                        } //if
                        else if (!this.RegexHelperService.IsMatch(this.Password, this.RegexHelperService.UserPassword)) {
                            this.ErrorPassword = 'Invalid Password';
                            return [2 /*return*/];
                        } //else if
                        return [4 /*yield*/, this.AuthenticationService.signUp({
                                username: this.Login,
                                password: this.Password
                            })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            if (data.error) {
                                this.ErrorUsername = data.error;
                            } //if
                            else {
                                this.Location.back();
                            } //else
                        } //if
                        return [3 /*break*/, 3];
                    case 2:
                        this.ErrorPassword = 'Passwords must match';
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //onSignUp
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/main/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/main/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_2__["RegexHelperService"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_4__["MainMarginService"]])
    ], SignUpComponent);
    return SignUpComponent;
}()); //SignUpComponent



/***/ }),

/***/ "./src/app/components/main/single-employee/single-employee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/main/single-employee/single-employee.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/single-employee/single-employee.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/single-employee/single-employee.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Employee && Positions\">\n  <div class=\"center-margin\">\n    <div class=\"py-5 text-center\">\n      <img class=\"d-block mx-auto mb-4\" src=\"{{ImgPath}}\" alt=\"\" width=\"420\">\n      <div *ngIf=\"Edit\" class=\"custom-file col-lg-6 col-md-9\">\n        <input id=\"employeeImage\" (change)=\"onFileChange($event)\" type=\"file\" class=\"custom-file-input\" accept=\"image/x-png,image/gif,image/jpeg\">\n        <label class=\"custom-file-label\">{{FilePath}}</label>\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"margin-bottom: 80px;\">\n      <div class=\"col-md-12 order-md-1\">\n        <h4 class=\"mb-3\">Employee Info</h4>\n        <div class=\"needs-validation\">\n\n          <div class=\"row\">\n            <div class=\"col-md-4 mb-3\">\n              <label>First name</label>\n              <input [disabled]=\"!Edit\" [ngClass]=\"{ 'is-invalid': FirstNameError }\" [(ngModel)]=\"Employee.FirstName\" type=\"text\" class=\"form-control\" placeholder=\"Ivan\">\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>Last name</label>\n              <input [disabled]=\"!Edit\" [ngClass]=\"{ 'is-invalid': LastNameError }\" [(ngModel)]=\"Employee.LastName\" type=\"text\" class=\"form-control\" placeholder=\"Ivanov\">\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>Sur name</label>\n              <input [disabled]=\"!Edit\" [ngClass]=\"{ 'is-invalid': SurNameError }\" [(ngModel)]=\"Employee.SurName\" type=\"text\" class=\"form-control\" placeholder=\"Ivanovich\">\n            </div>\n          </div>\n\n          <div *ngIf=\"isAuthorized\" class=\"row\">\n            <div class=\"col-md-8 mb-6\">\n              <label>Chief</label>\n              <div style=\"background-color: #e9ecef;\" class=\"form-control\">{{Employee.Chief.FirstName}} {{Employee.Chief.LastName}} {{Employee.Chief.SurName}}</div>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>ChiefID</label>\n              <input [disabled]=\"!Edit\" [ngClass]=\"{ 'is-invalid': ChifIDError }\" (input)=\"onChiefChange()\" [(ngModel)]=\"Employee.Chief.EmployeeID\" type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12 mb-6\">\n              <label>Position</label>\n              <div style=\"background-color: #e9ecef; text-align: center;\" class=\"form-control\">{{getPosition(Employee.PositionID) ? getPosition(Employee.PositionID).Position : ''}}</div>\n            </div>\n          </div>\n\n          <div *ngIf=\"isAuthorized\" class=\"row\" style=\"margin-top: 10px\">\n            <div class=\"col-md-8 mb-6\">\n              <label>Employment Date</label>\n              <input [disabled]=\"!Edit\" type=\"datetime-local\" [(ngModel)]=\"Employee.EmploymentDate\" class=\"form-control\" placeholder=\"\">\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label>Salary</label>\n              <input [disabled]=\"!Edit\" (change)=\"onSalaryChange($event)\" [(ngModel)]=\"Employee.Salary\" type=\"number\" min=\"{{MinSalaryValue}}\" max=\"{{MaxSalaryValue}}\" step=\"1000\" class=\"form-control\" placeholder=\"100000\">\n            </div>\n          </div>\n\n          <div *ngIf=\"isAuthorized\" class=\"row\" style=\"margin-top: 10px; margin-bottom: 30px\">\n            <div class=\"col-md-4\">\n              <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEdit()\">Edit</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button [disabled]=\"!Edit\" class=\"btn btn-warning btn-lg btn-block\" (click)=\"onUpdateClick()\">Update</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"onDelete()\">Delete</button>\n            </div>\n          </div>\n\n          <div *ngIf=\"SuccessMessage\" class=\"alert alert-success\" role=\"alert\">{{SuccessMessage}}</div>\n          <div *ngIf=\"ErrorMessage\" class=\"alert alert-danger\" role=\"alert\">{{ErrorMessage}}</div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/single-employee/single-employee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/single-employee/single-employee.component.ts ***!
  \******************************************************************************/
/*! exports provided: SingleEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmployeeComponent", function() { return SingleEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/regex-helper.service */ "./src/app/services/regex-helper.service.ts");
/* harmony import */ var _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/photo-helper.service */ "./src/app/services/photo-helper.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








var SingleEmployeeComponent = /** @class */ (function () {
    function SingleEmployeeComponent(ActivatedRoute, Router, EmployeeService, AuthenticationService, Location, RegexHelperService, PhotoHelperService, MainMarginService) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.EmployeeService = EmployeeService;
        this.AuthenticationService = AuthenticationService;
        this.Location = Location;
        this.RegexHelperService = RegexHelperService;
        this.PhotoHelperService = PhotoHelperService;
        this.MainMarginService = MainMarginService;
        this.MaxSalaryValue = 1000000000;
        this.MinSalaryValue = 1000;
        this.FilePath = 'Choose file';
        this.MainMarginService.SetCenterMargin();
        this.OldEmployee = {};
        var id = +this.ActivatedRoute.snapshot.params['id'];
        if (id) {
            this.EmployeeID = id;
        } //if
        var user = this.AuthenticationService.isAuthorized();
        if (user) {
            this.isAuthorized = true;
        } //if
        else {
            this.isAuthorized = false;
        } //else
        this.AuthenticationService.onSignIn('SingleEmployeeComponent', this.onSignIn.bind(this));
        this.AuthenticationService.onLogOut('SingleEmployeeComponent', this.onLogOut.bind(this));
    } //constructor
    SingleEmployeeComponent.prototype.onFileChange = function (event) {
        this.FilePath = event.srcElement.value;
    }; //onFileChange
    SingleEmployeeComponent.prototype.onSignIn = function () {
        this.isAuthorized = true;
        this.getFullEmployee();
    }; //onSignIn
    SingleEmployeeComponent.prototype.onLogOut = function () {
        this.isAuthorized = false;
        this.Edit = false;
        this.getShortEmployee();
    }; //onLogOut
    SingleEmployeeComponent.prototype.onEdit = function () {
        this.ErrorMessage = null;
        this.FirstNameError = false;
        this.LastNameError = false;
        this.SurNameError = false;
        if (this.Employee) {
            if (this.Edit) {
                this.Employee = Object.assign({}, this.OldEmployee);
                if (this.ChifIDError || !this.OldEmployee.Chief.EmployeeID) {
                    this.clearChief();
                    this.ChifIDError = false;
                } //if
            } //if
            else {
                this.OldEmployee = Object.assign({}, this.Employee);
                this.OldEmployee.Chief = Object.assign({}, this.Employee.Chief);
            } //else
            this.Edit = !this.Edit;
        } //if
    }; //onEdit
    SingleEmployeeComponent.prototype.onDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAuthorized) return [3 /*break*/, 2];
                        result = confirm('Are you sure you want to delete an employee?');
                        if (!result) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.EmployeeService.employeeDelete(this.EmployeeID, this.AuthenticationService.GetToken())];
                    case 1:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.Location.back();
                        } //if
                        else {
                            this.ErrorMessage = data.message;
                        } //else
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }; //onDelete
    SingleEmployeeComponent.prototype.onUpdateClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, FileImput, formData, file, data, NewFileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ErrorMessage = null;
                        this.FirstNameError = false;
                        this.LastNameError = false;
                        this.SurNameError = false;
                        if (!this.isAuthorized) return [3 /*break*/, 2];
                        result = confirm('Are you sure you want to update an employee?');
                        if (!result) return [3 /*break*/, 2];
                        if (!(this.Employee && this.Employee.Chief)) return [3 /*break*/, 2];
                        if (this.ChifIDError) {
                            this.ErrorMessage = 'Incorrect Chief';
                            return [2 /*return*/];
                        } //if
                        if (!this.RegexHelperService.IsMatch(this.Employee.FirstName, this.RegexHelperService.EmployeeName)) {
                            this.ErrorMessage = 'Incorrect FirstName';
                            this.FirstNameError = true;
                            return [2 /*return*/];
                        } //if
                        if (!this.RegexHelperService.IsMatch(this.Employee.LastName, this.RegexHelperService.EmployeeName)) {
                            this.ErrorMessage = 'Incorrect LastName';
                            this.LastNameError = true;
                            return [2 /*return*/];
                        } //if
                        if (this.Employee.SurName && this.Employee.SurName.length > 0) {
                            if (!this.RegexHelperService.IsMatch(this.Employee.SurName, this.RegexHelperService.EmployeeName)) {
                                this.ErrorMessage = 'Incorrect SurName';
                                this.SurNameError = true;
                                return [2 /*return*/];
                            } //if
                        } //if
                        FileImput = document.querySelector('#employeeImage');
                        if (!FileImput) return [3 /*break*/, 2];
                        formData = new FormData();
                        if (FileImput.files.length > 0) {
                            file = FileImput.files[0];
                            if (file.size > 10485760) {
                                this.ErrorMessage = 'Size image should not be exceed 10 mb';
                                return [2 /*return*/];
                            } //if
                            formData.append('image', file);
                        } //if
                        else {
                            formData.append('image', null);
                        } //else
                        formData.append('EmployeeID', "" + this.EmployeeID);
                        formData.append('FirstName', this.Employee.FirstName);
                        formData.append('LastName', this.Employee.LastName);
                        formData.append('SurName', this.Employee.SurName !== '' ? this.Employee.SurName : null);
                        formData.append('ChiefID', this.Employee.Chief.EmployeeID);
                        formData.append('EmploymentDate', this.Employee.EmploymentDate);
                        formData.append('Salary', this.Employee.Salary);
                        return [4 /*yield*/, this.EmployeeService.employeeUpdate(formData, this.AuthenticationService.GetToken())];
                    case 1:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.SuccessMessage = data.message;
                            this.OldEmployee = Object.assign({}, this.Employee);
                            this.OldEmployee.Chief = Object.assign({}, this.Employee.Chief);
                            NewFileName = data.data.NewFileName;
                            if (NewFileName) {
                                this.ImgPath = this.PhotoHelperService.getPhotoPath(NewFileName + ("?" + new Date().getTime()));
                            } //if
                        } //if
                        else {
                            this.ErrorMessage = data.message;
                        } //else
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }; //onUpdateClick
    SingleEmployeeComponent.prototype.getShortEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.EmployeeID) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.EmployeeService.getShortEmployee(this.EmployeeID)];
                    case 1:
                        data = _a.sent();
                        if (!(data.code === 200)) return [3 /*break*/, 3];
                        this.Employee = data.data[0];
                        if (this.Employee.ImgName) {
                            this.ImgPath = this.PhotoHelperService.getPhotoPath(this.Employee.ImgName);
                        } //if
                        else {
                            this.ImgPath = this.PhotoHelperService.DefaultPhotoPath;
                        } //else
                        return [4 /*yield*/, this.EmployeeService.getAllPositions()];
                    case 2:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.Positions = data.data;
                        } //if
                        return [3 /*break*/, 4];
                    case 3:
                        this.Router.navigateByUrl('/404');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }; //getShortEmployee
    SingleEmployeeComponent.prototype.getFullEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.EmployeeID) return [3 /*break*/, 4];
                        if (!this.isAuthorized) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.EmployeeService.getFullEmployee(this.EmployeeID, this.AuthenticationService.GetToken())];
                    case 1:
                        data = _a.sent();
                        if (!(data.code === 200)) return [3 /*break*/, 3];
                        this.Employee = data.data[0];
                        this.Employee.EmploymentDate = this.Employee.EmploymentDate.replace('Z', '');
                        this.Employee.EmploymentDate = this.Employee.EmploymentDate.replace(' ', 'T');
                        if (this.Employee.ImgName) {
                            this.ImgPath = this.PhotoHelperService.getPhotoPath(this.Employee.ImgName);
                        } //if
                        else {
                            this.ImgPath = this.PhotoHelperService.DefaultPhotoPath;
                        } //else
                        if (this.Employee.Chief) {
                            this.Employee.Chief = this.Employee.Chief[0];
                        } //if
                        else {
                            this.Employee.Chief = {
                                EmployeeID: null,
                                FirstName: '',
                                LastName: '',
                                SurName: ''
                            };
                        } //else
                        return [4 /*yield*/, this.EmployeeService.getAllPositions()];
                    case 2:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.Positions = data.data;
                        } //if
                        return [3 /*break*/, 4];
                    case 3:
                        this.Router.navigateByUrl('/404');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }; //getFullEmployee
    SingleEmployeeComponent.prototype.ngOnInit = function () {
        if (this.isAuthorized) {
            this.getFullEmployee();
        } //if
        else {
            this.getShortEmployee();
        } //else
    }; //ngOnInit
    SingleEmployeeComponent.prototype.getPosition = function (PositionID) {
        if (this.Positions && PositionID) {
            var Position_1 = this.Positions.find(function (p) { return p.PositionID === PositionID; });
            if (Position_1) {
                return Position_1;
            } //if
            else {
                return null;
            } //else
        } //if
        else {
            return null;
        } //else
    }; //getPosition
    SingleEmployeeComponent.prototype.onChiefChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ChiefID, data, Chief;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAuthorized) return [3 /*break*/, 5];
                        ChiefID = this.Employee.Chief.EmployeeID;
                        if (!ChiefID) return [3 /*break*/, 4];
                        if (!(ChiefID < 0)) return [3 /*break*/, 1];
                        this.Employee.Chief.EmployeeID = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.EmployeeService.getFullEmployee(ChiefID, this.AuthenticationService.GetToken())];
                    case 2:
                        data = _a.sent();
                        if (data.code === 200) {
                            this.ChifIDError = false;
                            this.ErrorMessage = null;
                            Chief = data.data[0];
                            this.Employee.Chief.FirstName = Chief.FirstName;
                            this.Employee.Chief.LastName = Chief.LastName;
                            this.Employee.Chief.SurName = Chief.SurName;
                            if (Chief.PositionID === 5) {
                                this.Employee.PositionID = -1;
                                this.ErrorMessage = 'Worker can not be Chief';
                                this.ChifIDError = true;
                            } //if
                            else {
                                this.Employee.PositionID = Chief.PositionID + 1;
                            } //else
                        } //if
                        else {
                            this.ErrorMessage = data.message;
                            this.Employee.PositionID = -1;
                            this.ChifIDError = true;
                        } //else
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.Employee.PositionID = 1;
                        this.clearChief();
                        _a.label = 5;
                    case 5:
                        if (this.Employee.Chief.EmployeeID === this.EmployeeID) {
                            this.ErrorMessage = 'Employee can not be yourself chief';
                            return [2 /*return*/];
                        } //if
                        return [2 /*return*/];
                }
            });
        });
    }; //onChiefChange
    SingleEmployeeComponent.prototype.onSalaryChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (event.srcElement.value > this.MaxSalaryValue) {
                    event.srcElement.value = this.MaxSalaryValue;
                } //if
                else if (event.srcElement.value < this.MinSalaryValue) {
                    event.srcElement.value = this.MinSalaryValue;
                } //else if
                return [2 /*return*/];
            });
        });
    }; //onChiefChange
    SingleEmployeeComponent.prototype.clearChief = function () {
        if (this.Employee && this.Employee.Chief) {
            this.Employee.Chief.EmployeeID = null;
            this.Employee.Chief.FirstName = '';
            this.Employee.Chief.LastName = '';
            this.Employee.Chief.SurName = '';
        } //if
    }; //if
    SingleEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-employee',
            template: __webpack_require__(/*! ./single-employee.component.html */ "./src/app/components/main/single-employee/single-employee.component.html"),
            styles: [__webpack_require__(/*! ./single-employee.component.css */ "./src/app/components/main/single-employee/single-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _services_regex_helper_service__WEBPACK_IMPORTED_MODULE_4__["RegexHelperService"], _services_photo_helper_service__WEBPACK_IMPORTED_MODULE_5__["PhotoHelperService"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_7__["MainMarginService"]])
    ], SingleEmployeeComponent);
    return SingleEmployeeComponent;
}()); //SingleEmployeeComponent



/***/ }),

/***/ "./src/app/components/main/treeview/treeview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/main/treeview/treeview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/treeview/treeview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/main/treeview/treeview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 1%\">\n  <tree-root [nodes]=\"nodes\" [options]=\"options\" (activate)=\"onActivate($event)\"></tree-root>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/treeview/treeview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/main/treeview/treeview.component.ts ***!
  \****************************************************************/
/*! exports provided: TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var TreeviewComponent = /** @class */ (function () {
    function TreeviewComponent(EmployeeService, Router, MainMarginService) {
        this.EmployeeService = EmployeeService;
        this.Router = Router;
        this.MainMarginService = MainMarginService;
        this.nodes = [];
        this.options = {
            getChildren: this.getChildren.bind(this)
        };
        this.MainMarginService.SetZeroMargin();
        this.nodes.push({
            id: 0,
            name: 'Employees',
            hasChildren: true
        });
    } //constructor
    TreeviewComponent.prototype.getChildren = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeID, data, nodes, newNodes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        employeeID = node.id != 0 ? node.id : null;
                        return [4 /*yield*/, this.EmployeeService.getTreeEmployee(employeeID)];
                    case 1:
                        data = _a.sent();
                        nodes = [];
                        if (data.code === 200 && data.data.length > 0) {
                            data.data.forEach(function (item) {
                                nodes.push({
                                    id: item.EmployeeID,
                                    name: item.FirstName + " " + item.LastName + " " + item.SurName + " (" + item.Position + ") (" + item.CountEmployees + ")",
                                    hasChildren: item.CountEmployees > 0 ? true : false
                                });
                            });
                            return [2 /*return*/, nodes];
                        } //if
                        newNodes = nodes.map(function (c) { return Object.assign({}, c); });
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(newNodes);
                            })];
                }
            });
        });
    };
    TreeviewComponent.prototype.onActivate = function (event) {
        var id = event.node.data.id;
        if (id !== 0) {
            this.Router.navigateByUrl("/single-employee/" + event.node.data.id);
        } //if
    }; //onFocus
    TreeviewComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    TreeviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treeview',
            template: __webpack_require__(/*! ./treeview.component.html */ "./src/app/components/main/treeview/treeview.component.html"),
            styles: [__webpack_require__(/*! ./treeview.component.css */ "./src/app/components/main/treeview/treeview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_main_margin_service__WEBPACK_IMPORTED_MODULE_3__["MainMarginService"]])
    ], TreeviewComponent);
    return TreeviewComponent;
}()); //TreeviewComponent



/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-content center-margin\">\n  <p class=\"big-text\">Welcome To Employee Application</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_margin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/main-margin.service */ "./src/app/services/main-margin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(MainMarginService) {
        this.MainMarginService = MainMarginService;
        this.MainMarginService.SetCenterMargin();
    } //constructor
    HomePageComponent.prototype.ngOnInit = function () {
    }; //OnInit
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/components/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_margin_service__WEBPACK_IMPORTED_MODULE_1__["MainMarginService"]])
    ], HomePageComponent);
    return HomePageComponent;
}()); //HomePageComponent



/***/ }),

/***/ "./src/app/components/pages/list-page/list-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/list-page/list-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/list-page/list-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/list-page/list-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list></app-list>\n"

/***/ }),

/***/ "./src/app/components/pages/list-page/list-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/list-page/list-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPageComponent = /** @class */ (function () {
    function ListPageComponent() {
    } //constructor
    ListPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    ListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/components/pages/list-page/list-page.component.html"),
            styles: [__webpack_require__(/*! ./list-page.component.css */ "./src/app/components/pages/list-page/list-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPageComponent);
    return ListPageComponent;
}()); //ListPageComponent



/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/main-page/main-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/main-page/main-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <app-header></app-header>\n\n  <main id=\"main\" role=\"main\" class=\"container\">\n\n    <router-outlet></router-outlet>\n\n  </main>\n\n  <app-footer FooterTitle=\"Employee Application\"></app-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/main-page/main-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    } //constructor
    MainPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/components/pages/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}()); //MainPageComponent



/***/ }),

/***/ "./src/app/components/pages/not-found-page/not-found-page.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/not-found-page/not-found-page.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/not-found-page/not-found-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/not-found-page/not-found-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-content\">\n  <p class=\"big-text\" style=\"color: #6c6c6c;\">Error 404</p>\n  <p class=\"big-text\">Page Not Found</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/pages/not-found-page/not-found-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/not-found-page/not-found-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    } //constructor
    NotFoundPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/pages/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/components/pages/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}()); //NotFoundPageComponent



/***/ }),

/***/ "./src/app/components/pages/sign-in-page/sign-in-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/sign-in-page/sign-in-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/sign-in-page/sign-in-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/sign-in-page/sign-in-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sign-in></app-sign-in>\n"

/***/ }),

/***/ "./src/app/components/pages/sign-in-page/sign-in-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/sign-in-page/sign-in-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageComponent", function() { return SignInPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInPageComponent = /** @class */ (function () {
    function SignInPageComponent() {
    } //constructor
    SignInPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    SignInPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in-page',
            template: __webpack_require__(/*! ./sign-in-page.component.html */ "./src/app/components/pages/sign-in-page/sign-in-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-page.component.css */ "./src/app/components/pages/sign-in-page/sign-in-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInPageComponent);
    return SignInPageComponent;
}()); //SignInPageComponent



/***/ }),

/***/ "./src/app/components/pages/sign-up-page/sign-up-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/pages/sign-up-page/sign-up-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/sign-up-page/sign-up-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/sign-up-page/sign-up-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sign-up></app-sign-up>\n"

/***/ }),

/***/ "./src/app/components/pages/sign-up-page/sign-up-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/sign-up-page/sign-up-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignUpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageComponent", function() { return SignUpPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpPageComponent = /** @class */ (function () {
    function SignUpPageComponent() {
    } //constructor
    SignUpPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    SignUpPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up-page',
            template: __webpack_require__(/*! ./sign-up-page.component.html */ "./src/app/components/pages/sign-up-page/sign-up-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-page.component.css */ "./src/app/components/pages/sign-up-page/sign-up-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpPageComponent);
    return SignUpPageComponent;
}()); //SignUpPageComponent



/***/ }),

/***/ "./src/app/components/pages/single-employee-page/single-employee-page.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/pages/single-employee-page/single-employee-page.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/single-employee-page/single-employee-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/single-employee-page/single-employee-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-single-employee></app-single-employee>\n"

/***/ }),

/***/ "./src/app/components/pages/single-employee-page/single-employee-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/single-employee-page/single-employee-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SingleEmployeePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEmployeePageComponent", function() { return SingleEmployeePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleEmployeePageComponent = /** @class */ (function () {
    function SingleEmployeePageComponent() {
    } //constructor
    SingleEmployeePageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    SingleEmployeePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-employee-page',
            template: __webpack_require__(/*! ./single-employee-page.component.html */ "./src/app/components/pages/single-employee-page/single-employee-page.component.html"),
            styles: [__webpack_require__(/*! ./single-employee-page.component.css */ "./src/app/components/pages/single-employee-page/single-employee-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEmployeePageComponent);
    return SingleEmployeePageComponent;
}()); //SingleEmployeePageComponent



/***/ }),

/***/ "./src/app/components/pages/treeview-page/treeview-page.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/treeview-page/treeview-page.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/treeview-page/treeview-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/treeview-page/treeview-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-treeview></app-treeview>\n"

/***/ }),

/***/ "./src/app/components/pages/treeview-page/treeview-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/treeview-page/treeview-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: TreeviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewPageComponent", function() { return TreeviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeviewPageComponent = /** @class */ (function () {
    function TreeviewPageComponent() {
    } //constructor
    TreeviewPageComponent.prototype.ngOnInit = function () {
    }; //ngOnInit
    TreeviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treeview-page',
            template: __webpack_require__(/*! ./treeview-page.component.html */ "./src/app/components/pages/treeview-page/treeview-page.component.html"),
            styles: [__webpack_require__(/*! ./treeview-page.component.css */ "./src/app/components/pages/treeview-page/treeview-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeviewPageComponent);
    return TreeviewPageComponent;
}()); //TreeviewPageComponent



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.onlogOutCallBacks = new Map();
        this.onSignInCallBacks = new Map();
    } //constructor
    AuthenticationService.prototype.isAuthorized = function () {
        if (localStorage.getItem('currentUser') && localStorage.getItem('token')) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            return user;
        } //if
        else {
            return null;
        } //else
    }; //isAuthorized
    AuthenticationService.prototype.GetToken = function () {
        if (localStorage.getItem('token')) {
            return JSON.parse(localStorage.getItem('token'));
        } //if
        return null;
    }; //GetToken
    AuthenticationService.prototype.signIn = function (user, url) {
        if (url === void 0) { url = '/api/sign-in'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { username: user.username, password: user.password }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, this.SignIn(result)];
                    case 2:
                        ex_1 = _a.sent();
                        console.log("Exception: signIn", ex_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //signIn
    AuthenticationService.prototype.signUp = function (user, url) {
        if (url === void 0) { url = '/api/sign-up'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { username: user.username, password: user.password }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, this.SignIn(result)];
                    case 2:
                        ex_2 = _a.sent();
                        console.log("Exception: signUp", ex_2);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //signIn
    AuthenticationService.prototype.SignIn = function (result) {
        if (result.code === 200 && result.data.token) {
            localStorage.setItem('currentUser', JSON.stringify(result.data.user));
            localStorage.setItem('token', JSON.stringify(result.data.token));
            this.onSignInCallBacks.forEach(function (callbaks) {
                callbaks(result.data.user);
            });
            return true;
        } //if
        else {
            return { error: result.message };
        } //else
    }; //SignIn
    AuthenticationService.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.onlogOutCallBacks.forEach(function (callbaks) {
            callbaks();
        });
    }; //logout
    AuthenticationService.prototype.onLogOut = function (key, callback) {
        this.onlogOutCallBacks.set(key, callback);
    }; //onLogOut
    AuthenticationService.prototype.onSignIn = function (key, callback) {
        this.onSignInCallBacks.set(key, callback);
    }; //onLogOut
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}()); //AuthenticationService



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, AuthenticationService) {
        this.http = http;
        this.AuthenticationService = AuthenticationService;
    } //constructor
    EmployeeService.prototype.getTreeEmployee = function (employeeID, url) {
        if (url === void 0) { url = '/api/tree-employee'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { id: employeeID }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_1 = _a.sent();
                        console.log("Exception: getTreeEmployee", ex_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //getTreeEmployee
    EmployeeService.prototype.getFullEmployee = function (employeeID, token, url) {
        if (url === void 0) { url = "/api/full-employee?token=" + token; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { id: employeeID, token: token }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_2 = _a.sent();
                        if (ex_2.status === 401) {
                            this.AuthenticationService.logOut();
                        } //if
                        else {
                            console.log("Exception: getFullEmployee", ex_2);
                        } //else
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //getFullEmployee
    EmployeeService.prototype.getShortEmployee = function (employeeID, url) {
        if (url === void 0) { url = '/api/short-employee'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { id: employeeID }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_3 = _a.sent();
                        console.log("Exception: getShortEmployee", ex_3);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //getShortEmployee
    EmployeeService.prototype.getAllPositions = function (url) {
        if (url === void 0) { url = '/api/positions'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, null).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_4 = _a.sent();
                        console.log("Exception: getAllPositions", ex_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //getAllPositions
    EmployeeService.prototype.getEmployeeList = function (data, token, url) {
        if (url === void 0) { url = "/api/employee-list?token=" + token; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data.token = token;
                        return [4 /*yield*/, this.http.post(url, data).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_5 = _a.sent();
                        if (ex_5.status === 401) {
                            this.AuthenticationService.logOut();
                        } //if
                        else {
                            console.log("Exception: getEmployeeList", ex_5);
                        } //else
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //getEmployeeList
    EmployeeService.prototype.employeeDelete = function (employeeID, token, url) {
        if (url === void 0) { url = "/api/employee-delete?token=" + token; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, { id: employeeID, token: token }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_6 = _a.sent();
                        if (ex_6.status === 401) {
                            this.AuthenticationService.logOut();
                        } //if
                        else {
                            console.log("Exception: employeeDelete", ex_6);
                        } //else
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //employeeDelete
    EmployeeService.prototype.employeeUpdate = function (data, token, url) {
        if (url === void 0) { url = "/api/employee-update?token=" + token; }
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(url, data).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_7 = _a.sent();
                        if (ex_7.status === 401) {
                            this.AuthenticationService.logOut();
                        } //if
                        else {
                            console.log("Exception: employeeUpdate", ex_7);
                        } //else
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //employeeUpdate
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], EmployeeService);
    return EmployeeService;
}()); //EmployeeService



/***/ }),

/***/ "./src/app/services/main-margin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/main-margin.service.ts ***!
  \*************************************************/
/*! exports provided: MainMarginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMarginService", function() { return MainMarginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMarginService = /** @class */ (function () {
    function MainMarginService() {
    } //constructor
    MainMarginService.prototype.SetZeroMargin = function () {
        var main = document.querySelector('#main');
        if (main) {
            main.style.margin = '0';
        } //if
    }; //SetZeroMargin
    MainMarginService.prototype.SetCenterMargin = function () {
        var main = document.querySelector('#main');
        if (main) {
            main.style.margin = '0 auto';
        } //if
    }; //SetCenterMargin
    MainMarginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MainMarginService);
    return MainMarginService;
}()); //MainMarginService



/***/ }),

/***/ "./src/app/services/photo-helper.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/photo-helper.service.ts ***!
  \**************************************************/
/*! exports provided: PhotoHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoHelperService", function() { return PhotoHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoHelperService = /** @class */ (function () {
    function PhotoHelperService() {
        this.DefaultPhotoPath = '/img/user.png';
        this.PhotoPath = '/img/employees/';
    } //constructor
    PhotoHelperService.prototype.getPhotoPath = function (imgName) {
        return imgName ? this.PhotoPath + imgName : null;
    }; //getPhotoPath
    PhotoHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PhotoHelperService);
    return PhotoHelperService;
}()); //PhotoHelperService



/***/ }),

/***/ "./src/app/services/regex-helper.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/regex-helper.service.ts ***!
  \**************************************************/
/*! exports provided: RegexHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexHelperService", function() { return RegexHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegexHelperService = /** @class */ (function () {
    function RegexHelperService() {
        this.UserName = /^[a-z0-9_]{4,20}$/gmi;
        this.UserPassword = /^[a-z0-9]{4,20}$/gmi;
        this.EmployeeName = /^[^0-9)([\]<>\\\/.{},'":;`$~#@!%^&*+=|?_-]{1,255}$/gmi;
    } //constructor
    RegexHelperService.prototype.IsMatch = function (value, pattern) {
        var result = value.search(pattern);
        return result !== -1 ? true : false;
    }; //IsMatch
    RegexHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RegexHelperService);
    return RegexHelperService;
}()); //RegexHelperService



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MEGA\Projects\programming\Web\Employers-FullStack\Front-end\EmployersAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
