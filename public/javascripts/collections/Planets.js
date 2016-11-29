define(["backbone", "models/Planet"], function(Backbone, Planet){
  return Backbone.Collection.extend({
    model: Planet,
    url: '/planets'
  })
});
