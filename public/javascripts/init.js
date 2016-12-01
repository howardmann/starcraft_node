define(["backbone", "./router"], function(Backbone, Router){
  $(document).ready(function(){
    app.router = new Router();
    Backbone.history.start();
  });
});
