// /**
//  * home_official_site - v0.1.0
//  *
//  * Agency: Extra
//  * Tech Lead, Dev: Daniele Bertella (dbertella@extra.it)
//  */

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'presentation', 'characters', 'story', 'discover'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'PRESENTAZIONE', 'PERSONAGGI', 'INIZIATIVA', 'SCOPRILI TUTTI'],
    responsive: 900
  });
});
