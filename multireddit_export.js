// ==UserScript==
// @name         multireddit_export
// @namespace    this_is_definitely_unique_because_it_is_a_very_long_string
// @version      0.1
// @description  export multireddit to everyone include mobile users.
// @author       Bnkr
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

