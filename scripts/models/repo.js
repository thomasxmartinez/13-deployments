(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/codefellows-seattle-301d7/repos' +
    '?per_page&sort=updated')
    .done(function(data) {
      repos.allRepos = data;
    }).done(callback);
  };

  repos.withTheAttribute = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
})(window);
