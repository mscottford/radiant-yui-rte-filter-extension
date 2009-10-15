class YuiRteFilterExtension < Radiant::Extension
  version "1.0"
  description "Allows you to compose page parts or snippets using the YUI rich text editor."
  url "http://developer.yahoo.com/yui/editor/"

  def activate
    YuiRteFilter
    #Page.send :include, TextileTags
  end
end
