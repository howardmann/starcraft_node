define(["backbone", "router"], function(Backbone, Router){
  $(document).ready(function(){
    new Router();
    Backbone.history.start();
  });
});
