﻿/*
 Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */

        (function(){var a = function(){this.toolbars = []; this.focusCommandExecuted = false; }; a.prototype.focus = function(){for (var c = 0, d; d = this.toolbars[c++]; )for (var e = 0, f; f = d.items[e++]; )if (f.focus){f.focus(); return; }}; var b = {toolbarFocus:{modes:{wysiwyg:1, source:1}, exec:function(c){if (c.toolbox){c.toolbox.focusCommandExecuted = true; if (CKEDITOR.env.ie)setTimeout(function(){c.toolbox.focus(); }, 100); else c.toolbox.focus(); }}}}; CKEDITOR.plugins.add('toolbar', {init:function(c){var d = function(e, f){switch (f){case 39:case 9:while ((e = e.next || e.toolbar.next && e.toolbar.next.items[0]) && (!e.focus)){}if (e)e.focus(); else c.toolbox.focus(); return false; case 37:case CKEDITOR.SHIFT + 9:while ((e = e.previous || e.toolbar.previous && e.toolbar.previous.items[e.toolbar.previous.items.length - 1]) && (!e.focus)){}if (e)e.focus(); else{var g = c.toolbox.toolbars[c.toolbox.toolbars.length - 1].items; g[g.length - 1].focus(); }return false; case 27:c.focus(); return false; case 13:case 32:e.execute(); return false; }return true; }; c.on('themeSpace', function(e){if (e.data.space == c.config.toolbarLocation){c.toolbox = new a(); var f = ['<div class="cke_toolbox"'], g = c.config.toolbarStartupExpanded, h; f.push(g?'>':' style="display:none">'); var i = c.toolbox.toolbars, j = c.config.toolbar instanceof Array?c.config.toolbar:c.config['toolbar_' + c.config.toolbar]; for (var k = 0; k < j.length; k++){var l = j[k]; if (!l)continue; var m = 'cke_' + CKEDITOR.tools.getNextNumber(), n = {id:m, items:[]}; if (h){f.push('</div>'); h = 0; }if (l === '/'){f.push('<div class="cke_break"></div>'); continue; }f.push('<span id="', m, '" class="cke_toolbar"><span class="cke_toolbar_start"></span>'); var o = i.push(n) - 1; if (o > 0){n.previous = i[o - 1]; n.previous.next = n; }for (var p = 0; p < l.length; p++){var q, r = l[p]; if (r == '-')q = CKEDITOR.ui.separator; else q = c.ui.create(r); if (q){if (q.canGroup){if (!h){f.push('<span class="cke_toolgroup">'); h = 1; }} else if (h){f.push('</span>'); h = 0; }var s = q.render(c, f); o = n.items.push(s) - 1; if (o > 0){s.previous = n.items[o - 1]; s.previous.next = s; }s.toolbar = n; s.onkey = d; s.onfocus = function(){if (!c.toolbox.focusCommandExecuted)c.focus(); }; }}if (h){f.push('</span>'); h = 0; }f.push('<span class="cke_toolbar_end"></span></span>'); }f.push('</div>'); if (c.config.toolbarCanCollapse){var t = CKEDITOR.tools.addFunction(function(){c.execCommand('toolbarCollapse'); }), u = 'cke_' + CKEDITOR.tools.getNextNumber(); c.addCommand('toolbarCollapse', {exec:function(v){var w = CKEDITOR.document.getById(u), x = w.getPrevious(), y = v.getThemeSpace('contents'), z = x.getParent(), A = parseInt(y.$.style.height, 10), B = z.$.offsetHeight; if (x.isVisible()){x.hide();
                w.addClass('cke_toolbox_collapser_min'); } else{x.show(); w.removeClass('cke_toolbox_collapser_min'); }var C = z.$.offsetHeight - B; y.setStyle('height', A - C + 'px'); }, modes:{wysiwyg:1, source:1}}); f.push('<a id="' + u + '" class="cke_toolbox_collapser'); if (!g)f.push(' cke_toolbox_collapser_min'); f.push('" onclick="CKEDITOR.tools.callFunction(' + t + ')"></a>'); }e.data.html += f.join(''); }}); c.addCommand('toolbarFocus', b.toolbarFocus); }}); })(); CKEDITOR.ui.separator = {render:function(a, b){b.push('<span class="cke_separator"></span>'); return{}; }}; CKEDITOR.config.toolbarLocation = 'top'; CKEDITOR.config.toolbar_Basic = [['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']]; CKEDITOR.config.toolbar_Full = [['Source', '-', 'Save', 'NewPage', 'Preview', '-', 'Templates'], ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'], ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'], ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'], '/', ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Link', 'Unlink', 'Anchor'], ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'], '/', ['Styles', 'Format', 'Font', 'FontSize'], ['TextColor', 'BGColor'], ['Maximize', 'ShowBlocks', '-', 'About']]; CKEDITOR.config.toolbar = 'Full'; CKEDITOR.config.toolbarCanCollapse = true; CKEDITOR.config.toolbarStartupExpanded = true;
