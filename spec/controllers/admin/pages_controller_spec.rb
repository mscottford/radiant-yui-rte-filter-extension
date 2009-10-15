require File.dirname(__FILE__) + '/../../spec_helper'

describe Admin::PagesController do
  integrate_views
  dataset :users, :pages

  before :each do
    login_as :existing
  end

  describe "edit" do
    it "should include YUI dependencies" do
      get :edit, :id => pages(:home)
      response.should have_tag('link[href^=http://yui.yahooapis.com/combo?2.8.0r4]')
      response.should have_tag('script[src^=http://yui.yahooapis.com/combo?2.8.0r4]')
    end

    it "should include the extension javascript" do
      get :edit, :id => pages(:home)
      response.should have_tag('script[src^=/javascripts/extensions/yui_rte_filter/yui_rte_filter.js]')
    end

    it "should include the extension stylesheet" do
      get :edit, :id => pages(:home)
      response.should have_tag('link[href^=/stylesheets/extensions/yui_rte_filter/yui_rte_filter.css]')
    end
  end
end
