var yuiEditors = {};
function toggle_yui_editor(part_name, filter) {
  element_id = 'part_' + part_name + '_content';
  if (filter == "YUI Rich Text Editor") {
    yuiEditors[element_id] = new YAHOO.widget.Editor(element_id, {
      handleSubmit: true
    });
    yuiEditors[element_id].render();
  }
  else {
    console.log(element_id, yuiEditors[element_id]);
    if (yuiEditors[element_id]) {
      yuiEditors[element_id].destroy();
      yuiEditors[element_id] = null;
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
  }
);
