'use strict';

const packageJson = require('package-json');
const filterObj = require('filter-obj');
const githubScout = require('github-scout');

module.exports = (name, username, accessToken) => {
  const p1 = packageJson(name, 'latest');
  const p2 = githubScout(username, name, accessToken || null);

  return Promise.all([p1, p2])
    .then(res => {
      let merge = {};
      merge.packageJson = filterObj(res[0], [
        'name',
        'version',
        'description',
        'license',
        'repository',
        'author',
        'dependencies',
        'maintainers'
      ]);
      merge.packageJson.maintainersCount = merge.packageJson.maintainers.length;
      merge.packageJson.dependenciesCount = Object.keys(merge.packageJson.dependencies).length;

      merge.repository = res[1].repository;

      return merge;
    })
    .catch(err => {
      throw err;
    });
};
