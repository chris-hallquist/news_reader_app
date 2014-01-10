RSS.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'feedsIndex',
    'feeds/:id': 'feedShow',
    'feeds/:feed_id/entries/:id': 'entryShow'
  },

  entryShow: function(feed_id, id) {
    var feed = RSS.Data.feeds.get(feed_id);
    var entries = feed.get('entries');
    console.log(feed);
    var entry = entries.get(id);
    var view = new RSS.Views.EntryShow({
      entry: entry
    });
    this._swapView(view);
  },

  feedsIndex: function() {
    var that = this;
    RSS.Data.feeds.fetch({
      success: function() {
        var view = new RSS.Views.FeedsIndex({
          feeds: RSS.Data.feeds
        });
        that._swapView(view);
      }
    });
  },

  feedShow: function(id) {
    var feed = RSS.Data.feeds.get(id);
    var view = new RSS.Views.FeedShow({
      feed: feed
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $('body').html(view.render().$el);
  }
});