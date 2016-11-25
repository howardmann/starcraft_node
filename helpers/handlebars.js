// Global handlebars helpers
var helpers = {
  _truncate: function(string, num){
    if (!string) { return };
    return string.substr(0, num) + ' ...';
  },

  _capitalize: function(string){
    if (!string) { return };
    return string.split(' ').map(el => el[0].toUpperCase() + el.substr(1, el.length)).join(' ');
  }
}

module.exports = helpers;
