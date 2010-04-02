var yuiEditors = new Hash();
function toggle_yui_editor(part_name, filter) {
  element_id = 'part_' + part_name + '_content';
  if (filter == "YUI Rich Text Editor") {
    editor = new YAHOO.widget.Editor(element_id, { handleSubmit: true });
    yuiEditors.set(element_id, editor);

    if (paperclippedSupportEnabled) {
      configurePaperclippedImageButton(editor);
    }

    editor.render();
  }
  else {
    editor = yuiEditors.get(element_id);
    if (editor != null) {
      editor.destroy();
      yuiEditors.unset(element_id);
    }
  }
}

Event.observe(window, 'load',
  function() {
    parts = $$('.part');
    for (var i = 0; i < parts.length; i++) {
      if (/part-([\w\d-]+)/i.test(parts[i].id)) {
        var part_name = RegExp.$1;
        toggle_yui_editor(part_name, $F('part_' + part_name + '_filter_id'));
      }
    }
    $$('body')[0].addClassName('yui-skin-sam');

    // check if page_preview is loaded
    preview_button = $('show-preview');
    if (preview_button != null) {
      Event.observe(preview_button, 'click', function() {
          yuiEditors.values().each(function(editor) { editor.saveHTML(); });
        return preview(this);
      });
    }
  }
);
