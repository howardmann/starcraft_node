define(["backbone", "models/Race"], function(Backbone, Race){
  return Backbone.Collection.extend({
    model: Race,
    url: '/races'
  })
});
