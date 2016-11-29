define(["backbone", "handlebars", "events", "text!templates/PlanetView.hbs"], function(Backbone, Handlebars, Events, template) {
  var PlanetView = Backbone.View.extend({
    className: 'planet-view',

    events: {
      "click .name": "showPlanet"
    },

    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    showPlanet: function(e) {
      e.preventDefault();
      var id = this.model.get("id");
      var url = "planet/" + id;
      Events.trigger("router:navigate", url);
    }
  });

  return PlanetView;
});
