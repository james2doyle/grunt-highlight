var hljs = require('highlight.js');
// If you know the language
hljs.highlight(lang, code).value;
// Automatic language detection
hljs.highlightAuto(code).value;