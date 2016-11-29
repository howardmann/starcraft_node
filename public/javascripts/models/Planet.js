define(["backbone"], function(Backbone){
  return Backbone.Model.extend({
    urlRoot: '/planets',
    defaults: {
      name: 'name',
      description: 'description'
    }
  })
});
