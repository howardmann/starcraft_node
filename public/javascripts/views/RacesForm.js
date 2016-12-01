var app = app || {};

define(["backbone", "handlebars", "jquery", "models/Race", "views/RaceView", "events", "text!templates/RacesForm.hbs"], function(Backbone, Handlebars, $, Race, RaceView, Events, template) {
  var RacesForm = Backbone.View.extend({
    className: 'races-form',

    events: {
      'click .add-race': 'addRace'
    },

    addRace: function(e) {
      e.preventDefault();
      var self = this;
      var $name = this.$('.input-race-name');
      var $description = this.$('.input-race-description');
      if ($name.val().length < 1 || $description.val().length < 1) {return;};

      var race = new Race({name: $name.val(), description: $description.val()});
      // this.collection.add(race);
      race.save().then(function(){
        debugger;
        self.collection.add(race);
        Events.trigger("router:navigate", 'races');
      });
    },

    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template);
      return this;
    }
  });

  return RacesForm;
});
