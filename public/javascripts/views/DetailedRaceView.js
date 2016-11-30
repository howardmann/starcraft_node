define(["backbone", "handlebars", "jquery", "text!templates/DetailedRaceView.hbs", "events"], function(Backbone, Handlebars, $, template, Events) {
  var DetailedRaceView = Backbone.View.extend({
    events: {
      'click .remove-race': 'removeRace'
    },

    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    removeRace: function(e) {
      var self = this;
      e.preventDefault();
      self.model.destroy().done(function(){
        Events.trigger("router:navigate", "races");
        self.remove();
      });
    }
  });

  return DetailedRaceView;
});
