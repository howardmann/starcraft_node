define(["backbone", "handlebars", "jquery", "views/PlanetView"], function(Backbone, Handlebars, $,  PlanetView) {
  var PlanetsView = Backbone.View.extend({
    className: 'planets-view',

    initialize: function() {
      this.collection.on('add', this.addOne, this);
    },

    addOne: function(planet) {
      var planetView = new PlanetView({
        model: planet
      });
      planetView.save;
      this.$('.planets-view-content').append(planetView.render().el);
    },

    template: Handlebars.compile('<h2>Planets:</h2><div class="planets-view-content"></div>'),

    render: function() {
      this.$el.prepend(this.template);
      this.collection.each(this.addOne, this);
      return this;
    }
  });

  return PlanetsView;
});
