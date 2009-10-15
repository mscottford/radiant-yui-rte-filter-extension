class YuiRteFilter < TextFilter
  self.filter_name = "YUI Rich Text Editor"

  description_file File.dirname(__FILE__) + "/../yui_rte.html"
  def filter(text)
    text
  end
end
