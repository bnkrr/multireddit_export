// ==UserScript==
// @name         Export & Share Multireddit
// @namespace    https://github.com/bnkrr/multireddit_export
// @version      0.1
// @description  share and export multi-reddit to everyone including mobile users.
// @author       Bnkr
// @supportURL   https://github.com/bnkrr/multireddit_export
// @match        https://www.reddit.com/*/m/*/
// @grant        none
// ==/UserScript==

(function() {
    var subreddits = [];
    $('.subreddits').children('li').children('a').each(function() {
        var rname = this.href.split('/').pop();
        subreddits.push(rname);
    });
    var url = 'https://www.reddit.com/r/'+subreddits.join('+')+'/';
    $('h1.redditname a').after('  <a href="' + url + '">[ext_url]</a>');
})();

