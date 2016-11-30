define(["backbone", "handlebars", "jquery", "views/RaceView"], function(Backbone, Handlebars, $, RaceView) {
  var RacesView = Backbone.View.extend({
    className: 'races-view',

    initialize: function() {
      this.collection.on('add', this.addOne, this);
    },

    addOne: function(race) {
      var raceView = new RaceView({
        model: race
      });
      raceView.save;
      this.$('.races-view-content').append(raceView.render().el);
    },

    template: Handlebars.compile('<h2>Races:</h2><div class="races-view-content"></div>'),

    render: function() {
      this.$el.prepend(this.template);
      this.collection.each(this.addOne, this);
      return this;
    }
  });

  return RacesView;
});
