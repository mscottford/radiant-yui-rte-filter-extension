var paperclippedSupportEnabled = true;

function configurePaperclippedImageButton(editor) {
  // plugin paperclipped image dialog
  editor.on('toolbarLoaded', function() {
    this.toolbar.on('insertimageClick', function() {
      var _sel = this._getSelectedElement();
      // If the selected element is an image, do the normal thing so they can manipulate the image
      if (_sel && _sel.tagName && (_sel.tagName.toLowerCase() == 'img')) {
          // Do the normal thing here..
      } else {
          popup = new Popup.Window(document.getElementById('asset-bucket'));
          popup.show();
        
          // This is important.. Return false here to not fire the rest of the listeners
          return false;
      }
    }, this, true);
  }, editor, true);
}