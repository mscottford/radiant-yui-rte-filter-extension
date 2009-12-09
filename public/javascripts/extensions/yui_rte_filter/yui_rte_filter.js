var yuiEditors = new Hash();
function toggle_yui_editor(part_name, filter) {
  element_id = 'part_' + part_name + '_content';
  if (filter == "YUI Rich Text Editor") {
    editor = new YAHOO.widget.Editor(element_id, { handleSubmit: true });
    yuiEditors.set(element_id, editor);

    // plugin paperclipped image dialog
    editor.on('toolbarLoaded', function() {
      this.toolbar.on('insertimageClick', function() {
        var _sel = this._getSelectedElement();
        // If the selected element is an image, do the normal thing so they can manipulate the image
        if (_sel && _sel.tagName && (_sel.tagName.toLowerCase() == 'img')) {
            // Do the normal thing here..
        } else {
            // They don't have a selected image, open the image browser window
            win = window.open('/admin/assets/browser', 'IMAGE_BROWSER',
                'left=20,top=20,width=500,height=500,toolbar=0,resizable=0,status=0');
            if (!win) {
                // Catch the popup blocker
                alert('Please disable your popup blocker!');
            }
            // This is important.. Return false here to not fire the rest of the listeners
            return false;
        }
      }, this, true);
    }, editor, true);
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
