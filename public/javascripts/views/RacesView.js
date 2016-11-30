define(["backbone", "handlebars", "jquery", "views/RaceView", "events"], function(Backbone, Handlebars, $, RaceView, Events) {
  var RacesView = Backbone.View.extend({
    className: 'races-view',

    initialize: function(){
      this.collection.on('add', this.addOne, this);
      this.collection.on('remove', this.render, this);
    },

    events: {
      "click .new-race": 'showNewRace'
    },

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

    template: Handlebars.compile('<h2>Races:</h2><div class="races-view-content"></div><a href="#" class="new-race">Add new race</a>'),

    render: function() {
      this.$el.prepend(this.template);
      this.collection.each(this.addOne, this);
      return this;
    },

    showNewRace: function(e) {
      e.preventDefault();
      Events.trigger("router:navigate", 'races/new');
    }
  });

  return RacesView;
});
