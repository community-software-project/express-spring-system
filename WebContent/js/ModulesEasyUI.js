(function() {
	var baseName = '/express-spring-system';
    var singleFile = (typeof ModulesImport == "object" && ModulesImport.singleFile);
    window.ModulesImport = {
        _scriptName: (!singleFile) ? "js/ModulesEasyUI.js'," : "ModulesEasyUI.js',",
        _getScriptLocation: function () {
            var scriptLocation = "";
            var scriptName = ModulesImport._scriptName;
            var scripts = document.getElementsByTagName('script');
            for (var i=0, len=scripts.length; i<len; i++) {
                var src = scripts[i].getAttribute('src');
                if (src) {
                    var index = src.lastIndexOf(scriptName); 
                    // set path length for src up to a query string
                    var pathLength = src.lastIndexOf('?');
                    if (pathLength < 0) {
                        pathLength = src.length;
                    }
                    // is it found, at the end of the URL?
                    if ((index > -1) && (index + scriptName.length == pathLength)) {
                        scriptLocation = src.slice(0, pathLength - scriptName.length);
                        break;
                    }
                }
            }
            return scriptLocation;
         }
    };
    if(!singleFile) {
        var jsfiles = new Array(
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.accordion.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.calendar.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.combo.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.combobox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.combogrid.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.combotree.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.datagrid.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.datebox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.datetimebox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.datetimespinner.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.dialog.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.draggable.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.droppable.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.filebox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.form.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.layout.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.linkbutton.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.menu.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.menubutton.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.messager.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.numberbox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.numberspinner.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.pagination.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.panel.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.parser.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.progressbar.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.propertygrid.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.resizable.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.searchbox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.slider.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.spinner.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.splitbutton.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.tabs.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.textbox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.timespinner.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.tooltip.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.tree.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.treegrid.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.validatebox.js',
//        		baseName+'/EasyUI_1.4.1/plugins/jquery.window.js',
//        		baseName+'/EasyUI_1.4.1/locale/easyui-lang-en.js',
        		baseName+'/EasyUI_1.4.1/locale/easyui-lang-zh_CN.js',
//        		baseName+'/EasyUI_1.4.1/locale/easyui-lang-zh_TW.js',
        		baseName+'/EasyUI_1.4.1/easyloader.js',
        		baseName+'/EasyUI_1.4.1/jquery.easyui.min.js'
//        		baseName+'/EasyUI_1.4.1/jquery.min.js'
//        		baseName+'/common/index-menu-master/js/global.js',
//        		baseName+'/common/index-menu-master/build/js/metro.js',
//        		baseName+'/common/index-menu-master/build/js/metro.min.js'
        		
        );
        var cssfiles = new Array(
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/accordion.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/calendar.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/combo.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/combobox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/datagrid.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/datebox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/dialog.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/easyui.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/filebox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/layout.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/linkbutton.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/menu.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/menubutton.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/messager.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/numberbox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/pagination.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/panel.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/progressbar.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/propertygrid.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/searchbox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/slider.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/spinner.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/splitbutton.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/tabs.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/textbox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/tooltip.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/tree.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/validatebox.css',
        		baseName+'/EasyUI_1.4.1/themes/bootstrap/window.css',
        		baseName+'/EasyUI_1.4.1/themes/color.css',
        		baseName+'/EasyUI_1.4.1/themes/icon.css'
            );
        var agent = navigator.userAgent;
        var docWrite = (agent.match("MSIE") || agent.match("Safari") || agent.match("Firefox") || agent.match("Gecko") || agent.match("Camino"));
        var allScriptTags = undefined;
        if(docWrite) {
            allScriptTags = new Array(jsfiles.length);
        }
        var host = ModulesImport._getScriptLocation();
        for (var i=0, len=jsfiles.length; i<len; i++) {
            if (docWrite) {
                allScriptTags[i] = "<script src='" + host + jsfiles[i] +"'></script>";
            } else {
                var s = document.createElement("script");
                s.src = host + jsfiles[i];
                var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
                h.appendChild(s);
            }
        }
        if (docWrite) {
            document.write(allScriptTags.join(""));
        }

        var allCssTags = undefined;
        var docCssWrite = (agent.match("MSIE") || agent.match("Safari") || agent.match("Firefox") || agent.match("Gecko") || agent.match("Camino"));
        if(docCssWrite) {
            allCssTags = new Array(cssfiles.length);
        }
        for (var i=0, len=allCssTags.length; i<len; i++) {
            if (docCssWrite) {
            	allCssTags[i] = "<link rel='StyleSheet' href='" + host + cssfiles[i] +"'type='text/css' media='screen'>"; 
            } else {
            	var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
                var link = document.createElement('link');
                link .setAttribute('rel','stylesheet');  
                link .setAttribute('href',host + cssfiles[i]);  
                link .setAttribute('type','text/css');  
                h.appendChild(link);
               
            }
        }
        if (docCssWrite) {
            document.write(allCssTags.join(""));
        }
    }
})();