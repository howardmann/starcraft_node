define(["backbone", "./router"], function(Backbone, Router){
  $(document).ready(function(){
    var appRouter = new Router();
    Backbone.history.start();
  });
});
