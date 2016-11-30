define(["backbone", "handlebars", "jquery", "events", "text!templates/RaceView.hbs"], function(Backbone, Handlebars, $, Events, template) {
  var RaceView = Backbone.View.extend({
    className: 'race-view',

    events: {
      "click .name": "showRace"
    },

    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    showRace: function(e) {
      e.preventDefault();
      var id = this.model.get("id");
      var url = "race/" + id;
      // We call on the Events module which is an extension of Backbone events in order to communicate between modules
      Events.trigger("router:navigate", url);

      // app.router.navigate(`race/${id}`, {
      //   trigger: true
      // });
    }
  });

  return RaceView;
});
