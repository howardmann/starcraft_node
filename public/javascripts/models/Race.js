define(["backbone"], function(Backbone){
  return Backbone.Model.extend({
    urlRoot: '/races',
    defaults: {
      name: 'name',
      description: 'description'
    }
  })
});
