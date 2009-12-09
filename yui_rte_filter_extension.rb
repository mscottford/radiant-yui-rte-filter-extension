class YuiRteFilterExtension < Radiant::Extension
  version "1.0"
  description "Allows you to compose page parts or snippets using the YUI rich text editor."
  url "http://developer.yahoo.com/yui/editor/"

  def activate
    YuiRteFilter
    admin.page.edit.add :main, 'yui_rte_includes', :before => 'edit_header'
    admin.page.edit.add :part_controls, 'yui_rte_part'
  end
end
