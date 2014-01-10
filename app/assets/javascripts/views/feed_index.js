RSS.Views.FeedsIndex = Backbone.View.extend({
  events: {},

  template: JST['feeds/index'],

  render: function() {
    var renderedContent = this.template({
      feeds: RSS.Data.feeds
    });

    this.$el.append(renderedContent);
    return this;
  }
});