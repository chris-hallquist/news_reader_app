RSS.Views.FeedShow = Backbone.View.extend({
  events: {
    'click button#feed_refresh': 'refresh'
  },

  initialize: function (options) {
    this.feed = options.feed;
    this.listenTo(this.feed, 'change', this.render);
    // this.listenTo(this.feed.get('entries'), 'add remove change reset', this.render);
  },

  refresh: function () {
    this.feed.fetch();
  },

  render: function () {
    var renderedContent = this.template({
      feed: this.feed
    });

    this.$el.append(renderedContent);
    return this;
  },

  template: JST['feeds/show']
});