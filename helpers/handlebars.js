// Global handlebars helpers
var helpers = {
  _truncate: function(text, chars){
    return text.substr(0, chars) + ' ...';
  }
}

module.exports = helpers;
