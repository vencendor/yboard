﻿/*
 Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */

        CKEDITOR.dialog.add('checkbox', function(a){return{title:a.lang.checkboxAndRadio.checkboxTitle, minWidth:350, minHeight:140, onShow:function(){var c = this; delete c.checkbox; var b = c.getParentEditor().getSelection().getSelectedElement(); if (b && b.getAttribute('type') == 'checkbox'){c.checkbox = b; c.setupContent(b); }}, onOk:function(){var b, c = this.checkbox, d = !c; if (d){b = this.getParentEditor(); c = b.document.createElement('input'); c.setAttribute('type', 'checkbox'); }if (d)b.insertElement(c); this.commitContent({element:c}); }, contents:[{id:'info', label:a.lang.checkboxAndRadio.checkboxTitle, title:a.lang.checkboxAndRadio.checkboxTitle, startupFocus:'txtName', elements:[{id:'txtName', type:'text', label:a.lang.common.name, 'default':'', accessKey:'N', setup:function(b){this.setValue(b.getAttribute('_cke_saved_name') || b.getAttribute('name') || ''); }, commit:function(b){var c = b.element; if (this.getValue())c.setAttribute('_cke_saved_name', this.getValue()); else{c.removeAttribute('_cke_saved_name'); c.removeAttribute('name'); }}}, {id:'txtValue', type:'text', label:a.lang.checkboxAndRadio.value, 'default':'', accessKey:'V', setup:function(b){this.setValue(b.getAttribute('value') || ''); }, commit:function(b){var c = b.element; if (this.getValue())c.setAttribute('value', this.getValue()); else c.removeAttribute('value'); }}, {id:'cmbSelected', type:'checkbox', label:a.lang.checkboxAndRadio.selected, 'default':'', accessKey:'S', value:'checked', setup:function(b){this.setValue(b.getAttribute('checked')); }, commit:function(b){var c = b.element; if (CKEDITOR.env.ie){var d = !!c.getAttribute('checked'), e = !!this.getValue(); if (d != e){var f = CKEDITOR.dom.element.createFromHtml('<input type="checkbox"' + (e?' checked="checked"':'') + '></input>', a.document); c.copyAttributes(f, {type:1, checked:1}); f.replace(c); a.getSelection().selectElement(f); b.element = f; }} else if (this.getValue())c.setAttribute('checked', this.getValue()); else c.removeAttribute('checked'); }}]}]}; });
