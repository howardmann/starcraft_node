define(["backbone", "handlebars", "jquery", "text!templates/DetailedPlanetView.hbs"], function(Backbone, Handlebars, $, template) {
  var DetailedPlanetView = Backbone.View.extend({
    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return DetailedPlanetView;
});
