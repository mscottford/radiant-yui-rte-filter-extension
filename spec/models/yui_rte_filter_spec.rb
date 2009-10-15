require File.dirname(__FILE__) + '/../spec_helper'

describe YuiRteFilter do
  it "should be named YUI Rich Text Editor" do
    YuiRteFilter.filter_name.should == "YUI Rich Text Editor"
  end

  it "should pass text through unchanged" do
    YuiRteFilter.filter('Testing').should == 'Testing'
  end
end
