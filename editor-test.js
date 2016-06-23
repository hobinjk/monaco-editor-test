require.config({paths: {'vs': 'node_modules/monaco-editor/dev/vs'}});
require(['vs/editor/editor.main'], function() {
  var editor = monaco.editor.create(document.getElementById('container'), {
    value: [
      '<!doctype html>',
      '<html>',
      '<head></head>',
      '<body>Hello World!</body>',
      '</html>'
    ].join('\n'),
    language: 'html'
  });

  editor.addListener('contentChanged', updatePreview);
  var previewFrame = document.getElementById('preview-frame');

  function updatePreview() {
    var value = editor.getValue();
    previewFrame.src = 'data:text/html;base64,' + btoa(value);
  }

  updatePreview();
});
