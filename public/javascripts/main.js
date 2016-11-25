var app = app || {};

app.Race = Backbone.Model.extend({
  urlRoot: '/races',
  defaults: {
    name: 'name',
    description: 'description'
  }
});

app.Races = Backbone.Collection.extend({
  model: app.Race,
  url: '/races'
});

app.RaceView = Backbone.View.extend({
  className: 'race-view',

  template: _.template('<p><%=name%><p>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

app.RacesView = Backbone.View.extend({
  className: 'races-view',

  initialize: function(){
    this.collection.on('add', this.addOne, this);
  },

  addOne: function(race){
    var raceView = new app.RaceView({model: race});
    raceView.save;
    this.$('.races-view-content').append(raceView.render().el);
  },

  template: _.template('<h2>Races</h2><div class="races-view-content"></div>'),

  render: function(){
    this.$el.prepend(this.template);
    this.collection.each(this.addOne, this);
    return this;
  }
});

$(document).ready(function(){
  console.log("ready");
  app.races = new app.Races();
  app.races.fetch();

  app.racesView = new app.RacesView({
    collection: app.races
  });

  $('#main').append(app.racesView.render().el);



});
