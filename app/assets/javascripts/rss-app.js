window.RSS = {
  Collections: {},
  Models: {},
  Routers: {},
  Views: {},
  Data: {},

  initialize: function () {
    RSS.Data.feeds = new RSS.Collections.Feeds();
    RSS.Data.feeds.fetch({
      success: function(){
        new RSS.Routers.Router();
        Backbone.history.start();
      }
    });
  }
};

$(RSS.initialize);