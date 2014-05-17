// Header Info ////////////////////////////////////////////////////

var showHeader = _.template($('.showHeader').text());

function renderHeader (data, destination){
    var rendered = showHeader(data);
    destination.prepend(rendered);
  }
 
$.getJSON('https://api.github.com/users/wweliz').done(function(data){
  renderHeader(data, $('.sidebar'));
});

// Repositories ////////////////////////////////////////////////////

var showRepos = _.template($('.showRepos').text());

// passing repodata provided by the getJSON through the function
function renderRepos (repodata) {
  //forEaching over the repodata
  repodata.forEach(function(repo){
    // writes the text into var rendered
    var rendered = showRepos(repo);
    //puts the string into the repo-tab-content div
    $('.repo-tab-content').prepend(rendered);
  });
}

//fetches the info from my github repo page, once it has all the data, it makes the data available for the renderRepos function
$.getJSON('https://api.github.com/users/wweliz/repos').done(function(data){
  renderRepos(data);
});

// Sidebar Info ////////////////////////////////////////////////////

var showSidebar = _.template($('.showSidebar').text());

function renderSidebar (data, destination){
    var rendered = showSidebar(data);
    destination.prepend(rendered);
  }
 
$.getJSON('https://api.github.com/users/wweliz').done(function(data){
  renderSidebar(data, $('.sidebar'));
});