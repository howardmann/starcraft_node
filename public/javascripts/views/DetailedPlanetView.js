define(["backbone", "handlebars", "text!templates/DetailedPlanetView.hbs"], function(Backbone, Handlebars, template) {
  var DetailedPlanetView = Backbone.View.extend({
    // template: Handlebars.compile('<h2>{{name}}</h2><p>{{description}}</p><a href="/#">Back</a>'),

    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return DetailedPlanetView;
});
