define(["backbone", "handlebars", "text!templates/DetailedRaceView.hbs"], function(Backbone, Handlebars, template) {
  var DetailedRaceView = Backbone.View.extend({
    template: Handlebars.compile(template),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return DetailedRaceView;
});
