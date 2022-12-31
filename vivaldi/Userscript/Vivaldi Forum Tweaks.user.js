// ==UserScript==
// @name         Vivaldi Forum Tweaks
// @namespace    https://greasyfork.org/en/users/197428-pathduck
// @license      MIT
// @version      0.8
// @description  CSS tweaks for Vivaldi Forums
// @author       Pathduck
// @supportURL   https://greasyfork.org/en/scripts/457399-vivaldi-forum-tweaks
// @match        https://forum.vivaldi.net/*
// @exclude      https://forum.vivaldi.net/assets/*
// @icon         https://icons.duckduckgo.com/ip2/vivaldi.net.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
@media (min-width: 960px) {body {padding-top: 95px;}}
body {font-size: 15px;}
hr {margin: 5px;}
pre, pre code {padding: 5px !important;}
ul#vivaldimenu {margin-bottom: 0;};
small.pull-right {padding: 0; margin: 0px;}
#communitysubmenu { min-height: unset; top: 40px; padding: 0px;}
#content, main#panel {padding-top: 0px !important;}
#menucontent, #vivaldi-header, .navbar {min-height: unset; padding: 0; height: 40px;}
#menucontent>.row {padding: 5px 5px 0; height: 40px;}
#menucontent #search-form .form-control {margin: 5px;}
#menucontent #search-form input.form-control {max-width: unset !important; width: 320px;}
#newtopicbar {padding: 5px; margin-bottom: 5px;}
#submenu {top: 65px !important;}
#submenu.isfixed {top: 40px !important;}
#submenu, #submenu li, #submenu ul {line-height: 30px; height: 30px;}
#vivaldi-header .sublinks a {padding: 0;}
.account .cover {margin-top: 50px !important;}
.breadcrumb {padding: 0; margin-bottom: 0px;}
.btn {line-height: 1;}
.btn-toolbar {padding-top: 5px;}
.categories-title {margin: 5px 0 5px;}
.categories>li, .category>ul>li {margin-bottom: 0px; padding-bottom: 0px;}
.composer .preview, .composer .write {font-size: 15px;}
.dropdown-menu {font-size: 13px;}
.form-control:focus, .dropdown-toggle:focus {outline: solid !important;}
.header .notification-list, .header .chat-list {max-height: 60vh;}
.navbar-nav>li>a {padding: 10px 15px; margin-top: 2px;}
.navbar-nav>li>a#user_dropdown {padding: 5px 15px;margin-top: 2px;}
.posts-list-item.deleted {opacity: .5 !important;}
.search .bootstrap-tagsinput:has(input:focus) {outline: solid;}
.small.pull-right {margin-top: 0px;}
.topic-list-header {top: 30px;}
.topic h1 {line-height: 25px; font-weight: bold;}
.topic .topic-info, .topic .topic-info>* {margin-bottom: 0px; padding-bottom: 2px; padding-top: 0px;}
.topic .posts .content .img-responsive, .message-body img {max-width: 50vw; max-height: 30vh;}

/* Dark skin fixes */
.skin-dark blockquote {background-color: #333; border-left: 5px solid #4c70f0;}
.skin-dark code, .skin-dark pre {color: #fff; background-color: #333;}
.skin-dark .account .profile .profile-meta strong {color: #fff;}
.skin-dark .alert-window .alert {background-color: #333;}
.skin-dark .alert-window .alert.alert-info {color: limegreen;}
.skin-dark .alert-warning {background-color: darkred;}
.skin-dark .btn-primary, .pagination>.active>a {background-color: #3652b0;}
.skin-dark .composer .preview a {color: #809cff !important}
.skin-dark .label-success {background-color: green;}
.skin-dark .search .bootstrap-tagsinput,
.skin-dark .search .bootstrap-tagsinput input {border: 0; background-color: #272727; color: #fff;}
.skin-dark .topic .posts a {color: #809cff !important}
.skin-dark .topic .posts .dropdown-menu a {color: #fff !important}

/* External link warning */
a[rel^="nofollow"]::after{font-size:12px; content:"⚠️";}
a[href*="vivaldi"]::after{content: unset;}
`);
