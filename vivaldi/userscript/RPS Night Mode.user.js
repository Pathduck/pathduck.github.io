// ==UserScript==
// @name         RPS Night Mode
// @namespace    https://greasyfork.org/en/users/197428-pathduck
// @license      MIT
// @version      0.40
// @description  Night mode for site "Rock, Paper, Shotgun"
// @author       Pathduck
// @supportURL   https://greasyfork.org/en/scripts/370482-rps-night-mode
// @match        *://*.rockpapershotgun.com/*
// @exclude      *://forum.rockpapershotgun.com/*
// @icon         https://icons.duckduckgo.com/ip2/rockpapershotgun.com.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
body {color: #eee !important; background: black !important;}
figcaption {color: #00b893 !important;}
input {color: #eee !important;}
#content {background: #393939 !important; border-radius: 16px;}
#comments .markdown {background: unset !important;}
.article[data-article-type], .summary[data-article-type] {--color: #ee77a7;--strap-color: #ee77a7;}
.article[data-premium=true], .summary[data-premium=true] {--color: #9763ff !important; --strap-color: #9763ff !important;}
.article_body_content blockquote {background: #222 !important;}
.app_header, .app_footer {background: black !important; border: none;}
.app_footer a, .app_footer button {color: #eee !important;}
.article p a, .article_header a {color: #00b893 !important;}
.archive_by_date a {color: #00b893 !important;}
.nav_primary a, .nav_secondary a {color: #eee !important;}
.profile-comments a {color: #00b893 !important;}
.section_title, .page_title, .label {color: #00b893 !important;}
.supporters_shelf .section_title {color: #9763ff !important;}
.strapline, .disclaimer, .alert {color: #eee !important;}
.title, .title a, .summary a {color: #00b893 !important;}
.thumbnail:after {content: unset !important;}
.username .name {color: white !important;}
`);
