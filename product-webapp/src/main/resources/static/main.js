"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _education_details_education_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-details/education-details.component */ 3226);
/* harmony import */ var _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-details/experience-details.component */ 1373);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ 7930);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 610);
/* harmony import */ var _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-homepage/main-homepage.component */ 3379);
/* harmony import */ var _moreinfo_moreinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moreinfo/moreinfo.component */ 3949);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 8354);
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-details/personal-details.component */ 5326);
/* harmony import */ var _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-email/send-email.component */ 2375);
/* harmony import */ var _profilesearch_profilesearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profilesearch/profilesearch.component */ 9585);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ 2916);
/* harmony import */ var _skill_details_skill_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skill-details/skill-details.component */ 7138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















const routes = [{
  path: '',
  redirectTo: 'main-homepage',
  pathMatch: 'full'
}, {
  path: 'main-homepage',
  component: _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_4__.MainHomepageComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__.SignupComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'homepage',
  component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent
}, {
  path: 'personal-details',
  component: _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__.PersonalDetailsComponent
}, {
  path: 'education-details',
  component: _education_details_education_details_component__WEBPACK_IMPORTED_MODULE_0__.EducationDetailsComponent
}, {
  path: 'experience-details',
  component: _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceDetailsComponent
}, {
  path: 'skill-details',
  component: _skill_details_skill_details_component__WEBPACK_IMPORTED_MODULE_11__.SkillDetailsComponent
}, {
  path: 'my-profile',
  component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__.MyProfileComponent
}, {
  path: 'moreinfo',
  component: _moreinfo_moreinfo_component__WEBPACK_IMPORTED_MODULE_5__.MoreinfoComponent
}, {
  path: 'profilesearch',
  component: _profilesearch_profilesearch_component__WEBPACK_IMPORTED_MODULE_9__.ProfilesearchComponent
}, {
  path: 'my-profile',
  component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__.MyProfileComponent
}, {
  path: 'send-email',
  component: _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_8__.SendEmailComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'Learnzilla';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 2916);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 610);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 162);
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-details/personal-details.component */ 5326);
/* harmony import */ var _education_details_education_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-details/education-details.component */ 3226);
/* harmony import */ var _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience-details/experience-details.component */ 1373);
/* harmony import */ var _skill_details_skill_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skill-details/skill-details.component */ 7138);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ 7930);
/* harmony import */ var _moreinfo_moreinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moreinfo/moreinfo.component */ 3949);
/* harmony import */ var _profilesearch_profilesearch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profilesearch/profilesearch.component */ 9585);
/* harmony import */ var _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-homepage/main-homepage.component */ 3379);
/* harmony import */ var _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./send-email/send-email.component */ 2375);
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-navbar/home-navbar.component */ 9918);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 8354);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email-dialog/email-dialog.component */ 6756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);


















































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCardModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__.MatBadgeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_48__.MatToolbarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_moreinfo_moreinfo_component__WEBPACK_IMPORTED_MODULE_11__.MoreinfoComponent, _profilesearch_profilesearch_component__WEBPACK_IMPORTED_MODULE_12__.ProfilesearchComponent, _main_homepage_main_homepage_component__WEBPACK_IMPORTED_MODULE_13__.MainHomepageComponent, _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_4__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__.PersonalDetailsComponent, _education_details_education_details_component__WEBPACK_IMPORTED_MODULE_7__.EducationDetailsComponent, _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_8__.ExperienceDetailsComponent, _skill_details_skill_details_component__WEBPACK_IMPORTED_MODULE_9__.SkillDetailsComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__.HomepageComponent, _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_14__.SendEmailComponent, _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_15__.HomeNavbarComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__.MyProfileComponent, _email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_17__.EmailDialogComponent],
    imports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCardModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_39__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__.MatBadgeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_46__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_48__.MatToolbarModule]
  });
})();

/***/ }),

/***/ 3226:
/*!******************************************************************!*\
  !*** ./src/app/education-details/education-details.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationDetailsComponent": () => (/* binding */ EducationDetailsComponent),
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_education_details_educationdetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/education-details/educationdetails */ 8518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_education_details_educationdetails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/education-details/educationdetails.service */ 7718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 162);

















function EducationDetailsComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Passing year is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function EducationDetailsComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " enter a valid passing year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class MyErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
class EducationDetailsComponent {
  constructor(formBuilder, educationdetailservice, router, _snackBar) {
    this.formBuilder = formBuilder;
    this.educationdetailservice = educationdetailservice;
    this.router = router;
    this._snackBar = _snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.user = new _service_education_details_educationdetails__WEBPACK_IMPORTED_MODULE_0__.Educationdetails();
    this.matcher = new MyErrorStateMatcher();
    this.durationInSeconds = 2;
  }
  // profileForm = this.formBuilder.group({
  //   highest_qualification:['',Validators.required],
  //   email:['',Validators.required],
  //   specialization:['',Validators.required],
  //   institute_name:['',Validators.required],
  //   passing_year:['',Validators.required],
  //   cgpa:['',Validators.required],
  // });
  ngOnInit() {
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      highest_qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      specialization: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      institute_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      passing_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")]),
      cgpa: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    // this.email=localStorage.getItem('loginEmail')
    if (localStorage.getItem("STEP_2")) {
      var values = JSON.parse(localStorage.getItem("STEP_2"));
      console.log(values);
      this.profileForm.setValue({
        highest_qualification: values.highest_qualification,
        specialization: values.specialization,
        institute_name: values.institute_name,
        passing_year: values.passing_year,
        cgpa: values.cgpa,
        email: values.email
      });
    }
  }
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_2", JSON.stringify(this.profileForm.value));
    const {
      email,
      highest_qualification,
      specialization,
      institute_name,
      passing_year,
      cgpa
    } = this.profileForm.value;
    this.user.email = localStorage.getItem('loginEmail');
    this.user.highest_qualification = highest_qualification;
    this.user.specialization = specialization;
    this.user.institute_name = institute_name;
    this.user.passing_year = passing_year;
    this.user.cgpa = cgpa;
    if (highest_qualification == "" || specialization == "" || institute_name == "" || passing_year == "" || cgpa == "") {
      // alert("Fields cannot be empty!")
      {
        this._snackBar.open('Fields cannot be empty!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        });
      }
    } else {
      this.router.navigate(["/experience-details"]);
      this.educationdetailservice.addApi(this.user).subscribe(data => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Education Details Added SuccessFully!!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
        }
      }, error => console.log(error));
    }
  }
  static #_ = this.ɵfac = function EducationDetailsComponent_Factory(t) {
    return new (t || EducationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_education_details_educationdetails_service__WEBPACK_IMPORTED_MODULE_1__.EducationdetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EducationDetailsComponent,
    selectors: [["app-education-details"]],
    decls: 45,
    vars: 8,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["matRipple", "", "routerLink", "/personal-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "full-width"], ["formControlName", "highest_qualification", "matInput", ""], ["formControlName", "specialization", "matInput", ""], ["formControlName", "institute_name", "matInput", ""], ["formControlName", "passing_year", "matInput", "", "maxlength", "4", 3, "errorStateMatcher"], [4, "ngIf"], ["formControlName", "cgpa", "matInput", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matRipple", "", "routerLink", "/experience-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"]],
    template: function EducationDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "form", 4)(8, "mat-card")(9, "mat-card-header", 5)(10, "mat-card-title")(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Educational Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-content")(14, "div", 6)(15, "mat-form-field", 7)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Highest Qualification");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 7)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Specialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 7)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Institute Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field", 7)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Year of Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, EducationDetailsComponent_mat_error_31_Template, 4, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, EducationDetailsComponent_mat_error_32_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 7)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Overall CGPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-card-actions", 5)(38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EducationDetailsComponent_Template_button_click_38_listener() {
          return ctx.saveForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 15)(41, "mat-icon")(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profileForm.get("passing_year").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.profileForm.get("passing_year").hasError("required") && ctx.profileForm.get("passing_year").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height: 95vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:550px;}\nmat-card[_ngcontent-%COMP%]{border-radius:35px;background-color: rgb(0, 0, 0,0.5);}\np[_ngcontent-%COMP%]{margin-top: 15px;color: aliceblue;}\nh2[_ngcontent-%COMP%]{color: aliceblue;}\n.full-width[_ngcontent-%COMP%]{width: 75%;}\n\n.example-ripple-container[_ngcontent-%COMP%] {\n    display: flex;\n    cursor: pointer;\n    box-shadow: none;\n}\n@media screen and (max-width: 425px){\n    mat-card[_ngcontent-%COMP%]{\n        margin-top: 20px;\n    }   \n}\n/*# sourceURL=webpack://./src/app/education-details/education-details.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWR1Y2F0aW9uLWRldGFpbHMvZWR1Y2F0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDO0FBQ3JCLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUNsQyxZQUFZLFlBQVksQ0FBQztBQUN6QixTQUFTLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDO0FBQy9ELEVBQUUsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7QUFDcEMsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwQixZQUFZLFVBQVUsQ0FBQzs7QUFFdkI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wMXttaW4taGVpZ2h0OiA5NXZoO31cbi5jb250YWluLWNvbnRlbnR7bWluLWhlaWdodDogOTB2aDt9XG4ucGFydC1wcmltZXtoZWlnaHQ6NTUwcHg7fVxubWF0LWNhcmR7Ym9yZGVyLXJhZGl1czozNXB4O2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNSk7fVxucHttYXJnaW4tdG9wOiAxNXB4O2NvbG9yOiBhbGljZWJsdWU7fVxuaDJ7Y29sb3I6IGFsaWNlYmx1ZTt9XG4uZnVsbC13aWR0aHt3aWR0aDogNzUlO31cblxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICBtYXQtY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9ICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6756:
/*!********************************************************!*\
  !*** ./src/app/email-dialog/email-dialog.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDialogComponent": () => (/* binding */ EmailDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);





class EmailDialogComponent {
  static #_ = this.ɵfac = function EmailDialogComponent_Factory(t) {
    return new (t || EmailDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmailDialogComponent,
    selectors: [["app-email-dialog"]],
    decls: 8,
    vars: 0,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["src", "/assets/img/done.svg", "alt", "", "srcset", "", "height", "150px"], ["mat-dialog-actions", "", "fxLayoutAlign", "center"], ["color", "primary", "mat-button", "", "mat-dialog-close", "", "routerLink", "/profilesearch"]],
    template: function EmailDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Successfully sent email to the candidate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Thank you for choosing us.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Check more Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1373:
/*!********************************************************************!*\
  !*** ./src/app/experience-details/experience-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceDetailsComponent": () => (/* binding */ ExperienceDetailsComponent),
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_experience_details_experiencedetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/experience-details//experiencedetails */ 4986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_experience_details_experiencedetails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/experience-details/experiencedetails.service */ 9231);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 162);


















function ExperienceDetailsComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_exp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_exp_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_exp_r3.viewValue, " ");
  }
}
function ExperienceDetailsComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Notice period is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ExperienceDetailsComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " enter a valid notice period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class MyErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
class ExperienceDetailsComponent {
  constructor(formBuilder, experiencedetailservice, router, _snackBar) {
    this.formBuilder = formBuilder;
    this.experiencedetailservice = experiencedetailservice;
    this.router = router;
    this._snackBar = _snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.user = new _service_experience_details_experiencedetails__WEBPACK_IMPORTED_MODULE_0__.Experiencedetails();
    this.pref_exp = [{
      value: 'Fresher',
      viewValue: 'Fresher'
    }, {
      value: '1-2',
      viewValue: '1 - 2'
    }, {
      value: '2-3',
      viewValue: '2 - 3'
    }, {
      value: '3-4',
      viewValue: '3 - 4'
    }, {
      value: '4-5',
      viewValue: '4 - 5'
    }, {
      value: '5+',
      viewValue: '5+'
    }];
    this.matcher = new MyErrorStateMatcher();
    this.durationInSeconds = 2;
  }
  // profileForm = this.formBuilder.group({
  //   email:['',Validators.required],
  //   designation: ['',Validators.required],
  //   companyname:['',Validators.required],
  //   currentsalary:['',Validators.required],
  //   noticeperiod:['',Validators.required],
  //   experience:['',Validators.required],
  // });
  ngOnInit() {
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      currentsalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      noticeperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")]),
      experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    // this.email=localStorage.getItem('loginEmail')
    if (localStorage.getItem("STEP_3")) {
      var values = JSON.parse(localStorage.getItem("STEP_3"));
      console.log(values);
      this.profileForm.setValue({
        email: values.email,
        designation: values.designation,
        companyname: values.companyname,
        currentsalary: values.currentsalary,
        noticeperiod: values.noticeperiod,
        experience: values.experience
      });
    }
  }
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_3", JSON.stringify(this.profileForm.value));
    const {
      designation,
      companyname,
      currentsalary,
      noticeperiod,
      experience
    } = this.profileForm.value;
    this.user.email = localStorage.getItem('loginEmail');
    this.user.designation = designation;
    this.user.companyname = companyname;
    this.user.currentsalary = currentsalary;
    this.user.noticeperiod = noticeperiod;
    this.user.experience = experience;
    //this.user.jobprofile = jobprofile
    if (designation == "" || companyname == "" || currentsalary == "" || noticeperiod == "" || experience == "") {
      // alert("Fields cannot be empty!")
      {
        this._snackBar.open('Fields cannot be empty!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        });
      }
    } else {
      this.router.navigate(["/skill-details"]);
      this.experiencedetailservice.addApi(this.user).subscribe(data => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Experience Details Added SuccessFully!!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
        }
      }, error => console.log(error));
    }
  }
  static #_ = this.ɵfac = function ExperienceDetailsComponent_Factory(t) {
    return new (t || ExperienceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_experience_details_experiencedetails_service__WEBPACK_IMPORTED_MODULE_1__.ExperiencedetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExperienceDetailsComponent,
    selectors: [["app-experience-details"]],
    decls: 47,
    vars: 9,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["matRipple", "", "routerLink", "/education-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "full-width"], ["formControlName", "designation", "matInput", ""], ["formControlName", "companyname", "matInput", ""], ["formControlName", "currentsalary", "matInput", ""], ["formControlName", "experience"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "noticeperiod", "matInput", "", "maxlength", "2", 3, "errorStateMatcher"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matRipple", "", "routerLink", "/skill-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], [3, "value"]],
    template: function ExperienceDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-icon")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "form", 4)(9, "mat-card")(10, "mat-card-header", 5)(11, "mat-card-title")(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Experience Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card-content")(15, "div", 6)(16, "mat-form-field", 7)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Your Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 7)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Current Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 7)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Current Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 7)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Total years of Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ExperienceDetailsComponent_mat_option_32_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 7)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Notice Period Ex: In days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ExperienceDetailsComponent_mat_error_37_Template, 4, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ExperienceDetailsComponent_mat_error_38_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-card-actions", 5)(40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienceDetailsComponent_Template_button_click_40_listener() {
          return ctx.saveForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 16)(43, "mat-icon")(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_exp);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profileForm.get("noticeperiod").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.profileForm.get("noticeperiod").hasError("required") && ctx.profileForm.get("noticeperiod").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height: 95vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:550px;}\nmat-card[_ngcontent-%COMP%]{border-radius:35px;background-color: rgb(0, 0, 0,0.5);}\np[_ngcontent-%COMP%]{margin-top: 15px;    line-height: 30px;color: aliceblue;}\nh2[_ngcontent-%COMP%]{color: aliceblue;}\n.full-width[_ngcontent-%COMP%]{width: 75%;}\n\n.example-ripple-container[_ngcontent-%COMP%] {\n    display: flex;\n    cursor: pointer;\n    box-shadow: none;\n}\n@media screen and (max-width: 425px){\n    mat-card[_ngcontent-%COMP%]{\n        margin-top: 20px;\n    }   \n    \n}\n/*# sourceURL=webpack://./src/app/experience-details/experience-details.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS1kZXRhaWxzL2V4cGVyaWVuY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksZ0JBQWdCLENBQUM7QUFDckIsaUJBQWlCLGdCQUFnQixDQUFDO0FBQ2xDLFlBQVksWUFBWSxDQUFDO0FBQ3pCLFNBQVMsa0JBQWtCLENBQUMsa0NBQWtDLENBQUM7QUFDL0QsRUFBRSxnQkFBZ0IsS0FBSyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRCxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCLFlBQVksVUFBVSxDQUFDOztBQUV2QjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5wMXttaW4taGVpZ2h0OiA5NXZoO31cbi5jb250YWluLWNvbnRlbnR7bWluLWhlaWdodDogOTB2aDt9XG4ucGFydC1wcmltZXtoZWlnaHQ6NTUwcHg7fVxubWF0LWNhcmR7Ym9yZGVyLXJhZGl1czozNXB4O2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNSk7fVxucHttYXJnaW4tdG9wOiAxNXB4OyAgICBsaW5lLWhlaWdodDogMzBweDtjb2xvcjogYWxpY2VibHVlO31cbmgye2NvbG9yOiBhbGljZWJsdWU7fVxuLmZ1bGwtd2lkdGh7d2lkdGg6IDc1JTt9XG5cbi5leGFtcGxlLXJpcHBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCl7XG4gICAgbWF0LWNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfSAgIFxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 162:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 47,
    vars: 0,
    consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "main-container"], ["fxLayout", "row wrap", "fxFlex", "95%", "fxLayoutAlign", "space-between center", 1, "contain-images"], ["fxFlex", "50%", "fxFlex.xs", "100%", "fxLayoutAlign", "center start", 1, "c1"], ["fxLayout", "column", "fxFlex", "75%", "fxFlex.xs", "85%"], ["fxLayout", "column"], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "c2"], ["fxLayoutAlign", "center"], ["fxLayout", "row"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome to Job4u! We are a team of dedicated professionals committed to helping Recruiters to find their perfect fit for the job and Job seekers to match their preferences. We value privacy and security, and we take great care to protect the personal information of our users. We are also committed to continuously improving our platform, and we regularly update our website with new features and enhancements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "mat-list")(10, "div")(11, "mat-list-item", 6)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item")(16, "div", 7)(17, "span")(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "info@job4u.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list-item")(25, "div", 7)(26, "span")(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Toll No: +91-XX-XXXXXXX | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "| Toll Free No: +91-XX-XXXXXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item")(36, "div", 7)(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Stay Connected: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list-item")(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "| Privacy Policy | Term of Use | Complaints |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list-item")(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A9 2022 job4u | All rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    styles: ["footer[_ngcontent-%COMP%]{min-height: 35vh;background-color: #001122;}\n.c1[_ngcontent-%COMP%]{min-height: 30vh;}\n.c2[_ngcontent-%COMP%]{min-height: 30vh;}\n\n*[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\n.c2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: small;}\nmat-divider[_ngcontent-%COMP%]{background-color:beige;}\n/*# sourceURL=webpack://./src/app/footer/footer.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7QUFDbEQsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixJQUFJLGdCQUFnQixDQUFDOztBQUVyQjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkIsWUFBWSxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcnttaW4taGVpZ2h0OiAzNXZoO2JhY2tncm91bmQtY29sb3I6ICMwMDExMjI7fVxuLmMxe21pbi1oZWlnaHQ6IDMwdmg7fVxuLmMye21pbi1oZWlnaHQ6IDMwdmg7fVxuXG4qe1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG4uYzIgcHtmb250LXNpemU6IHNtYWxsO31cbm1hdC1kaXZpZGVye2JhY2tncm91bmQtY29sb3I6YmVpZ2U7fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9918:
/*!******************************************************!*\
  !*** ./src/app/home-navbar/home-navbar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeNavbarComponent": () => (/* binding */ HomeNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);






class HomeNavbarComponent {
  static #_ = this.ɵfac = function HomeNavbarComponent_Factory(t) {
    return new (t || HomeNavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeNavbarComponent,
    selectors: [["app-home-navbar"]],
    decls: 23,
    vars: 1,
    consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "main-container"], ["fxLayout", "row ", "fxFlex", "95%", "fxLayoutAlign", "space-between center", 1, "contain-images"], ["routerLink", "/main-homepage", 1, "logo"], ["src", "/assets/img/logo.png", "height", "60px"], ["fxLayout", "row ", "fxLayoutAlign", "space-around center"], ["fxHide", "", "fxShow.xs", "", "mat-button", "", "height", "100px", 3, "matMenuTriggerFor"], ["src", "/assets/img/avatar.svg", "alt", "", "srcset", "", "height", "60px"], ["height", "100px", "xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/login"], ["mat-menu-item", "", "routerLink", "/signup"], ["fxLayout", "row", "fxLayoutGap", "10%", 1, "r-but"], ["fxShow", "", "fxHide.xs", ""], ["mat-raised-button", "", "routerLink", "/login"], ["mat-raised-button", "", "routerLink", "/signup"]],
    template: function HomeNavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div")(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8)(10, "button", 9)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12)(21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      }
    },
    dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultShowHideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
    styles: ["nav[_ngcontent-%COMP%]{min-height: 10vh;background-color: rgba(0, 34, 29, 0.6);\n    \n}\n.r-but[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width: 90px;}\n.logo[_ngcontent-%COMP%]{border: none;background: none; }\n/*# sourceURL=webpack://./src/app/home-navbar/home-navbar.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1uYXZiYXIvaG9tZS1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLHNDQUFzQztJQUN2RCxpREFBaUQ7QUFDckQ7QUFDQSxjQUFjLFdBQVcsQ0FBQztBQUMxQixNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIm5hdnttaW4taGVpZ2h0OiAxMHZoO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzQsIDI5LCAwLjYpO1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiBmaXhlZDsgd2lkdGg6IDEwMCU7ICovXG59XG4uci1idXQgYnV0dG9ue3dpZHRoOiA5MHB4O31cbi5sb2dve2JvcmRlcjogbm9uZTtiYWNrZ3JvdW5kOiBub25lOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7930:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 162);








class HomepageComponent {
  static #_ = this.ɵfac = function HomepageComponent_Factory(t) {
    return new (t || HomepageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomepageComponent,
    selectors: [["app-homepage"]],
    decls: 19,
    vars: 0,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxFlex", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "99.5%", "fxFlex.xs", "100%", 1, "part-prime"], ["fxLayout", "row wrap"], ["fxLayout", "column wrap", "fxFlex", "50%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "a"], ["mat-raised-button", "", "routerLink", "/personal-details"], ["fxLayout", "column wrap", "fxFlex", "50%", "fxFlex.xs", "100%", "fxShow", "", "fxHide.xs", "", "fxLayoutAlign", "center center", 1, "b"], ["src", "/assets/img/hacker_mindset.svg", "alt", "", "srcset", "", "height", "375px"]],
    template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-card", 3)(5, "div", 4)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "A Step Close To Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " New Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Build your profile that stands out from others. Boost your career journey faster than before.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Fill Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-footer");
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultShowHideDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_0__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap);.p1[_ngcontent-%COMP%]{min-height:90vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 70vh;}\n.part-prime[_ngcontent-%COMP%]{height:500px;}\nmat-card[_ngcontent-%COMP%]{ height:500px;background-color: rgb(0, 0, 0,0.5);}\n.a[_ngcontent-%COMP%]{min-height:20vh;}\nh1[_ngcontent-%COMP%]{font-family: 'Unbounded', cursive;font-size: 45px; line-height: normal;padding: 50px 0 0 50px;color: aliceblue;}\np[_ngcontent-%COMP%]{padding: 25px 5px 5px 50px;font-family: 'Unbounded', cursive;font-size: 15px; line-height: normal;color: aliceblue;}\nspan[_ngcontent-%COMP%]{color: aqua;}\n.b[_ngcontent-%COMP%]{min-height: 20vh;}\nbutton[_ngcontent-%COMP%]{border-radius:50px;margin: 15px;}\n/*# sourceURL=webpack://./src/app/homepage/homepage.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFJLGVBQWUsQ0FBQztBQUNwQixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDbEMsWUFBWSxZQUFZLENBQUM7QUFDekIsVUFBVSxZQUFZLENBQUMsa0NBQWtDLENBQUM7QUFDMUQsR0FBRyxlQUFlLENBQUM7QUFDbkIsR0FBRyxpQ0FBaUMsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUM7QUFDbEgsRUFBRSwwQkFBMEIsQ0FBQyxpQ0FBaUMsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7QUFDckgsS0FBSyxXQUFXLENBQUM7QUFDakIsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwQixPQUFPLGtCQUFrQixDQUFDLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVuYm91bmRlZDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcblxuLnAxe21pbi1oZWlnaHQ6OTB2aDt9XG4uY29udGFpbi1jb250ZW50e21pbi1oZWlnaHQ6IDcwdmg7fVxuLnBhcnQtcHJpbWV7aGVpZ2h0OjUwMHB4O31cbm1hdC1jYXJkeyBoZWlnaHQ6NTAwcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC41KTt9XG4uYXttaW4taGVpZ2h0OjIwdmg7fVxuaDF7Zm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCBjdXJzaXZlO2ZvbnQtc2l6ZTogNDVweDsgbGluZS1oZWlnaHQ6IG5vcm1hbDtwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O2NvbG9yOiBhbGljZWJsdWU7fVxucHtwYWRkaW5nOiAyNXB4IDVweCA1cHggNTBweDtmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIGN1cnNpdmU7Zm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogbm9ybWFsO2NvbG9yOiBhbGljZWJsdWU7fVxuc3Bhbntjb2xvcjogYXF1YTt9XG4uYnttaW4taGVpZ2h0OiAyMHZoO31cbmJ1dHRvbntib3JkZXItcmFkaXVzOjUwcHg7bWFyZ2luOiAxNXB4O31cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 610:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_login_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/login/user */ 1809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/login/login.service */ 1139);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
//import { FormBuilder, Validators } from '@angular/forms';















class LoginComponent {
  constructor(formBuilder, loginService, router, _snackBar) {
    this.formBuilder = formBuilder;
    this.loginService = loginService;
    this.router = router;
    this._snackBar = _snackBar;
    this.hide = true;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    // constructor(private formBuilder:FormBuilder){}
    // profileForm = this.formBuilder.group({
    //   email:['',Validators.required],
    //   password:['',Validators.required],
    //   confirmpassword:['',Validators.required]
    // });
    // saveForm(){
    //   console.log('Form data is ', this.profileForm.value);
    // }
    // profileForm: FormGroup;
    this.submitted = false;
    // this.profileForm=new FormGroup({
    //   email:new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    //   password:new FormControl("", [Validators.required,Validators.minLength(8), Validators.maxLength(15)]),
    //   checkbox:
    // });
    this.profileForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      checkbox: [false]
    });
    this.durationInSeconds = 2;
    this.loginObj = new _service_login_user__WEBPACK_IMPORTED_MODULE_0__.User();
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]);
    this.RememberMe = false;
  }
  ngOnInit() {}
  onSubmit() {
    const {
      email,
      password
    } = this.profileForm.value;
    if (email == "" || password == "") {
      this._snackBar.open('Field Cannot be Empty', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    } else if (!this.profileForm.value.checkbox) {
      this._snackBar.open('Accept Terms and Conditions!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    }
    // this.submitted = true;
    // if (this.form.invalid) {
    //   return;
    // }
    // console.log(JSON.stringify(this.form.value, null, 2));
    else {
      console.log("FORMDATA", this.profileForm.value);
      this.loginObj.email = this.profileForm.value.email;
      this.loginObj.password = this.profileForm.value.password;
      this.loginService.loginApi(this.loginObj).subscribe(data => {
        console.log("validated", data);
        this.profileForm.reset();
        localStorage.setItem("loginEmail", this.loginObj.email);
        this.router.navigate(["/homepage"]);
      }, error => {
        console.log(error);
        {
          this._snackBar.open('Invalid Details', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
        }
        this.errorMessage = error.error;
      });
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      console.log('You must enter a value');
    }
    console.log(this.email.hasError('email') ? 'Not a valid email' : '');
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 48,
    vars: 5,
    consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "main-container"], ["fxLayout", "column wrap", "fxFlex", "40%", "fxShow", "", "fxHide.xs", "", 1, "contain-images"], ["fxFlex", "50%", 1, "logo-view"], ["routerLink", "/main-homepage", 1, "logo"], ["src", " /assets/img/logo.png", "alt", "", "srcset", "", "height", "150px", "fxFlex.sm", "90%"], ["fxFlex", "50%", 1, "illustrate-view"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "container-x"], ["src", " /assets/img/personal_info.svg", "alt", "", "srcset", "", "height", "200px", "fxFlex.sm", "90%"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "50%", "fxFlex.xs", "85%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["appearance", "fill", 1, "full-width"], ["formControlName", "email", "matInput", ""], ["matSuffix", ""], ["formControlName", "password", "type", "password", "matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["id", "checkbox", "color", "primary", "formControlName", "checkbox", 1, "checkbox"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["routerLink", "/signup"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "form", 10)(11, "mat-card")(12, "mat-card-header", 11)(13, "mat-card-title")(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Sign in to your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-card-content")(17, "div", 12)(18, "mat-form-field", 13)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 13)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Enter password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-checkbox", 18)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " By Accepting,you agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-card-actions", 11)(41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_41_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div")(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Create New Account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      }
    },
    dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton],
    styles: [".contain-images[_ngcontent-%COMP%]{min-height: 100vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 100vh;}\n.illustrate-view[_ngcontent-%COMP%]{min-height: 50vh; }\n.logo-view[_ngcontent-%COMP%]{min-height: 50vh; }\n.part-prime[_ngcontent-%COMP%]{height: 375px;}\nmat-form-field[_ngcontent-%COMP%]{display: flex;justify-content: space-between; width: 75%;}\n.logo[_ngcontent-%COMP%]{border: none;background: none;}\n.example-margin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 11px;}\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color: aliceblue;}\na[_ngcontent-%COMP%]{color:coral;font-weight:bold;}\nmat-card[_ngcontent-%COMP%]{border-radius: 35px;background-color: rgb(0, 0, 0,0.6);}\n@media screen and (max-width: 1440px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 100px;\n    }\n    \n}\n@media screen and (max-width: 425px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 0px;\n    }\n    \n}\n/*# sourceURL=webpack://./src/app/login/login.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEMsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ25DLGlCQUFpQixnQkFBZ0IsRUFBRTtBQUNuQyxXQUFXLGdCQUFnQixFQUFFO0FBQzdCLFlBQVksYUFBYSxDQUFDO0FBQzFCLGVBQWUsYUFBYSxDQUFDLDhCQUE4QixFQUFFLFVBQVUsQ0FBQztBQUN4RSxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNwQyxrQkFBa0IsZUFBZSxDQUFDO0FBQ2xDLEtBQUssZ0JBQWdCLENBQUM7QUFDdEIsRUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUM7QUFDL0IsU0FBUyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQztBQUNoRTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluLWltYWdlc3ttaW4taGVpZ2h0OiAxMDB2aDt9XG4uY29udGFpbi1jb250ZW50e21pbi1oZWlnaHQ6IDEwMHZoO31cbi5pbGx1c3RyYXRlLXZpZXd7bWluLWhlaWdodDogNTB2aDsgfVxuLmxvZ28tdmlld3ttaW4taGVpZ2h0OiA1MHZoOyB9XG4ucGFydC1wcmltZXtoZWlnaHQ6IDM3NXB4O31cbm1hdC1mb3JtLWZpZWxke2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB3aWR0aDogNzUlO31cbi5sb2dve2JvcmRlcjogbm9uZTtiYWNrZ3JvdW5kOiBub25lO31cbi5leGFtcGxlLW1hcmdpbiBwe2ZvbnQtc2l6ZTogMTFweDt9XG5oMixwe2NvbG9yOiBhbGljZWJsdWU7fVxuYXtjb2xvcjpjb3JhbDtmb250LXdlaWdodDpib2xkO31cbm1hdC1jYXJke2JvcmRlci1yYWRpdXM6IDM1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC42KTt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xuICAgIC5wYXJ0LXByaW1le1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICAucGFydC1wcmltZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3379:
/*!**********************************************************!*\
  !*** ./src/app/main-homepage/main-homepage.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainHomepageComponent": () => (/* binding */ MainHomepageComponent)
/* harmony export */ });
/* harmony import */ var _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/profile-details/profile-details */ 7407);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/profile-details/profile-details.service */ 8067);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 162);
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-navbar/home-navbar.component */ 9918);




















function MainHomepageComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_skl_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_skl_r4.value)("selected", ctx_r0.selectedskill === pref_skl_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_skl_r4.viewValue, " ");
  }
}
function MainHomepageComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_lvl_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_lvl_r5.value)("selected", ctx_r1.selectedlevel === pref_lvl_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_lvl_r5.viewValue, " ");
  }
}
function MainHomepageComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_loc_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_loc_r6.value)("selected", ctx_r2.selectedlocation === pref_loc_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_loc_r6.viewValue, " ");
  }
}
function MainHomepageComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_exp_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_exp_r7.value)("selected", ctx_r3.selectedexperience === pref_exp_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_exp_r7.viewValue, " ");
  }
}
class MainHomepageComponent {
  constructor(formBuilder, profiledetailservice, _snackBar, router) {
    this.formBuilder = formBuilder;
    this.profiledetailservice = profiledetailservice;
    this._snackBar = _snackBar;
    this.router = router;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.searchTerm = '';
    this.recommendedobj = new _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__.ProfileDetails();
    this.abc = [];
    this.profileForm = this.formBuilder.group({
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      skill1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      level1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // profileForm = this.formBuilder.group({});
    this.pref_loc = [{
      value: 'Hyderabad',
      viewValue: 'Hyderabad'
    }, {
      value: 'banglore',
      viewValue: 'Banglore'
    }, {
      value: 'Chennai',
      viewValue: 'Chennai'
    }, {
      value: 'Mumbai',
      viewValue: 'Mumbai'
    }, {
      value: 'Pune',
      viewValue: 'Pune'
    }, {
      value: 'Delhi',
      viewValue: 'Delhi'
    }, {
      value: 'Noida',
      viewValue: 'Noida'
    }, {
      value: 'Kolkata',
      viewValue: 'Kolkata'
    }];
    this.selectedlocation = this.pref_loc[0].value;
    this.peopleByCountry = [{
      'country': 'UK',
      'people': [{
        "name": "Douglas  Pace"
      }, {
        "name": "Mcleod  Mueller"
      }]
    }, {
      'country': 'US',
      'people': [{
        "name": "Day  Meyers"
      }, {
        "name": "Aguirre  Ellis"
      }, {
        "name": "Cook  Tyson"
      }]
    }];
    this.pref_exp = [{
      value: 'Fresher',
      viewValue: 'Fresher'
    }, {
      value: '1 - 2',
      viewValue: '1 - 2'
    }, {
      value: '2 - 3',
      viewValue: '2 - 3'
    }, {
      value: '3 - 4',
      viewValue: '3 -4'
    }, {
      value: '4 - 5',
      viewValue: '4 - 5'
    }, {
      value: '5+',
      viewValue: '5+'
    }];
    this.selectedexperience = this.pref_loc[0].value;
    this.pref_skill = [{
      value: 'Angular',
      viewValue: 'Angular'
    }, {
      value: 'Html',
      viewValue: 'Html'
    }, {
      value: 'Css',
      viewValue: 'Css'
    }, {
      value: 'Javascript',
      viewValue: 'Javascript'
    }, {
      value: 'Neo4j',
      viewValue: 'Neo4j'
    }, {
      value: 'C',
      viewValue: 'C'
    }, {
      value: 'C++',
      viewValue: 'C++'
    }, {
      value: 'Java',
      viewValue: 'Java'
    }, {
      value: 'Python',
      viewValue: 'Python'
    }];
    this.selectedskill = this.pref_loc[0].value;
    this.pref_level = [{
      value: 'Basic',
      viewValue: 'Basic'
    }, {
      value: 'Intermediate',
      viewValue: 'Intermediate'
    }, {
      value: 'Advance',
      viewValue: 'Advance'
    }];
    this.selectedlevel = this.pref_loc[0].value;
    this.durationInSeconds = 2;
  }
  selectlocation(event) {
    console.log(this.selectedlocation);
    this.selectedlocation = event.target.value;
    if (!this.selectedskill && !this.selectedexperience && !this.selectedlevel) {
      return this.profiledetailservice.getProductRecommendationsByLocation(this.selectedlocation).subscribe(data => {
        this.abc = data;
        console.log(this.abc);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectexperience(event) {
    console.log(this.selectedexperience);
    this.selectedexperience = event.target.value;
    if (!this.selectedskill && !this.selectedlevel && !this.selectedlocation) {
      return this.profiledetailservice.getProductRecommendationsByExperience(this.selectedexperience).subscribe(data => {
        this.abc = data;
        console.log(this.abc);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectskill(event) {
    console.log(this.selectedskill);
    this.selectedskill = event.target.value;
    if (!this.selectedexperience && !this.selectedlocation) {
      return this.profiledetailservice.getProductRecommendationsBySkill(this.selectedskill, this.selectedlevel).subscribe(data => {
        this.abc = data;
        console.log(this.abc);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectlevel(event) {
    console.log(this.selectedlevel);
    this.selectedlevel = event.target.value;
    this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlevel, this.selectedexperience, this.selectedlocation, this.selectedskill).subscribe(data => {
      this.abc = data;
      console.log(this.abc);
    });
  }
  ngOnInit() {
    //   if(localStorage.getItem("STEP_5")){
    //     var values =  JSON.parse(localStorage.getItem("STEP_5"));
    //     console.log(values);
    //       this.profileForm.setValue({
    //         skill1:values.skill1,
    //         location:values.location,
    //      experience:values.experience,
    //      level1:values.level1
    //      });
    // }
  }
  search() {
    console.log(this.profileForm.value);
    // if(this.profileForm.value.location == ''){
    //   alert("location cannot be empty");
    // }
    localStorage.setItem("SEARCH_KEY", JSON.stringify(this.profileForm.value));
    this.router.navigate(["/profilesearch"]);
    //   localStorage.setItem("STEP_5",JSON.stringify(this.profileForm.value));
    //   console.log(this.profileForm.value);
    //   const {skill1,location,level1,experience}=this.profileForm.value
    //   this.recommendedobj.skill1=skill1
    //   this.recommendedobj.location=location
    //   this.recommendedobj.level1=level1
    //   this.recommendedobj.experience=experience
    //   // this.recommendedobj.location=this.profileForm.value.location
    //   // this.recommendedobj.skill1 =this.profileForm.value.skill1
    //   // this.recommendedobj.level1=this.profileForm.value.level1
    //   // this.recommendedobj.experience=this.profileForm.value.experience
    //   this.profiledetailservice.getProductRecommendationsByChoice(this.recommendedobj.location,this.recommendedobj.skill1,this.recommendedobj.experience,this.recommendedobj.level1).subscribe(
    //     (data) => {
    //       console.log(data);
    //       // alert("Education Details Added SuccessFully!!");
    //       {
    //         this._snackBar.open('profile details!!', 'close', {
    //           horizontalPosition: this.horizontalPosition,
    //           verticalPosition: this.verticalPosition,
    //           duration: this.durationInSeconds * 1000,
    //         });
    //       } 
    //     },
    //     error => (console.log(error)),
    //  );
    // this.searchTerm = (event.target as HTMLInputElement).value;
    //      console.log(this.searchTerm);
    //   }
  }
  static #_ = this.ɵfac = function MainHomepageComponent_Factory(t) {
    return new (t || MainHomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MainHomepageComponent,
    selectors: [["app-main-homepage"]],
    decls: 130,
    vars: 5,
    consts: [[3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxFlex", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "part-prime"], ["fxLayout", "row wrap"], ["fxLayout", "column wrap", "fxFlex", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "a"], ["fxLayout", "column wrap", "fxFlex", "100%", "fxFlex.xs", "90%", "fxLayoutAlign", "center center", 1, "b"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "Manual"], ["fxLayout", "row", "fxFlex.xs", "100%", "fxlayoutGap", "15%", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "search-main"], ["cellspacing", "0"], ["appearance", "fill", "fxFlex.xs", "100%"], ["formControlName", "skill1", "matNativeControl", "", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["formControlName", "level1", "matNativeControl", "", 3, "change"], ["formControlName", "location", "matNativeControl", "", 3, "change"], ["formControlName", "experience", "matNativeControl", "", 3, "change"], ["mat-raised-button", "", 3, "click"], ["label", "Voice"], ["fxLayoutAlign", "center center", "fxFlex.xs", "100%", 1, "voice", "search-main"], ["appearance", "fill", 1, "voice-in"], ["matInput", "", "placeholder", "Voice search...."], ["mat-raised-button", ""], ["matSuffix", ""], ["fxLayout", "row wrap", "fxShow", "", "fxHide.xs", "", "fxFlex", "100%", "fxFlex.xs", "90%", "fxLayoutAlign", "start center", 1, "c"], ["src", "/assets/img/people_search.svg", "height", "150px", "alt", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxHide.xs", "", "fxShow", "", 1, "p2"], ["fxLayout", "column wrap", "fxFlex", "50%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "ab"], ["src", "/assets/img/searching.svg", "height", "200px", "alt", "", "srcset", ""], ["fxLayout", "column wrap", "fxFlex", "50%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "cards-pass"], ["fxLayout", "row ", "fxLayoutGap", "3%"], [1, "card-in"], ["src", "/assets/img/team.svg", "height", "150px", "alt", "", "srcset", ""], ["fxLayout", "row", "fxLayoutGap", "5%"], ["fxLayoutAlign", "center"], ["src", "/assets/img/home_run.svg", "height", "100px", "alt", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxHide.xs", "", "fxShow", "", 1, "p3"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center", 1, "sm-card"], ["src", "/assets/img/programming.svg", "height", "350px", "alt", "", "srcset", ""], ["fxLayout", "column wrap", "fxFlex", "50%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "aba"], ["fxLayout", "row", "fxLayoutGap", "10%", "fxLayoutAlign", "bottom center"], [1, "sm-card"], ["src", "/assets/img/programmer.svg", "height", "100px", "alt", "", "srcset", ""], ["src", "/assets/img/web_developer.svg", "height", "100px", "alt", "", "srcset", ""], ["src", "/assets/img/mobile_development.svg", "height", "100px", "alt", "", "srcset", ""], [3, "value", "selected"]],
    template: function MainHomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-home-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "mat-card", 4)(6, "div", 5)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Find Your Best Fit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Find.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Recruit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6)(15, "mat-tab-group", 7)(16, "mat-tab", 8)(17, "div", 9)(18, "div", 10)(19, "table", 11)(20, "tr")(21, "td")(22, "mat-form-field", 12)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Preferred Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainHomepageComponent_Template_mat_select_change_25_listener($event) {
          return ctx.selectskill($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, MainHomepageComponent_mat_option_26_Template, 2, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td")(28, "mat-form-field", 12)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Preferred Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainHomepageComponent_Template_mat_select_change_31_listener($event) {
          return ctx.selectlevel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, MainHomepageComponent_mat_option_32_Template, 2, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td")(34, "mat-form-field", 12)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Preferred Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainHomepageComponent_Template_mat_select_change_37_listener($event) {
          return ctx.selectlocation($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, MainHomepageComponent_mat_option_38_Template, 2, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td")(40, "mat-form-field", 12)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainHomepageComponent_Template_mat_select_change_43_listener($event) {
          return ctx.selectexperience($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, MainHomepageComponent_mat_option_44_Template, 2, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td")(46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainHomepageComponent_Template_button_click_46_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-tab", 19)(49, "div", 20)(50, "table", 11)(51, "tr")(52, "td")(53, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td")(56, "button", 23)(57, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 27)(62, "div", 2)(63, "div", 3)(64, "mat-card", 4)(65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h1")(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Search...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Reach out to jobseekers and hire quickly with our fast and easy search, according to your preferences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 30)(73, "div", 31)(74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p")(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "andidates can submit profiles to increase their chances to connect with you to create oppurtunities and excel in their careers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 32)(81, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Hire Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ul")(84, "li")(85, "div", 34)(86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "li")(91, "div", 34)(92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Skill level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "li")(97, "div", 34)(98, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "li")(103, "div", 34)(104, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "....");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 37)(111, "div", 2)(112, "div", 3)(113, "mat-card", 4)(114, "div", 38)(115, "div", 39)(116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 41)(119, "h3")(120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " Find the Best Talent who are prefect for your organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 42)(123, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_loc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_exp);
      }
    },
    dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultShowHideDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__.HomeNavbarComponent],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap);.p1[_ngcontent-%COMP%]{min-height:90vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 85vh;}\nmat-card[_ngcontent-%COMP%]{height:500px; border-radius: 0; background-color: rgb(0, 0, 0,0.5);}\n\nh1[_ngcontent-%COMP%]{font-family: 'Unbounded', cursive;font-size: 45px; line-height: normal;color: aliceblue;}\np[_ngcontent-%COMP%]{font-family: 'Unbounded', cursive;font-size: 15px; line-height: normal;color: aliceblue;}\nspan[_ngcontent-%COMP%]{color: aqua;}\n.search-main[_ngcontent-%COMP%]{height: 60px;width: 970px;background-color:aliceblue;border-radius: 50px; overflow: hidden;}\n.label-tab[_ngcontent-%COMP%] {font-size: 12px;color:#8348fa;}\n.b[_ngcontent-%COMP%]{margin-top: -250px;position: relative;}\n.c[_ngcontent-%COMP%]{margin:100px 0 0 250px;position: absolute;}\n.d[_ngcontent-%COMP%]{margin:38px 0 0 340px;position: absolute;}\nmat-icon[_ngcontent-%COMP%]{margin-left:15px;height:30px;}\nbutton[_ngcontent-%COMP%]{border-radius:50px ; margin-top: -25px;height: 105px;}\nmat-form-field[_ngcontent-%COMP%]{border-radius: 50px;}\n.full-width[_ngcontent-%COMP%]{width:70%;}\ntable[_ngcontent-%COMP%]{margin: 23px 0 0 0;}\n.voice-in[_ngcontent-%COMP%]{margin-left:15px;width: 850px;}\n\n@media screen and (max-width: 425px){\n   \n    .search-main[_ngcontent-%COMP%]{height: 60px;background-color:aliceblue;border-radius: 50px; overflow: hidden;}\n    .full-width[_ngcontent-%COMP%]{width:50%;}\n    .voice-in[_ngcontent-%COMP%]{margin-left:15px;width:200px;}\n}\n@media screen and (max-width: 800px){\n    .c[_ngcontent-%COMP%]{margin:120px 0 0 0px;}\n}\nh3[_ngcontent-%COMP%]{font-family: 'Unbounded', cursive;}\n.ab[_ngcontent-%COMP%]{background-color: rgb(0, 255, 255,0.5);border-radius: 100px 10px 300px 0; top:0}\n.ab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 100px;}\n.card-in[_ngcontent-%COMP%]{ height: 375px; background-color: rgb(240, 248, 255,0.7); width: 300px; border-radius: 9px;}\n.card-in[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:black;padding: 15px; line-height:25px;}\n.card-in[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:40px;}\n.card-in[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color: rgb(0, 0, 0,0.5);}\nul[_ngcontent-%COMP%]{list-style: none;}\n.p2[_ngcontent-%COMP%]{min-height:100vh; background-color: rgb(0, 0, 0,0.5);top: 5px; margin-top:-27px;}\n.p2[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{top: 0;}\n.p3[_ngcontent-%COMP%]{margin-top: -15px ;}\n.aba[_ngcontent-%COMP%]{background-color: rgba(139, 196, 196, 0.5);border-radius: 10000px 0 0 0; top:0}\n.p3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:black;}\n.card-tes[_ngcontent-%COMP%]{height:120px; background-color: rgb(240, 248, 255,0.7); width: 300px; border-radius: 9px;}\n.car-tes[_ngcontent-%COMP%] { font-size: 20px; font-family: 'Times New Roman', Times, serif; padding:5px 10px}\n/*# sourceURL=webpack://./src/app/main-homepage/main-homepage.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1ob21lcGFnZS9tYWluLWhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSSxlQUFlLENBQUM7QUFDcEIsaUJBQWlCLGdCQUFnQixDQUFDO0FBQ2xDLFNBQVMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGtDQUFrQyxDQUFDOztBQUU1RSxHQUFHLGlDQUFpQyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzRixFQUFFLGlDQUFpQyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRixLQUFLLFdBQVcsQ0FBQztBQUNqQixhQUFhLFlBQVksQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7QUFDeEcsWUFBWSxlQUFlLENBQUMsYUFBYSxDQUFDO0FBQzFDLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7QUFDekMsR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUM3QyxHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO0FBQzVDLFNBQVMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0FBQ3RDLE9BQU8sbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0FBQzVELGVBQWUsbUJBQW1CLENBQUM7QUFDbkMsWUFBWSxTQUFTLENBQUM7QUFDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QixVQUFVLGdCQUFnQixDQUFDLFlBQVksQ0FBQzs7QUFFeEM7O0lBRUksYUFBYSxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7SUFDM0YsWUFBWSxTQUFTLENBQUM7SUFDdEIsVUFBVSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7QUFDM0M7QUFDQTtJQUNJLEdBQUcsb0JBQW9CLENBQUM7QUFDNUI7QUFDQSxHQUFHLGlDQUFpQyxDQUFDO0FBQ3JDLElBQUksc0NBQXNDLENBQUMsaUNBQWlDLEVBQUUsS0FBSztBQUNuRixNQUFNLGVBQWUsQ0FBQztBQUN0QixVQUFVLGFBQWEsRUFBRSx3Q0FBd0MsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLENBQUM7QUFDcEcsV0FBVyxXQUFXLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDO0FBQ3ZELGNBQWMsY0FBYyxDQUFDO0FBQzdCLFlBQVksdUJBQXVCLENBQUM7QUFDcEMsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwQixJQUFJLGdCQUFnQixFQUFFLGtDQUFrQyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztBQUNwRixvQkFBb0IsTUFBTSxDQUFDO0FBQzNCLElBQUksa0JBQWtCLENBQUM7QUFDdkIsS0FBSywwQ0FBMEMsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLO0FBQ25GLE9BQU8sV0FBVyxDQUFDO0FBQ25CLFVBQVUsWUFBWSxFQUFFLHdDQUF3QyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztBQUNuRyxXQUFXLGVBQWUsRUFBRSw0Q0FBNEMsRUFBRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VbmJvdW5kZWQ6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XG4ucDF7bWluLWhlaWdodDo5MHZoO31cbi5jb250YWluLWNvbnRlbnR7bWluLWhlaWdodDogODV2aDt9XG5tYXQtY2FyZHtoZWlnaHQ6NTAwcHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNSk7fVxuXG5oMXtmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIGN1cnNpdmU7Zm9udC1zaXplOiA0NXB4OyBsaW5lLWhlaWdodDogbm9ybWFsO2NvbG9yOiBhbGljZWJsdWU7fVxucHtmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIGN1cnNpdmU7Zm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogbm9ybWFsO2NvbG9yOiBhbGljZWJsdWU7fVxuc3Bhbntjb2xvcjogYXF1YTt9XG4uc2VhcmNoLW1haW57aGVpZ2h0OiA2MHB4O3dpZHRoOiA5NzBweDtiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtib3JkZXItcmFkaXVzOiA1MHB4OyBvdmVyZmxvdzogaGlkZGVuO31cbi5sYWJlbC10YWIge2ZvbnQtc2l6ZTogMTJweDtjb2xvcjojODM0OGZhO31cbi5ie21hcmdpbi10b3A6IC0yNTBweDtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmN7bWFyZ2luOjEwMHB4IDAgMCAyNTBweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxuLmR7bWFyZ2luOjM4cHggMCAwIDM0MHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG5tYXQtaWNvbnttYXJnaW4tbGVmdDoxNXB4O2hlaWdodDozMHB4O31cbmJ1dHRvbntib3JkZXItcmFkaXVzOjUwcHggOyBtYXJnaW4tdG9wOiAtMjVweDtoZWlnaHQ6IDEwNXB4O31cbm1hdC1mb3JtLWZpZWxke2JvcmRlci1yYWRpdXM6IDUwcHg7fVxuLmZ1bGwtd2lkdGh7d2lkdGg6NzAlO31cbnRhYmxle21hcmdpbjogMjNweCAwIDAgMDt9XG4udm9pY2UtaW57bWFyZ2luLWxlZnQ6MTVweDt3aWR0aDogODUwcHg7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCl7XG4gICBcbiAgICAuc2VhcmNoLW1haW57aGVpZ2h0OiA2MHB4O2JhY2tncm91bmQtY29sb3I6YWxpY2VibHVlO2JvcmRlci1yYWRpdXM6IDUwcHg7IG92ZXJmbG93OiBoaWRkZW47fVxuICAgIC5mdWxsLXdpZHRoe3dpZHRoOjUwJTt9XG4gICAgLnZvaWNlLWlue21hcmdpbi1sZWZ0OjE1cHg7d2lkdGg6MjAwcHg7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICAgIC5je21hcmdpbjoxMjBweCAwIDAgMHB4O31cbn1cbmgze2ZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJywgY3Vyc2l2ZTt9XG4uYWJ7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjU1LDAuNSk7Ym9yZGVyLXJhZGl1czogMTAwcHggMTBweCAzMDBweCAwOyB0b3A6MH1cbi5hYiBwe3BhZGRpbmc6MCAxMDBweDt9XG4uY2FyZC1pbnsgaGVpZ2h0OiAzNzVweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUsMC43KTsgd2lkdGg6IDMwMHB4OyBib3JkZXItcmFkaXVzOiA5cHg7fVxuLmNhcmQtaW4gcHtjb2xvcjpibGFjaztwYWRkaW5nOiAxNXB4OyBsaW5lLWhlaWdodDoyNXB4O31cbi5jYXJkLWluIHNwYW57Zm9udC1zaXplOjQwcHg7fVxuLmNhcmQtaW4gaDF7Y29sb3I6IHJnYigwLCAwLCAwLDAuNSk7fVxudWx7bGlzdC1zdHlsZTogbm9uZTt9XG4ucDJ7bWluLWhlaWdodDoxMDB2aDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC41KTt0b3A6IDVweDsgbWFyZ2luLXRvcDotMjdweDt9XG4ucDIgLmNhcmQtY29udGFpbmVye3RvcDogMDt9XG4ucDN7bWFyZ2luLXRvcDogLTE1cHggO31cbi5hYmF7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksIDE5NiwgMTk2LCAwLjUpO2JvcmRlci1yYWRpdXM6IDEwMDAwcHggMCAwIDA7IHRvcDowfVxuLnAzIGgxe2NvbG9yOmJsYWNrO31cbi5jYXJkLXRlc3toZWlnaHQ6MTIwcHg7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0OCwgMjU1LDAuNyk7IHdpZHRoOiAzMDBweDsgYm9yZGVyLXJhZGl1czogOXB4O31cbi5jYXItdGVzIHsgZm9udC1zaXplOiAyMHB4OyBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgcGFkZGluZzo1cHggMTBweH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3949:
/*!************************************************!*\
  !*** ./src/app/moreinfo/moreinfo.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreinfoComponent": () => (/* binding */ MoreinfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 162);
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-navbar/home-navbar.component */ 9918);









class MoreinfoComponent {
  ngOnInit() {
    // this.email=localStorage.getItem('loginEmail')
    if (localStorage.getItem("CURRENT_USER") != null) {
      var values = JSON.parse(localStorage.getItem("CURRENT_USER"));
      this.username = values.username;
      this.location = values.location;
      this.email = values.email;
      this.dob = values.dob;
      this.gender = values.gender;
      this.contactnumber = values.contactnumber;
      this.highest_qualification = values.highest_qualification;
      this.specialization = values.specialization;
      this.institute_name = values.institute_name;
      this.passing_year = values.passing_year;
      this.cgpa = values.cgpa;
      this.designation = values.designation;
      this.companyname = values.companyname;
      this.noticeperiod = values.noticeperiod;
      this.experience = values.experience;
      this.currentsalary = values.currentsalary;
      this.skill1 = values.skill1;
      this.skill2 = values.skill2;
      this.skill3 = values.skill3;
      this.level1 = values.level1;
      this.level2 = values.level2;
      this.level3 = values.level3;
    }
  }
  static #_ = this.ɵfac = function MoreinfoComponent_Factory(t) {
    return new (t || MoreinfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MoreinfoComponent,
    selectors: [["app-moreinfo"]],
    decls: 86,
    vars: 21,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxFlex", "40%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "example-card"], ["mat-card-sm-image", "", "src", "/assets/img/pic_profile.svg"], ["fxLayoutAlign", "space-between center"], ["routerLink", "/profilesearch", "mat-raised-button", "", "color", "warn"], ["routerLink", "/send-email", "mat-raised-button", "", "color", "primary"], ["fxLayout", "row wrap", "fxShow", "", "fxHide.xs", "", "fxFlex", "100%", "fxFlex.xs", "90%", "fxLayoutAlign", "start center", 1, "c"], ["src", "/assets/img/proud_coder.svg", "height", "150px", "alt", ""]],
    template: function MoreinfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-home-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-card", 3)(5, "mat-card-header")(6, "mat-card-title-group")(7, "mat-card-title")(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-content")(13, "p")(14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p")(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p")(22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p")(26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p")(30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "pin_drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p")(34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "history_edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p")(38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p")(42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p")(46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "workspace_premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p")(50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p")(54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p")(58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p")(62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "work_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p")(66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p")(70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "lan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-card-actions", 5)(75, "button", 6)(76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 7)(80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Intersted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Date of Birth - ", ctx.dob, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Email - ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Gender - ", ctx.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Phone Number - ", ctx.contactnumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Preffered Location - ", ctx.location, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Highest Qualification - ", ctx.highest_qualification, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Institute name - ", ctx.institute_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Specialization - ", ctx.specialization, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CGPA - ", ctx.cgpa, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Passing-year - ", ctx.passing_year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Designation - ", ctx.designation, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Experience - ", ctx.experience, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Notice Period - ", ctx.noticeperiod, " Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Current Salary - ", ctx.currentsalary, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate6"](" Skill Set - ", ctx.skill1, "-", ctx.level1, ",", ctx.skill2, "-", ctx.level2, ",", ctx.skill3, "-", ctx.level3, "");
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultShowHideDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSmImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitleGroup, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_1__.HomeNavbarComponent],
    styles: [".example-card[_ngcontent-%COMP%] {\n    \n    margin-top: -30px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-color: lightblue;\n    border-radius: 7px;\n    transition: 0.3s;\n    text-shadow: 2%;\n    \n}\n.p1[_ngcontent-%COMP%]{min-height: 135vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:700px;}\n.c[_ngcontent-%COMP%]{position:absolute; left: 50px;bottom:100px;}\n\n\n    a[_ngcontent-%COMP%]{\n        font-family: 'Times New Roman', Times, serif;\n        text-decoration: none;\n    }\n\n@media screen and (max-width:500px){\n    .example-card[_ngcontent-%COMP%] {\n        left: 0%;\n    }\n}\n\n#photo[_ngcontent-%COMP%]{\n    margin-left: 15%;\n    margin-top: 5%;\n}\n/*# sourceURL=webpack://./src/app/moreinfo/moreinfo.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9yZWluZm8vbW9yZWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsNERBQTREO0lBQzVELDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5CO0FBQ0EsSUFBSSxpQkFBaUIsQ0FBQztBQUN0QixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDbEMsWUFBWSxZQUFZLENBQUM7QUFDekIsR0FBRyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDOzs7SUFHMUM7UUFDSSw0Q0FBNEM7UUFDNUMscUJBQXFCO0lBQ3pCOztBQUVKO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB0ZXh0LXNoYWRvdzogMiU7XG4gICAgXG59XG4ucDF7bWluLWhlaWdodDogMTM1dmg7fVxuLmNvbnRhaW4tY29udGVudHttaW4taGVpZ2h0OiA5MHZoO31cbi5wYXJ0LXByaW1le2hlaWdodDo3MDBweDt9XG4uY3twb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNTBweDtib3R0b206MTAwcHg7fVxuXG5cbiAgICBhe1xuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCl7XG4gICAgLmV4YW1wbGUtY2FyZCB7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgIH1cbn1cblxuI3Bob3Rve1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8354:
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/profile-details/profile-details */ 7407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/profile-details/profile-details.service */ 8067);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);













class MyProfileComponent {
  constructor(formBuilder, router, profiledetailservice, _snackBar) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.profiledetailservice = profiledetailservice;
    this._snackBar = _snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.user = new _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__.ProfileDetails();
    this.form = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.durationInSeconds = 2;
  }
  // });ngOnInit():void {
  // this.email=localStorage.getItem('loginEmail')
  ngOnInit() {
    // this.username = "soniya";
    this.email = localStorage.getItem('loginEmail');
    if (localStorage.getItem("STEP_1") != null) {
      var values = JSON.parse(localStorage.getItem("STEP_1"));
      this.username = values.username;
      this.location = values.location;
      this.dob = values.dob;
      this.gender = values.gender;
      this.contactnumber = values.contactnumber;
    }
    if (localStorage.getItem("STEP_2") != null) {
      var values = JSON.parse(localStorage.getItem("STEP_2"));
      this.highest_qualification = values.highest_qualification;
      this.specialization = values.specialization;
      this.institute_name = values.institute_name;
      this.passing_year = values.passing_year;
      this.cgpa = values.cgpa;
    }
    if (localStorage.getItem("STEP_3") != null) {
      var values = JSON.parse(localStorage.getItem("STEP_3"));
      this.designation = values.designation;
      this.companyname = values.companyname;
      this.noticeperiod = values.noticeperiod;
      this.experience = values.experience;
      this.currentsalary = values.currentsalary;
    }
    if (localStorage.getItem("STEP_4") != null) {
      var values = JSON.parse(localStorage.getItem("STEP_4"));
      this.skill1 = values.skill1;
      this.level1 = values.level1;
      this.skill2 = values.skill2;
      this.level2 = values.level2;
      this.skill3 = values.skill3;
      this.level3 = values.level3;
    }
  }
  deleteprofile() {
    this.profiledetailservice.deleteproductbyId(localStorage.getItem("loginEmail")).subscribe(data => {
      window.localStorage.removeItem('loginEmail');
      window.localStorage.removeItem('STEP_1');
      window.localStorage.removeItem('STEP_2');
      window.localStorage.removeItem('STEP_3');
      window.localStorage.removeItem('STEP_4');
      // this.profiledata = data;
      // console.log(this.profiledata);
      // this.email = this.profiledata.email;
      // this.username = this.profiledata.username;
      // this.contactnumber = this.profiledata.contactnumber;
      // this.dob = this.profiledata.dob;
      // this.gender = this.profiledata.gender;
      // this.location = this.profiledata.location;
      // this.highest_qualification = this.profiledata.highest_qualification;
      // this.specialization = this.profiledata.specialization;
      // this.institute_name = this.profiledata.institute_name;
      // this.passing_year = this.profiledata.passing_year;
      // this.cgpa = this.profiledata.cgpa;
      // this.designation = this.profiledata.designation;
      // this.companyname = this.profiledata.companyname;
      // this.noticeperiod = this.profiledata.noticeperiod;
      // this.experience = this.profiledata.experience;
      // this.currentsalary = this.profiledata.currentsalary;
      // this.skill1 = this.profiledata.skill1;
      // this.skill2 = this.profiledata.skill2;
      // this.skill3 = this.profiledata.skill3;
      // this.level1 = this.profiledata.level1;
      // this.level2 = this.profiledata.level2;
      // this.level3 = this.profiledata.level3;
      // });
      //   this.profiledetailservice.deleteproductbyId(this.profiledata)
      // .subscribe((data) =>{
      // alert("Education Details Added SuccessFully!!");
      {
        this._snackBar.open('User Deleted SuccessFully!!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        });
      }
    }, error => console.log(error));
  }
  static #_ = this.ɵfac = function MyProfileComponent_Factory(t) {
    return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MyProfileComponent,
    selectors: [["app-my-profile"]],
    decls: 159,
    vars: 22,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxFlex", "85%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "100%", "fxFlex.xs", "100%", 1, "part-prime"], ["fxLayout", "row wrap"], ["fxLayout", "row wrap", "fxFlex", "50%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "a"], ["fxFlex", "70%", "fxFlex.xs", "100%"], ["fxLayout", "row wrap", "fxFlex", "50%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "b"], ["fxLayout", "row wrap", "fxFlex", "50%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "c"], ["fxLayout", "row wrap", "fxFlex", "50%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "d"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxLayoutAlign", "center"], ["fxLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "end", 1, "button"], ["mat-raised-button", "", "color", "primary", "routerLink", "/personal-details"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
    template: function MyProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-card")(5, "div", 3)(6, "div", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-list", 5)(11, "div")(12, "mat-list-item")(13, "p")(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Name -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-list-item")(19, "p")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Email -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-list-item")(25, "p")(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Phone Number -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-list-item")(31, "p")(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Date Of Birth -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-list-item")(37, "p")(38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Gender -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-list-item")(43, "p")(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Preferred Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 6)(48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-list", 5)(52, "mat-list-item")(53, "p")(54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Highest Qualification -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-list-item")(59, "p")(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Specialization -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-list-item")(65, "p")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Institue Name - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-list-item")(71, "p")(72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Year of Passing - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-list-item")(77, "p")(78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Overall CGPA - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 3)(82, "div", 7)(83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "mat-list", 5)(87, "mat-list-item")(88, "p")(89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Your Designation -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "mat-list-item")(94, "p")(95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Current Comany name -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "mat-list-item")(100, "p")(101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Current Salary -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "mat-list-item")(106, "p")(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Total Years Of Experience -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "mat-list-item")(112, "p")(113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Notice Period -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 8)(117, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "mat-list", 5)(121, "mat-list-item")(122, "div", 9)(123, "p")(124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Skill 1 -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "p")(128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Level -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "mat-list-item")(133, "div", 9)(134, "p")(135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Skill 2 -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "p")(139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Level -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "mat-list-item")(144, "div", 9)(145, "p")(146, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Skill 3 -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "p")(150, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Level -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "mat-card-actions", 10)(154, "div", 11)(155, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_157_listener() {
          return ctx.deleteprofile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.contactnumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.dob, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.highest_qualification, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.specialization, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.institute_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.passing_year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.cgpa, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.designation, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.companyname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentsalary, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.experience, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.noticeperiod, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.skill1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.level1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.skill2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.level2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.skill3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.level3, "");
      }
    },
    dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__.TopnavbarComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height:100%;}\n.contain-content[_ngcontent-%COMP%]{min-height: 100vh;}\n.part-prime[_ngcontent-%COMP%]{height:500px;}\nmat-card[_ngcontent-%COMP%]{  margin-top: -50px;border-radius:35px;background-color: rgb(0, 0, 0,0.5);}\np[_ngcontent-%COMP%]{color: aliceblue;}\nh2[_ngcontent-%COMP%]{margin-right:35px; color: aliceblue;   \n    border: 5px solid aliceblue;\n    border-radius: 20px;\n    padding: 6px;}\nmat-divider[_ngcontent-%COMP%]{background-color:#001122;;}\n.a[_ngcontent-%COMP%]{height:300px;margin-top: 10px;}\n.b[_ngcontent-%COMP%]{height:300px; margin-top: 10px;}\n.c[_ngcontent-%COMP%]{height:300px; margin-top: 10px;}\n.d[_ngcontent-%COMP%]{height:300px;margin-top: 10px;}\n\n@media screen and (max-width: 425px){\n    mat-card[_ngcontent-%COMP%]{\n        margin-top: 2.5px;\n    }\n    h2[_ngcontent-%COMP%]{margin:55px 0 0 0;}\n    .d[_ngcontent-%COMP%]{height:230px;margin-top: 0px;}\n}\n@media screen and (max-width: 768px){\n    mat-card[_ngcontent-%COMP%]{\n        margin-top: 0px;\n    }\n}\n/*# sourceURL=webpack://./src/app/my-profile/my-profile.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxlQUFlLENBQUM7QUFDcEIsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ25DLFlBQVksWUFBWSxDQUFDO0FBQ3pCLFdBQVcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsa0NBQWtDLENBQUM7QUFDbkYsRUFBRSxnQkFBZ0IsQ0FBQztBQUNuQixHQUFHLGlCQUFpQixFQUFFLGdCQUFnQjtJQUNsQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVksQ0FBQztBQUNqQixZQUFZLHdCQUF3QixFQUFFO0FBQ3RDLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQ2pDLEdBQUcsWUFBWSxFQUFFLGdCQUFnQixDQUFDO0FBQ2xDLEdBQUcsWUFBWSxFQUFFLGdCQUFnQixDQUFDO0FBQ2xDLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDOztBQUVqQztJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0EsR0FBRyxpQkFBaUIsQ0FBQztJQUNyQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7QUFDcEM7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnAxe21pbi1oZWlnaHQ6MTAwJTt9XG4uY29udGFpbi1jb250ZW50e21pbi1oZWlnaHQ6IDEwMHZoO31cbi5wYXJ0LXByaW1le2hlaWdodDo1MDBweDt9XG5tYXQtY2FyZHsgIG1hcmdpbi10b3A6IC01MHB4O2JvcmRlci1yYWRpdXM6MzVweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjUpO31cbnB7Y29sb3I6IGFsaWNlYmx1ZTt9XG5oMnttYXJnaW4tcmlnaHQ6MzVweDsgY29sb3I6IGFsaWNlYmx1ZTsgICBcbiAgICBib3JkZXI6IDVweCBzb2xpZCBhbGljZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiA2cHg7fVxubWF0LWRpdmlkZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAxMTIyOzt9XG4uYXtoZWlnaHQ6MzAwcHg7bWFyZ2luLXRvcDogMTBweDt9XG4uYntoZWlnaHQ6MzAwcHg7IG1hcmdpbi10b3A6IDEwcHg7fVxuLmN7aGVpZ2h0OjMwMHB4OyBtYXJnaW4tdG9wOiAxMHB4O31cbi5ke2hlaWdodDozMDBweDttYXJnaW4tdG9wOiAxMHB4O31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpe1xuICAgIG1hdC1jYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVweDtcbiAgICB9XG4gICAgaDJ7bWFyZ2luOjU1cHggMCAwIDA7fVxuICAgIC5ke2hlaWdodDoyMzBweDttYXJnaW4tdG9wOiAwcHg7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIG1hdC1jYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5326:
/*!****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher),
/* harmony export */   "PersonalDetailsComponent": () => (/* binding */ PersonalDetailsComponent)
/* harmony export */ });
/* harmony import */ var _service_personal_details_personal_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/personal-details/personal-details */ 6728);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_personal_details_personal_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/personal-details/personal-details.service */ 9598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 162);




















function PersonalDetailsComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Phone number is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function PersonalDetailsComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter valid number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PersonalDetailsComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_loc_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_loc_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_loc_r4.viewValue, " ");
  }
}
class MyErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
class PersonalDetailsComponent {
  constructor(formBuilder, personalDetailservice, router, _snackBar) {
    this.formBuilder = formBuilder;
    this.personalDetailservice = personalDetailservice;
    this.router = router;
    this._snackBar = _snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.user = new _service_personal_details_personal_details__WEBPACK_IMPORTED_MODULE_0__.PersonalDetails();
    this.contactnumberPattern = new RegExp(/(^$|[0-9]{10})/);
    this.matcher = new MyErrorStateMatcher();
    this.pref_loc = [{
      value: 'Hyderabad',
      viewValue: 'Hyderabad'
    }, {
      value: 'Banglore',
      viewValue: 'Banglore'
    }, {
      value: 'Chennai',
      viewValue: 'Chennai'
    }, {
      value: 'Mumbai',
      viewValue: 'Mumbai'
    }, {
      value: 'Pune',
      viewValue: 'Pune'
    }, {
      value: 'Delhi',
      viewValue: 'Delhi'
    }, {
      value: 'Noida',
      viewValue: 'Noida'
    }, {
      value: 'Kolkata',
      viewValue: 'Kolkata'
    }];
    this.durationInSeconds = 2;
  }
  ngOnInit() {
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      contactnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[6-9]\\d{9}')]),
      dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    if (localStorage.getItem("STEP_1")) {
      var values = JSON.parse(localStorage.getItem("STEP_1"));
      console.log(values);
      this.profileForm.setValue({
        username: values.username,
        email: values.email,
        dob: values.dob,
        gender: values.gender,
        contactnumber: values.contactnumber,
        location: values.location
      });
    }
  }
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_1", JSON.stringify(this.profileForm.value));
    const {
      email,
      username,
      contactnumber,
      dob,
      location,
      gender
    } = this.profileForm.value;
    this.user.email = localStorage.getItem('loginEmail');
    this.user.username = username;
    this.user.contactnumber = contactnumber;
    this.user.dob = dob;
    this.user.location = location;
    this.user.gender = gender;
    if (username == "" || contactnumber == "" || dob == "" || location == "" || gender == "") {
      // alert("Fields cannot be empty!")
      {
        this._snackBar.open('Fields cannot be empty!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        });
      }
    } else {
      console.log("else part");
      this.router.navigate(["/education-details"]);
      this.personalDetailservice.addApi(this.user).subscribe(data => {
        //  console.log("Personal Details Added SuccessFully!!");
        {
          this._snackBar.open('Personal Details Added SuccessFully', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
        }
      }, error => console.log(error));
    }
  }
  static #_ = this.ɵfac = function PersonalDetailsComponent_Factory(t) {
    return new (t || PersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_personal_details_personal_details_service__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PersonalDetailsComponent,
    selectors: [["app-personal-details"]],
    decls: 55,
    vars: 11,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["matRipple", "", "routerLink", "/fill-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "full-width"], ["formControlName", "username", "matInput", ""], ["matInput", "", "placeholder", "Phone Numer", "formControlName", "contactnumber", "maxlength", "10", 3, "errorStateMatcher"], [4, "ngIf"], ["appearance", "fill", 1, "full-width"], ["formControlName", "dob", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "location"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 1, "row"], ["fxLayout", "row wrap", "formControlName", "gender", 1, "margin-left"], [1, "gen"], ["value", "Male", "fxLayout", "row wrap", "color", "Secondary"], ["value", "Female", "fxLayoutAlign", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matRipple", "", "routerLink", "/education-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], [3, "value"]],
    template: function PersonalDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "form", 4)(7, "mat-card")(8, "mat-card-header", 5)(9, "mat-card-title")(10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Profile Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card-content")(13, "div", 6)(14, "mat-form-field", 7)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 7)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PersonalDetailsComponent_mat_error_22_Template, 4, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PersonalDetailsComponent_mat_error_23_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 11)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Select DOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 12)(28, "mat-datepicker-toggle", 13)(29, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 11)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Preferred Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, PersonalDetailsComponent_mat_option_35_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "mat-radio-group", 18)(38, "mat-label", 19)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-radio-button", 20)(42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-radio-button", 21)(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-card-actions", 5)(48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PersonalDetailsComponent_Template_button_click_48_listener() {
          return ctx.saveForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 23)(51, "mat-icon")(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " arrow_forward_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "app-footer");
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profileForm.get("contactnumber").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.profileForm.get("contactnumber").hasError("required") && ctx.profileForm.get("contactnumber").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_loc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height: 95vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:550px;}\nmat-card[_ngcontent-%COMP%]{border-radius:35px;background-color: rgb(0, 0, 0,0.5);}\np[_ngcontent-%COMP%]{margin-top: 15px;color: aliceblue;}\nh2[_ngcontent-%COMP%]{color: aliceblue;}\n.full-width[_ngcontent-%COMP%]{width: 75%;}\n.example-ripple-container[_ngcontent-%COMP%] {\n    display: flex;\n    cursor: pointer;\n    box-shadow: none;\n}\n@media screen and (max-width: 425px){\n    mat-card[_ngcontent-%COMP%]{\n        margin-top: 2.5px;\n    }\n    mat-radio-group[_ngcontent-%COMP%]{\n        margin-top: -10px;\n    }   \n}\n/*# sourceURL=webpack://./src/app/personal-details/personal-details.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGVyc29uYWwtZGV0YWlscy9wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDbEMsWUFBWSxZQUFZLENBQUM7QUFDekIsU0FBUyxrQkFBa0IsQ0FBQyxrQ0FBa0MsQ0FBQztBQUMvRCxFQUFFLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBQ3BDLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEIsWUFBWSxVQUFVLENBQUM7QUFDdkI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnAxe21pbi1oZWlnaHQ6IDk1dmg7fVxuLmNvbnRhaW4tY29udGVudHttaW4taGVpZ2h0OiA5MHZoO31cbi5wYXJ0LXByaW1le2hlaWdodDo1NTBweDt9XG5tYXQtY2FyZHtib3JkZXItcmFkaXVzOjM1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC41KTt9XG5we21hcmdpbi10b3A6IDE1cHg7Y29sb3I6IGFsaWNlYmx1ZTt9XG5oMntjb2xvcjogYWxpY2VibHVlO31cbi5mdWxsLXdpZHRoe3dpZHRoOiA3NSU7fVxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICBtYXQtY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cHg7XG4gICAgfVxuICAgIG1hdC1yYWRpby1ncm91cHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfSAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9585:
/*!**********************************************************!*\
  !*** ./src/app/profilesearch/profilesearch.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesearchComponent": () => (/* binding */ ProfilesearchComponent),
/* harmony export */   "TabGroupPaginatedExample": () => (/* binding */ TabGroupPaginatedExample)
/* harmony export */ });
/* harmony import */ var _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/profile-details/profile-details */ 7407);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/profile-details/profile-details.service */ 8067);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 162);
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-navbar/home-navbar.component */ 9918);




















function ProfilesearchComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_skl_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_skl_r5.value)("selected", ctx_r0.selectedskill === pref_skl_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_skl_r5.viewValue, " ");
  }
}
function ProfilesearchComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_lvl_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_lvl_r6.value)("selected", ctx_r1.selectedlevel === pref_lvl_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_lvl_r6.viewValue, " ");
  }
}
function ProfilesearchComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_loc_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_loc_r7.value)("selected", ctx_r2.selectedlocation === pref_loc_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_loc_r7.viewValue, " ");
  }
}
function ProfilesearchComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_exp_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_exp_r8.value)("selected", ctx_r3.selectedexperience === pref_exp_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_exp_r8.viewValue, " ");
  }
}
function ProfilesearchComponent_mat_card_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 25)(1, "mat-card-header")(2, "mat-card-title", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content")(5, "div", 27)(6, "div", 28)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 29)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "history_edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 27)(15, "div", 29)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "pin_drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 29)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "lan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-card-actions", 30)(24, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilesearchComponent_mat_card_50_Template_a_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const user_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.gotomoreinfo(user_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "More Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.highest_qualification);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r9.skill1);
  }
}
const _c0 = function () {
  return [6, 12, 24, 42];
};
class ProfilesearchComponent {
  constructor(formBuilder, profiledetailservice, _snackBar, router) {
    this.formBuilder = formBuilder;
    this.profiledetailservice = profiledetailservice;
    this._snackBar = _snackBar;
    this.router = router;
    this.lowValue = 0;
    this.highValue = 6;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.searchTerm = '';
    this.recommendedobj = new _service_profile_details_profile_details__WEBPACK_IMPORTED_MODULE_0__.ProfileDetails();
    this.userlist = [];
    this.profileForm = this.formBuilder.group({
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      skill1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      level1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    // profileForm = this.formBuilder.group({});
    this.pref_loc = [{
      value: 'Hyderabad',
      viewValue: 'Hyderabad'
    }, {
      value: 'banglore',
      viewValue: 'Banglore'
    }, {
      value: 'Chennai',
      viewValue: 'Chennai'
    }, {
      value: 'Mumbai',
      viewValue: 'Mumbai'
    }, {
      value: 'Pune',
      viewValue: 'Pune'
    }, {
      value: 'Delhi',
      viewValue: 'Delhi'
    }, {
      value: 'Noida',
      viewValue: 'Noida'
    }, {
      value: 'Kolkata',
      viewValue: 'Kolkata'
    }];
    this.selectedlocation = this.pref_loc[0].value;
    this.pref_exp = [{
      value: 'Fresher',
      viewValue: 'Fresher'
    }, {
      value: '1 - 2',
      viewValue: '1 - 2'
    }, {
      value: '2 - 3',
      viewValue: '2 - 3'
    }, {
      value: '3 - 4',
      viewValue: '3 -4'
    }, {
      value: '4 - 5',
      viewValue: '4 - 5'
    }, {
      value: '5+',
      viewValue: '5+'
    }];
    this.selectedexperience = this.pref_loc[0].value;
    this.pref_skill = [{
      value: 'Angular',
      viewValue: 'Angular'
    }, {
      value: 'Html',
      viewValue: 'Html'
    }, {
      value: 'Css',
      viewValue: 'Css'
    }, {
      value: 'Javascript',
      viewValue: 'Javascript'
    }, {
      value: 'Neo4j',
      viewValue: 'Neo4j'
    }, {
      value: 'C',
      viewValue: 'C'
    }, {
      value: 'C++',
      viewValue: 'C++'
    }, {
      value: 'Java',
      viewValue: 'Java'
    }, {
      value: 'Python',
      viewValue: 'Python'
    }];
    this.selectedskill = this.pref_loc[0].value;
    this.pref_level = [{
      value: 'Basic',
      viewValue: 'Basic'
    }, {
      value: 'Intermediate',
      viewValue: 'Intermediate'
    }, {
      value: 'Advance',
      viewValue: 'Advance'
    }];
    this.selectedlevel = this.pref_loc[0].value;
    // recommendedobj:ProfileDetails=new ProfileDetails;
    this.durationInSeconds = 2;
  }
  selectlocation(event) {
    console.log(this.selectedlocation);
    this.selectedlocation = event.target.value;
    if (!this.selectedskill && !this.selectedexperience && !this.selectedlevel) {
      return this.profiledetailservice.getProductRecommendationsByLocation(this.selectedlocation).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectexperience(event) {
    console.log(this.selectedexperience);
    this.selectedexperience = event.target.value;
    if (!this.selectedskill && !this.selectedlevel && !this.selectedlocation) {
      return this.profiledetailservice.getProductRecommendationsByExperience(this.selectedexperience).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectskill(event) {
    console.log(this.selectedskill);
    this.selectedskill = event.target.value;
    if (!this.selectedexperience && !this.selectedlocation) {
      return this.profiledetailservice.getProductRecommendationsBySkill(this.selectedskill, this.selectedlevel).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation, this.selectedskill, this.selectedexperience, this.selectedlevel);
    }
  }
  selectlevel(event) {
    console.log(this.selectedlevel);
    this.selectedlevel = event.target.value;
    this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlevel, this.selectedexperience, this.selectedlocation, this.selectedskill).subscribe(data => {
      this.userlist = data;
      console.log(this.userlist);
    });
  }
  ngOnInit() {
    if (localStorage.getItem("SEARCH_KEY") != null) {
      var values = JSON.parse(localStorage.getItem("SEARCH_KEY"));
      console.log(values);
      this.profileForm.setValue({
        location: values.location,
        skill1: values.skill1,
        experience: values.experience,
        level1: values.level1
      });
      this.search();
    }
  }
  getPaginatorData(event) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  gotomoreinfo(user) {
    console.log(user);
    localStorage.setItem("CURRENT_USER", JSON.stringify(user));
  }
  search() {
    console.log("search is calling");
    const {
      skill1,
      location,
      level1,
      experience
    } = this.profileForm.value;
    this.recommendedobj.skill1 = skill1;
    this.recommendedobj.location = location;
    this.recommendedobj.level1 = level1;
    this.recommendedobj.experience = experience;
    if (this.recommendedobj.skill1 == "" && this.recommendedobj.level1 == "" && this.recommendedobj.experience == "") {
      return this.profiledetailservice.getProductRecommendationsByLocation(this.recommendedobj.location).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    }
    if (this.recommendedobj.skill1 == "" && this.recommendedobj.level1 == "" && this.recommendedobj.location == "") {
      return this.profiledetailservice.getProductRecommendationsByExperience(this.recommendedobj.experience).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    }
    if (this.recommendedobj.experience == "" && this.recommendedobj.location == "") {
      return this.profiledetailservice.getProductRecommendationsBySkill(this.recommendedobj.skill1, this.recommendedobj.level1).subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
      });
    } else {
      this.profiledetailservice.getProductRecommendationsByChoice(this.recommendedobj.location, this.recommendedobj.skill1, this.recommendedobj.experience, this.recommendedobj.level1).subscribe(data => {
        console.log(data);
        this.userlist = data;
        console.log(this.userlist);
        // alert("Education Details Added SuccessFully!!");
      }, error => console.log(error));
    }
  }
  static #_ = this.ɵfac = function ProfilesearchComponent_Factory(t) {
    return new (t || ProfilesearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_profile_details_profile_details_service__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProfilesearchComponent,
    selectors: [["app-profilesearch"]],
    decls: 53,
    vars: 13,
    consts: [[3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxLayout", "column wrap", "fxFlex", "100%", "fxFlex.xs", "90%", "fxLayoutAlign", "center center", 1, "b"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "Manual"], ["fxLayout", "row", "fxFlex.xs", "100%", "fxlayoutGap", "15%", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "search-main"], ["cellspacing", "0"], ["appearance", "fill", "fxFlex.xs", "100%"], ["formControlName", "skill1", "matNativeControl", "", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["formControlName", "level1", "matNativeControl", "", 3, "change"], ["formControlName", "location", "matNativeControl", "", 3, "change"], ["formControlName", "experience", "matNativeControl", "", 3, "change"], ["mat-raised-button", "", 3, "click"], ["label", "Voice"], ["fxLayoutAlign", "center center", "fxFlex.xs", "100%", 1, "voice", "search-main"], ["appearance", "fill", 1, "voice-in"], ["matInput", "", "placeholder", "Voice search...."], ["mat-raised-button", ""], ["matSuffix", ""], ["pageSize", "6", "showFirstLastButtons", "false", 2, "padding-bottom", "20px", "background-color", "inherit", "padding-right", "30px", 3, "length", "pageSizeOptions", "page"], [1, "flexbox"], ["class", "example-card", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "example-card"], [2, "color", "black"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "10%"], ["fxLayout", "row", "fxLayoutGap", "15%"], ["fxLayout", "row"], ["fxLayoutAlign", "end"], ["routerLink", "/moreinfo", 3, "click"]],
    template: function ProfilesearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-home-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 0)(2, "div", 1)(3, "div", 2)(4, "mat-tab-group", 3)(5, "mat-tab", 4)(6, "div", 5)(7, "div", 6)(8, "table", 7)(9, "tr")(10, "td")(11, "mat-form-field", 8)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Preferred Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfilesearchComponent_Template_mat_select_change_14_listener($event) {
          return ctx.selectskill($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProfilesearchComponent_mat_option_15_Template, 2, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td")(17, "mat-form-field", 8)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Preferred Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfilesearchComponent_Template_mat_select_change_20_listener($event) {
          return ctx.selectlevel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProfilesearchComponent_mat_option_21_Template, 2, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td")(23, "mat-form-field", 8)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Preferred Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfilesearchComponent_Template_mat_select_change_26_listener($event) {
          return ctx.selectlocation($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProfilesearchComponent_mat_option_27_Template, 2, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td")(29, "mat-form-field", 8)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfilesearchComponent_Template_mat_select_change_32_listener($event) {
          return ctx.selectexperience($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProfilesearchComponent_mat_option_33_Template, 2, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td")(35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilesearchComponent_Template_button_click_35_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-tab", 15)(38, "div", 16)(39, "table", 7)(40, "tr")(41, "td")(42, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "td")(45, "button", 19)(46, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function ProfilesearchComponent_Template_mat_paginator_page_48_listener($event) {
          return ctx.getPaginatorData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ProfilesearchComponent_mat_card_50_Template, 26, 5, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_loc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_exp);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.userlist.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](51, 8, ctx.userlist, ctx.lowValue, ctx.highValue));
      }
    },
    dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__.HomeNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe],
    styles: [".example-card[_ngcontent-%COMP%] {\n    width: calc(30% - 40px);\n    margin: 0px 20px;\n    border-radius: 10px;\n    color: black;\n    background-color: aliceblue;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 30px;\n    left: 5%;\n  \n  }\n  mat-card-content[_ngcontent-%COMP%]{margin-left: -35px;}\n\n .flexbox[_ngcontent-%COMP%]{\n    margin-top: 7px;\n    margin-bottom: 80px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n\n }\n\n @media screen and (max-width: 900px){\n   .example-card[_ngcontent-%COMP%]{\n      width: calc(50% - 40px);\n   }\n}\n\n@media screen and (max-width: 425px){\n   .example-card[_ngcontent-%COMP%]{\n      width: calc(100% - 40px);\n   }\n}\n\n.table[_ngcontent-%COMP%]{\n   align-items: center;\n   margin-top: 10px;\n}\n.p1[_ngcontent-%COMP%]{\n   margin-top: 60px;\n}\n.p1[_ngcontent-%COMP%]{min-height:15vh;}\n\n mat-card[_ngcontent-%COMP%]{height:150px; border-radius: 0; background-color: aliceblue;}\n \n .search-main[_ngcontent-%COMP%]{height: 60px;width: 970px;background-color:aliceblue;border-radius: 50px; overflow: hidden;}\n .label-tab[_ngcontent-%COMP%] {font-size: 12px;color:#8348fa;}\n .b[_ngcontent-%COMP%]{margin-top: -100px;position: relative;}\n mat-icon[_ngcontent-%COMP%]{margin-left:15px;height:30px;}\n button[_ngcontent-%COMP%]{border-radius:50px ; margin-top: -25px;height: 105px;}\n mat-form-field[_ngcontent-%COMP%]{border-radius: 50px;}\n .full-width[_ngcontent-%COMP%]{width:70%;}\n table[_ngcontent-%COMP%]{margin: 23px 0 0 0;}\n .voice-in[_ngcontent-%COMP%]{margin-left:15px;width: 850px;}\n \n\n \n @media screen and (max-width: 425px){\n    \n     .search-main[_ngcontent-%COMP%]{height: 60px;background-color:aliceblue;border-radius: 50px; overflow: hidden;}\n     .full-width[_ngcontent-%COMP%]{width:50%;}\n     .voice-in[_ngcontent-%COMP%]{margin-left:15px;width:200px;}\n }\n @media screen and (max-width: 800px){\n     .c[_ngcontent-%COMP%]{margin:120px 0 0 0px;}\n }\n/*# sourceURL=webpack://./src/app/profilesearch/profilesearch.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZXNlYXJjaC9wcm9maWxlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsUUFBUTs7RUFFVjtFQUNBLGlCQUFpQixrQkFBa0IsQ0FBQzs7Q0FFckM7SUFDRyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1COztDQUV0Qjs7Q0FFQTtHQUNFO01BQ0csdUJBQXVCO0dBQzFCO0FBQ0g7O0FBRUE7R0FDRztNQUNHLHdCQUF3QjtHQUMzQjtBQUNIOztBQUVBO0dBQ0csbUJBQW1CO0dBQ25CLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csZ0JBQWdCO0FBQ25CO0FBQ0EsSUFBSSxlQUFlLENBQUM7O0NBRW5CLFNBQVMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDOztDQUVyRSxhQUFhLFlBQVksQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7Q0FDeEcsWUFBWSxlQUFlLENBQUMsYUFBYSxDQUFDO0NBQzFDLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7Q0FDekMsU0FBUyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Q0FDdEMsT0FBTyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7Q0FDNUQsZUFBZSxtQkFBbUIsQ0FBQztDQUNuQyxZQUFZLFNBQVMsQ0FBQztDQUN0QixNQUFNLGtCQUFrQixDQUFDO0NBQ3pCLFVBQVUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDOzs7O0NBSXhDOztLQUVJLGFBQWEsWUFBWSxDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO0tBQzNGLFlBQVksU0FBUyxDQUFDO0tBQ3RCLFVBQVUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0NBQzNDO0NBQ0E7S0FDSSxHQUFHLG9CQUFvQixDQUFDO0NBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMzAlIC0gNDBweCk7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiA1JTtcbiAgXG4gIH1cbiAgbWF0LWNhcmQtY29udGVudHttYXJnaW4tbGVmdDogLTM1cHg7fVxuXG4gLmZsZXhib3h7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuIH1cblxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgIC5leGFtcGxlLWNhcmR7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpe1xuICAgLmV4YW1wbGUtY2FyZHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgIH1cbn1cblxuLnRhYmxle1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucDF7XG4gICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLnAxe21pbi1oZWlnaHQ6MTV2aDt9XG5cbiBtYXQtY2FyZHtoZWlnaHQ6MTUwcHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTt9XG4gXG4gLnNlYXJjaC1tYWlue2hlaWdodDogNjBweDt3aWR0aDogOTcwcHg7YmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7Ym9yZGVyLXJhZGl1czogNTBweDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4gLmxhYmVsLXRhYiB7Zm9udC1zaXplOiAxMnB4O2NvbG9yOiM4MzQ4ZmE7fVxuIC5ie21hcmdpbi10b3A6IC0xMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7fVxuIG1hdC1pY29ue21hcmdpbi1sZWZ0OjE1cHg7aGVpZ2h0OjMwcHg7fVxuIGJ1dHRvbntib3JkZXItcmFkaXVzOjUwcHggOyBtYXJnaW4tdG9wOiAtMjVweDtoZWlnaHQ6IDEwNXB4O31cbiBtYXQtZm9ybS1maWVsZHtib3JkZXItcmFkaXVzOiA1MHB4O31cbiAuZnVsbC13aWR0aHt3aWR0aDo3MCU7fVxuIHRhYmxle21hcmdpbjogMjNweCAwIDAgMDt9XG4gLnZvaWNlLWlue21hcmdpbi1sZWZ0OjE1cHg7d2lkdGg6IDg1MHB4O31cbiBcblxuIFxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICBcbiAgICAgLnNlYXJjaC1tYWlue2hlaWdodDogNjBweDtiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtib3JkZXItcmFkaXVzOiA1MHB4OyBvdmVyZmxvdzogaGlkZGVuO31cbiAgICAgLmZ1bGwtd2lkdGh7d2lkdGg6NTAlO31cbiAgICAgLnZvaWNlLWlue21hcmdpbi1sZWZ0OjE1cHg7d2lkdGg6MjAwcHg7fVxuIH1cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XG4gICAgIC5je21hcmdpbjoxMjBweCAwIDAgMHB4O31cbiB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class TabGroupPaginatedExample {
  constructor() {
    this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
  }
}

/***/ }),

/***/ 2375:
/*!****************************************************!*\
  !*** ./src/app/send-email/send-email.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendEmailComponent": () => (/* binding */ SendEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_send_email_send_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/send-email/send-email */ 3077);
/* harmony import */ var _email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email-dialog/email-dialog.component */ 6756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_send_email_send_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/send-email/send-email.service */ 2191);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 162);
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-navbar/home-navbar.component */ 9918);

















class SendEmailComponent {
  constructor(formBuilder, router, emailservice, _snackBar, dialog) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.emailservice = emailservice;
    this._snackBar = _snackBar;
    this.dialog = dialog;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.emailobj = new _service_send_email_send_email__WEBPACK_IMPORTED_MODULE_0__.SendEmail();
    this.profileForm = this.formBuilder.group({
      recipient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      recruiter_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.durationInSeconds = 2;
  }
  sendmail() {
    console.log('Form data is ', this.profileForm.value);
    const {
      recipient,
      company_name,
      message,
      recruiter_name
    } = this.profileForm.value;
    this.emailobj.recruiter_name = recruiter_name;
    this.emailobj.recipient = recipient;
    this.emailobj.company_name = company_name;
    this.emailobj.message = message;
    console.log(this.emailobj.recipient);
    this.emailservice.emailnotification(this.emailobj).subscribe(data => {
      //  console.log("Personal Details Added SuccessFully!!");
      // {
      //   this._snackBar.open('Mail Sent Successfully!', 'close', {
      //     horizontalPosition: this.horizontalPosition,
      //     verticalPosition: this.verticalPosition,
      //     duration: this.durationInSeconds * 1000,
      //   });
      // } 
      this.dialog.open(_email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EmailDialogComponent);
    }, error => console.log(error));
  }
  static #_ = this.ɵfac = function SendEmailComponent_Factory(t) {
    return new (t || SendEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_send_email_send_email_service__WEBPACK_IMPORTED_MODULE_2__.SendEmailService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SendEmailComponent,
    selectors: [["app-send-email"]],
    decls: 39,
    vars: 1,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "formControlName", "recruiter_name"], ["matSuffix", ""], ["matInput", "", "formControlName", "recipient"], ["matInput", "", "formControlName", "company_name"], ["matInput", "", "placeholder", "Message", "formControlName", "message"], ["type", "submit", "id", "b1", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "submit", "id", "b2", "mat-raised-button", "", "color", "warn", "routerLink", "/moreinfo"]],
    template: function SendEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-home-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "form", 3)(5, "mat-card")(6, "mat-card-header", 4)(7, "mat-card-title")(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Reach Out To The Candidate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content")(11, "div", 5)(12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 6)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Email Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 6)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 6)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SendEmailComponent_Template_button_click_34_listener() {
          return ctx.sendmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.profileForm);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_4__.HomeNavbarComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height: 95vh; margin-left: 15%;margin-top: 3%;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:550px;}\nmat-form-field[_ngcontent-%COMP%]{display: flex;justify-content: space-between;}\n.example-margin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 11px;}\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color: aliceblue;}\n.full-width[_ngcontent-%COMP%]{\n    width: 75%;\n}\na[_ngcontent-%COMP%]{color:coral;font-weight:bold;}\nmat-card[_ngcontent-%COMP%]{border-radius: 35px;background-color: rgb(0, 0, 0,0.6);}\n@media screen and (max-width: 1440px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 100px;\n    }\n    \n}\n@media screen and (max-width: 425px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 0px;\n    }\n    \n}\n#b1[_ngcontent-%COMP%]{\n    margin-left: 30%;\n    margin-top: -1%;\n \n}\n#b2[_ngcontent-%COMP%]{\n    margin-top: -7.5%;\n    margin-left: -18%;\n}\n#eimg[_ngcontent-%COMP%]{\n    width: 30%;\n    margin-left: 9%;\n    position: absolute;\n    margin-top: 20%;\n}\n/*# sourceURL=webpack://./src/app/send-email/send-email.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VuZC1lbWFpbC9zZW5kLWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQ3RELGlCQUFpQixnQkFBZ0IsQ0FBQztBQUNsQyxZQUFZLFlBQVksQ0FBQztBQUN6QixlQUFlLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztBQUM1RCxrQkFBa0IsZUFBZSxDQUFDO0FBQ2xDLEtBQUssZ0JBQWdCLENBQUM7QUFDdEI7SUFDSSxVQUFVO0FBQ2Q7QUFDQSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMvQixTQUFTLG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDO0FBQ2hFO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wMXttaW4taGVpZ2h0OiA5NXZoOyBtYXJnaW4tbGVmdDogMTUlO21hcmdpbi10b3A6IDMlO31cbi5jb250YWluLWNvbnRlbnR7bWluLWhlaWdodDogOTB2aDt9XG4ucGFydC1wcmltZXtoZWlnaHQ6NTUwcHg7fVxubWF0LWZvcm0tZmllbGR7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fVxuLmV4YW1wbGUtbWFyZ2luIHB7Zm9udC1zaXplOiAxMXB4O31cbmgyLHB7Y29sb3I6IGFsaWNlYmx1ZTt9XG4uZnVsbC13aWR0aHtcbiAgICB3aWR0aDogNzUlO1xufVxuYXtjb2xvcjpjb3JhbDtmb250LXdlaWdodDpib2xkO31cbm1hdC1jYXJke2JvcmRlci1yYWRpdXM6IDM1cHg7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC42KTt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xuICAgIC5wYXJ0LXByaW1le1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICAucGFydC1wcmltZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIFxufVxuI2Ixe1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgbWFyZ2luLXRvcDogLTElO1xuIFxufVxuI2Iye1xuICAgIG1hcmdpbi10b3A6IC03LjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xufVxuI2VpbWd7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogOSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7718:
/*!***********************************************************************!*\
  !*** ./src/app/service/education-details/educationdetails.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationdetailsService": () => (/* binding */ EducationdetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class EducationdetailsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  addApi(educationDetailsData) {
    return this.httpClient.post("http://localhost:8080/academics-service/sender", educationDetailsData);
  }
  static #_ = this.ɵfac = function EducationdetailsService_Factory(t) {
    return new (t || EducationdetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EducationdetailsService,
    factory: EducationdetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8518:
/*!***************************************************************!*\
  !*** ./src/app/service/education-details/educationdetails.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Educationdetails": () => (/* binding */ Educationdetails)
/* harmony export */ });
class Educationdetails {
  constructor() {}
}

/***/ }),

/***/ 9231:
/*!*************************************************************************!*\
  !*** ./src/app/service/experience-details/experiencedetails.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencedetailsService": () => (/* binding */ ExperiencedetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ExperiencedetailsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  addApi(experienceDetailsData) {
    return this.httpClient.post("http://localhost:8080/experience-service/sender", experienceDetailsData);
  }
  static #_ = this.ɵfac = function ExperiencedetailsService_Factory(t) {
    return new (t || ExperiencedetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ExperiencedetailsService,
    factory: ExperiencedetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4986:
/*!*****************************************************************!*\
  !*** ./src/app/service/experience-details/experiencedetails.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Experiencedetails": () => (/* binding */ Experiencedetails)
/* harmony export */ });
class Experiencedetails {
  constructor() {}
}

/***/ }),

/***/ 1139:
/*!************************************************!*\
  !*** ./src/app/service/login/login.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class LoginService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  loginApi(loginData) {
    return this.httpClient.post("http://localhost:8080/user-authentication-service/login", loginData);
  }
  static #_ = this.ɵfac = function LoginService_Factory(t) {
    return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LoginService,
    factory: LoginService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1809:
/*!***************************************!*\
  !*** ./src/app/service/login/user.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor() {
    this.email = "", this.password = "";
  }
}

/***/ }),

/***/ 9598:
/*!**********************************************************************!*\
  !*** ./src/app/service/personal-details/personal-details.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDetailsService": () => (/* binding */ PersonalDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class PersonalDetailsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  addApi(PersonalDetailsData) {
    return this.httpClient.post("http://localhost:8080/personal-detail-service/sender", PersonalDetailsData);
  }
  static #_ = this.ɵfac = function PersonalDetailsService_Factory(t) {
    return new (t || PersonalDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PersonalDetailsService,
    factory: PersonalDetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6728:
/*!**************************************************************!*\
  !*** ./src/app/service/personal-details/personal-details.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDetails": () => (/* binding */ PersonalDetails)
/* harmony export */ });
class PersonalDetails {
  constructor() {}
}

/***/ }),

/***/ 8067:
/*!********************************************************************!*\
  !*** ./src/app/service/profile-details/profile-details.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetailsService": () => (/* binding */ ProfileDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ProfileDetailsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.url = 'http://localhost:8080';
  }
  // deletePost(email){
  //     return this.httpClient.delete(this.url+'/'+email);
  //   }
  // deleteMember(email) {
  //   return this.httpClient.delete('http://localhost:8090/profile/delete' + email);
  // }
  deleteproductbyId(email) {
    return this.httpClient.delete(this.url + "/profile-service/delete/" + email);
  }
  getProductRecommendationsByLocation(location) {
    return this.httpClient.get(this.url + "/profile-service/recommendByCity/" + location);
  }
  getAllProfile() {
    return this.httpClient.get(this.url + "/profile-service/getAllProfile");
  }
  getProductRecommendationsBySkill(skill1, level1) {
    return this.httpClient.get(`${this.url}/profile-service/recommendBySkill/${skill1}/${level1}`);
  }
  getProductRecommendationsBySLE(skill1, level1, experience) {
    return this.httpClient.get(`${this.url}/profile-service/recommendBySLE/${skill1}/${level1}/${experience}`);
  }
  getProductRecommendationsBySLL(skill1, level1, location) {
    return this.httpClient.get(`${this.url}/profile-service/recommendBySLL/${skill1}/${level1}/${location}`);
  }
  getProductRecommendationsByExperience(experience) {
    return this.httpClient.get(this.url + "/profile-service/recommendByExperience/" + experience);
  }
  getProductRecommendationsByChoice(location, skill1, experience, level1) {
    return this.httpClient.get(`${this.url}/profile-service/recommendByCity/${location}/${skill1}/${experience}/${level1}`);
    // return this.httpClient.get<ProfileDetails[]>(this.url+ "/profile/recommendByCity/" +'?location'+ location  + '?skill1'+skill1 +'?experience'+experience +'?level1'+level1)
  }
  static #_ = this.ɵfac = function ProfileDetailsService_Factory(t) {
    return new (t || ProfileDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProfileDetailsService,
    factory: ProfileDetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7407:
/*!************************************************************!*\
  !*** ./src/app/service/profile-details/profile-details.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDetails": () => (/* binding */ ProfileDetails)
/* harmony export */ });
class ProfileDetails {}

/***/ }),

/***/ 8766:
/*!******************************************************!*\
  !*** ./src/app/service/register/register.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


// import { Register } from 'src/app/register';
// import { RegisterService } from '../register/register.service';
class RegisterService {
  // baseUrl="http://localhost:8081/api/v1/register"
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  registerApi(registerData) {
    return this.httpClient.post("http://localhost:8080/user-authentication-service/register", registerData);
  }
  static #_ = this.ɵfac = function RegisterService_Factory(t) {
    return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RegisterService,
    factory: RegisterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5700:
/*!*******************************************************!*\
  !*** ./src/app/service/register/user-registration.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistration": () => (/* binding */ UserRegistration)
/* harmony export */ });
class UserRegistration {
  constructor() {
    this.email = "";
    this.password = "";
    this.cpassword = "";
  }
}

/***/ }),

/***/ 2191:
/*!**********************************************************!*\
  !*** ./src/app/service/send-email/send-email.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendEmailService": () => (/* binding */ SendEmailService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class SendEmailService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = "http://localhost:8080";
  }
  emailnotification(details) {
    return this.httpClient.post(this.baseUrl + "/email-service/sendMailWithAttachment", details);
  }
  static #_ = this.ɵfac = function SendEmailService_Factory(t) {
    return new (t || SendEmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SendEmailService,
    factory: SendEmailService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3077:
/*!**************************************************!*\
  !*** ./src/app/service/send-email/send-email.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendEmail": () => (/* binding */ SendEmail)
/* harmony export */ });
class SendEmail {}

/***/ }),

/***/ 7835:
/*!********************************************************!*\
  !*** ./src/app/service/skill-details/skill-details.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillDetails": () => (/* binding */ SkillDetails)
/* harmony export */ });
class SkillDetails {}

/***/ }),

/***/ 8585:
/*!***************************************************************!*\
  !*** ./src/app/service/skill-details/skill-detais.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillDetaisService": () => (/* binding */ SkillDetaisService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class SkillDetaisService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  addApi(skillDetailsData) {
    return this.httpClient.post("http://localhost:8080/skill-service/sender", skillDetailsData);
  }
  static #_ = this.ɵfac = function SkillDetaisService_Factory(t) {
    return new (t || SkillDetaisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SkillDetaisService,
    factory: SkillDetaisService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2916:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher),
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _service_register_user_registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/register/user-registration */ 5700);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_register_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/register/register.service */ 8766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
















function SignupComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SignupComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SignupComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-error");
  }
}
function SignupComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 charc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MyErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
class SignupComponent {
  constructor(registerService, router, formBuilder, _snackBar) {
    this.registerService = registerService;
    this.router = router;
    this.formBuilder = formBuilder;
    this._snackBar = _snackBar;
    this.minPw = 8;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.hide = true;
    this.user = new _service_register_user_registration__WEBPACK_IMPORTED_MODULE_0__.UserRegistration();
    this.errorMessage = "";
    this.emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    this.passwordPattern = new RegExp(/(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,10}/);
    this.matcher = new MyErrorStateMatcher();
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]);
    this.passwordErrorStateMatcher = {
      isErrorState: control => {
        return control.dirty && control.invalid;
      }
    };
    this.profileForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      checkbox: [false]
    });
    this.durationInSeconds = 2;
    this.checked = false;
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]);
    this.RememberMe = false;
  }
  // get email(): String {
  //   return this. profileForm.get('email');
  // }
  // get password(): String {
  //   return this.profileForm.get('password');
  // }
  // get cpassword(): String {
  //   return this.profileForm.get('cpassword');
  // }
  ngOnInit() {}
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    console.log(this.user);
    const {
      email,
      password,
      cpassword
    } = this.profileForm.value;
    if (email == ""
    // password == "" ||
    // cpassword == ""
    ) {
      // alert("Fields cannot be empty!")
      this._snackBar.open('Fields cannot be empty!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    } else if (password != cpassword) {
      // alert("password must be same")
      this._snackBar.open('Password must be same!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    } else if (!this.profileForm.value.checkbox) {
      this._snackBar.open('Accept Terms and Conditions!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    } else {
      this.user.email = email;
      this.user.password = password;
      this.user.cpassword = cpassword;
      this.registerService.registerApi(this.user).subscribe(data => {
        // alert("Successfully Registered !!");
        this._snackBar.open('Successfully Registered !!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }, error => console.log(error));
      this.router.navigate(["/login"]);
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  static #_ = this.ɵfac = function SignupComponent_Factory(t) {
    return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_register_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-signup"]],
    decls: 60,
    vars: 18,
    consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "main-container"], ["fxLayout", "column wrap", "fxFlex", "40%", "fxShow", "", "fxHide.xs", "", 1, "contain-images"], ["fxFlex", "50%", 1, "logo-view"], ["routerLink", "/main-homepage", 1, "logo"], ["src", " /assets/img/logo.png", "alt", "", "srcset", "", "height", "150px", "fxFlex.sm", "90%"], ["fxFlex", "50%", 1, "illustrate-view"], ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "container-x"], ["src", " /assets/img/augmented_reality.svg", "alt", "", "srcset", "", "height", "200px", "fxFlex.sm", "90%"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "50%", "fxFlex.xs", "85%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["appearance", "fill", 1, "full-width"], ["formControlName", "email", "matInput", "", 3, "errorStateMatcher"], ["matSuffix", ""], [4, "ngIf"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "Password", 3, "type", "errorStateMatcher"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["formControlName", "cpassword", "type", "password", "matInput", "", "placeholder", "Confirm Password", 3, "type", "errorStateMatcher"], ["id", "checkbox", "color", "primary", "formControlName", "checkbox", 1, "checkbox"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["routerLink", "/login"]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "form", 10)(11, "mat-card")(12, "mat-card-header", 11)(13, "mat-card-title")(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Create new Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content")(17, "div", 12)(18, "mat-form-field", 13)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SignupComponent_mat_error_24_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SignupComponent_mat_error_25_Template, 4, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 13)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Enter password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SignupComponent_mat_error_30_Template, 4, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_31_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 13)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SignupComponent_mat_error_38_Template, 1, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, SignupComponent_mat_error_39_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_40_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-checkbox", 20)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " By Accepting,you agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-card-actions", 11)(53, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_53_listener() {
          return ctx.saveForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div")(56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Already have an Account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileForm.get("email").hasError && !ctx.profileForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("errorStateMatcher", ctx.passwordErrorStateMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileForm.get("password").hasError("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("errorStateMatcher", ctx.passwordErrorStateMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileForm.get("password").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", false);
      }
    },
    dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton],
    styles: [".contain-images[_ngcontent-%COMP%]{min-height: 100vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 100vh;}\n.illustrate-view[_ngcontent-%COMP%]{min-height: 50vh; }\n.logo-view[_ngcontent-%COMP%]{min-height: 50vh; }\n.part-prime[_ngcontent-%COMP%]{height: 375px;}\nmat-form-field[_ngcontent-%COMP%]{display: flex; justify-content: space-between; }\n.example-margin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 11px;}\n.logo[_ngcontent-%COMP%]{border: none;background: none;}\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color: aliceblue;}\na[_ngcontent-%COMP%]{color:coral;font-weight:bold;}\nmat-card[_ngcontent-%COMP%]{border-radius: 35px;background-color: rgb(0, 0, 0,0.6);}\n\n@media screen and (max-width: 1440px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 100px;\n    }\n    \n}\n@media screen and (max-width: 425px){\n    .part-prime[_ngcontent-%COMP%]{\n        margin-right: 0px;\n    }\n    \n  }\n/*# sourceURL=webpack://./src/app/signup/signup.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixpQkFBaUIsQ0FBQztBQUNsQyxpQkFBaUIsaUJBQWlCLENBQUM7QUFDbkMsaUJBQWlCLGdCQUFnQixFQUFFO0FBQ25DLFdBQVcsZ0JBQWdCLEVBQUU7QUFDN0IsWUFBWSxhQUFhLENBQUM7QUFDMUIsZUFBZSxhQUFhLEVBQUUsOEJBQThCLEVBQUU7QUFDOUQsa0JBQWtCLGVBQWUsQ0FBQztBQUNsQyxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNwQyxLQUFLLGdCQUFnQixDQUFDO0FBQ3RCLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0FBQy9CLFNBQVMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUM7O0FBRWhFO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztFQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW4taW1hZ2Vze21pbi1oZWlnaHQ6IDEwMHZoO31cbi5jb250YWluLWNvbnRlbnR7bWluLWhlaWdodDogMTAwdmg7fVxuLmlsbHVzdHJhdGUtdmlld3ttaW4taGVpZ2h0OiA1MHZoOyB9XG4ubG9nby12aWV3e21pbi1oZWlnaHQ6IDUwdmg7IH1cbi5wYXJ0LXByaW1le2hlaWdodDogMzc1cHg7fVxubWF0LWZvcm0tZmllbGR7ZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4uZXhhbXBsZS1tYXJnaW4gcHtmb250LXNpemU6IDExcHg7fVxuLmxvZ297Ym9yZGVyOiBub25lO2JhY2tncm91bmQ6IG5vbmU7fVxuaDIscHtjb2xvcjogYWxpY2VibHVlO31cbmF7Y29sb3I6Y29yYWw7Zm9udC13ZWlnaHQ6Ym9sZDt9XG5tYXQtY2FyZHtib3JkZXItcmFkaXVzOiAzNXB4O2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNik7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xuICAgIC5wYXJ0LXByaW1le1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICAucGFydC1wcmltZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIFxuICB9IFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7138:
/*!**********************************************************!*\
  !*** ./src/app/skill-details/skill-details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillDetailsComponent": () => (/* binding */ SkillDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_skill_details_skill_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/skill-details/skill-details */ 7835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_skill_details_skill_detais_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/skill-details/skill-detais.service */ 8585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topnavbar/topnavbar.component */ 5313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 162);

















function SkillDetailsComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_skill1_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_skill1_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_skill1_r6.viewValue, " ");
  }
}
function SkillDetailsComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_level1_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_level1_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_level1_r7.viewValue, " ");
  }
}
function SkillDetailsComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_skill2_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_skill2_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_skill2_r8.viewValue, " ");
  }
}
function SkillDetailsComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_level2_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_level2_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_level2_r9.viewValue, " ");
  }
}
function SkillDetailsComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_skill3_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_skill3_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_skill3_r10.viewValue, " ");
  }
}
function SkillDetailsComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_level3_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pref_level3_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pref_level3_r11.viewValue, " ");
  }
}
class SkillDetailsComponent {
  constructor(formBuilder, skilldetailservice, router, _snackBar) {
    this.formBuilder = formBuilder;
    this.skilldetailservice = skilldetailservice;
    this.router = router;
    this._snackBar = _snackBar;
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
    this.centered = false;
    this.user = new _service_skill_details_skill_details__WEBPACK_IMPORTED_MODULE_0__.SkillDetails();
    this.pref_skill = [{
      value: 'Angular',
      viewValue: 'Angular'
    }, {
      value: 'Html',
      viewValue: 'Html'
    }, {
      value: 'Css',
      viewValue: 'Css'
    }, {
      value: 'Javascript',
      viewValue: 'JavaScript'
    }, {
      value: 'Neo4j',
      viewValue: 'Neo4j'
    }, {
      value: 'C',
      viewValue: 'C'
    }, {
      value: 'C++',
      viewValue: 'C++'
    }, {
      value: 'Java',
      viewValue: 'Java'
    }, {
      value: 'Python',
      viewValue: 'Python'
    }];
    this.pref_level = [{
      value: 'Basic',
      viewValue: 'Basic'
    }, {
      value: 'Intermediate',
      viewValue: 'Intermediate'
    }, {
      value: 'Advance',
      viewValue: 'Advance'
    }];
    this.profileForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      skill1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      level1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      skill2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      level2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      skill3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      level3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.durationInSeconds = 2;
  }
  ngOnInit() {
    // this.email=localStorage.getItem('loginEmail')
    if (localStorage.getItem("STEP_4")) {
      var values = JSON.parse(localStorage.getItem("STEP_4"));
      console.log(values);
      this.profileForm.setValue({
        email: values.email,
        skill1: values.skill1,
        level1: values.level1,
        skill2: values.skill2,
        level2: values.level2,
        skill3: values.skill3,
        level3: values.level3
      });
    }
  }
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_4", JSON.stringify(this.profileForm.value));
    const {
      email,
      skill1,
      level1,
      skill2,
      level2,
      skill3,
      level3
    } = this.profileForm.value;
    this.user.email = localStorage.getItem('loginEmail');
    this.user.skill1 = skill1;
    this.user.skill2 = skill2;
    this.user.skill3 = skill3;
    this.user.level1 = level1;
    this.user.level2 = level2;
    this.user.level3 = level3;
    if (skill1 == "" && level1 == ""
    // && skill2 == "" && level2 =="" && skill3=="" && level3
    ) {
      // alert("Fields cannot be empty!")
      {
        this._snackBar.open('Enter Any One Skill & Level!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        });
      }
    } else {
      this.router.navigate(["/my-profile"]);
      this.skilldetailservice.addApi(this.user).subscribe(data => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Skill Details Added SuccessFully!!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
        }
      }, error => console.log(error));
    }
  }
  static #_ = this.ɵfac = function SkillDetailsComponent_Factory(t) {
    return new (t || SkillDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_skill_details_skill_detais_service__WEBPACK_IMPORTED_MODULE_1__.SkillDetaisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SkillDetailsComponent,
    selectors: [["app-skill-details"]],
    decls: 55,
    vars: 11,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "p1"], ["matRipple", "", "routerLink", "/experience-details", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxLayoutAlign", "center center", 1, "contain-content"], ["fxFlex", "75%", "fxFlex.xs", "100%", 1, "part-prime"], [1, "form-container", 3, "formGroup"], ["fxLayoutAlign", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["appearance", "fill", 1, "full-width"], ["formControlName", "skill1"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "level1"], ["formControlName", "skill2"], ["formControlName", "level2"], ["formControlName", "skill3"], ["formControlName", "level3"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleRadius"], [3, "value"]],
    template: function SkillDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topnavbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-icon")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "form", 4)(9, "mat-card")(10, "mat-card-header", 5)(11, "mat-card-title")(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card-content")(15, "div", 6)(16, "mat-form-field", 7)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Skill-1 Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SkillDetailsComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 7)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Skill-1 Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SkillDetailsComponent_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6)(27, "mat-form-field", 7)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Skill-2 Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SkillDetailsComponent_mat_option_31_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-form-field", 7)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Skill-2 Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SkillDetailsComponent_mat_option_36_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 6)(38, "mat-form-field", 7)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Skill-3 Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, SkillDetailsComponent_mat_option_42_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 7)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Skill-3 Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, SkillDetailsComponent_mat_option_47_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-card-actions", 5)(49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SkillDetailsComponent_Template_button_click_49_listener() {
          return ctx.saveForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 16)(52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pref_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleRadius", 66);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__.TopnavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: [".p1[_ngcontent-%COMP%]{min-height: 95vh;}\n.contain-content[_ngcontent-%COMP%]{min-height: 90vh;}\n.part-prime[_ngcontent-%COMP%]{height:400px;}\nmat-card[_ngcontent-%COMP%]{border-radius:35px;background-color: rgb(0, 0, 0,0.5);}\np[_ngcontent-%COMP%]{margin-top:10px;color: aliceblue;}\nh2[_ngcontent-%COMP%]{color: aliceblue;}\n.full-width[_ngcontent-%COMP%]{width: 45%;}\n.add-button[_ngcontent-%COMP%]{margin-bottom: 15px;}\n.select-opt[_ngcontent-%COMP%]{margin-right: 5px;}\n.example-ripple-container[_ngcontent-%COMP%] {\n    display: flex;\n    cursor: pointer;\n    box-shadow: none;\n}\n@media screen and (max-width: 425px){\n    mat-card[_ngcontent-%COMP%]{margin-top: 20px;} \n    .select-opt[_ngcontent-%COMP%]{margin-right: 0px;}  \n}\n/*# sourceURL=webpack://./src/app/skill-details/skill-details.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGwtZGV0YWlscy9za2lsbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixpQkFBaUIsZ0JBQWdCLENBQUM7QUFDbEMsWUFBWSxZQUFZLENBQUM7QUFDekIsU0FBUyxrQkFBa0IsQ0FBQyxrQ0FBa0MsQ0FBQztBQUMvRCxFQUFFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNuQyxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCLFlBQVksVUFBVSxDQUFDO0FBQ3ZCLFlBQVksbUJBQW1CLENBQUM7QUFDaEMsWUFBWSxpQkFBaUIsQ0FBQztBQUM5QjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTLGdCQUFnQixDQUFDO0lBQzFCLFlBQVksaUJBQWlCLENBQUM7QUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyIucDF7bWluLWhlaWdodDogOTV2aDt9XG4uY29udGFpbi1jb250ZW50e21pbi1oZWlnaHQ6IDkwdmg7fVxuLnBhcnQtcHJpbWV7aGVpZ2h0OjQwMHB4O31cbm1hdC1jYXJke2JvcmRlci1yYWRpdXM6MzVweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjUpO31cbnB7bWFyZ2luLXRvcDoxMHB4O2NvbG9yOiBhbGljZWJsdWU7fVxuaDJ7Y29sb3I6IGFsaWNlYmx1ZTt9XG4uZnVsbC13aWR0aHt3aWR0aDogNDUlO31cbi5hZGQtYnV0dG9ue21hcmdpbi1ib3R0b206IDE1cHg7fVxuLnNlbGVjdC1vcHR7bWFyZ2luLXJpZ2h0OiA1cHg7fVxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICBtYXQtY2FyZHttYXJnaW4tdG9wOiAyMHB4O30gXG4gICAgLnNlbGVjdC1vcHR7bWFyZ2luLXJpZ2h0OiAwcHg7fSAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5313:
/*!**************************************************!*\
  !*** ./src/app/topnavbar/topnavbar.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopnavbarComponent": () => (/* binding */ TopnavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);





class TopnavbarComponent {
  static #_ = this.ɵfac = function TopnavbarComponent_Factory(t) {
    return new (t || TopnavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TopnavbarComponent,
    selectors: [["app-topnavbar"]],
    decls: 17,
    vars: 1,
    consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "main-container"], ["fxLayout", "row", "fxFlex", "95%", "fxLayoutAlign", "space-between center", 1, "contain-images"], ["routerLink", "/homepage", 1, "logo"], ["src", "/assets/img/logo.png", "height", "60px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around center", "fxFlex", "50%"], ["fxLayoutAlign", "center center"], ["mat-button", "", "height", "100px", 3, "matMenuTriggerFor"], ["src", "/assets/img/avatar.svg", "alt", "", "srcset", "", "height", "60px"], ["height", "100px", "xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/my-profile"], ["mat-menu-item", "", "routerLink", "/main-homepage"]],
    template: function TopnavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div")(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 8, 9)(11, "button", 10)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11)(15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      }
    },
    dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
    styles: ["nav[_ngcontent-%COMP%]{ min-height: 10vh;background-color: rgba(0, 34, 29, 0.6);}\nmat-menu[_ngcontent-%COMP%]{height: 100px;background-color: rgba(0, 34, 29, 0.6);}\n.logo[_ngcontent-%COMP%]{border: none;background: none; }\n/*# sourceURL=webpack://./src/app/topnavbar/topnavbar.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wbmF2YmFyL3RvcG5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZ0JBQWdCLENBQUMsc0NBQXNDLENBQUM7QUFDN0QsU0FBUyxhQUFhLENBQUMsc0NBQXNDLENBQUM7QUFDOUQsTUFBTSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7IG1pbi1oZWlnaHQ6IDEwdmg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzNCwgMjksIDAuNik7fVxubWF0LW1lbnV7aGVpZ2h0OiAxMDBweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM0LCAyOSwgMC42KTt9XG4ubG9nb3tib3JkZXI6IG5vbmU7YmFja2dyb3VuZDogbm9uZTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map