(function() {
    var singleFile = (typeof ModulesImport == "object" && ModulesImport.singleFile);
    window.ModulesImport = {
        _scriptName: (!singleFile) ? "js/ModulesImport.js" : "ModulesImport.js",
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
//            'KendoUI/js/jquery.min.js',
            'KendoUI/js/kendo.all.min.js',
            'KendoUI/js/kendo.autocomplete.min.js',
            'KendoUI/js/kendo.binder.min.js',
            'KendoUI/js/kendo.calendar.min.js',
            'KendoUI/js/kendo.colorpicker.min.js',
            'KendoUI/js/kendo.columnmenu.min.js',
            'KendoUI/js/kendo.combobox.min.js',
            'KendoUI/js/kendo.core.min.js',
            'KendoUI/js/kendo.data.min.js',
            'KendoUI/js/kendo.data.odata.min.js',
            'KendoUI/js/kendo.data.xml.min.js',
            'KendoUI/js/kendo.dataviz.barcode.min.js',
            'KendoUI/js/kendo.dataviz.canvas.min.js',
            'KendoUI/js/kendo.dataviz.chart.min.js',
            'KendoUI/js/kendo.dataviz.chart.polar.min.js',
            'KendoUI/js/kendo.dataviz.core.min.js',
            'KendoUI/js/kendo.dataviz.gauge.min.js',
            'KendoUI/js/kendo.dataviz.min.js',
            'KendoUI/js/kendo.dataviz.qrcode.min.js',
            'KendoUI/js/kendo.dataviz.sparkline.min.js',
            'KendoUI/js/kendo.dataviz.stock.min.js',
            'KendoUI/js/kendo.dataviz.svg.min.js',
            'KendoUI/js/kendo.dataviz.themes.min.js',
            'KendoUI/js/kendo.dataviz.vml.min.js',
            'KendoUI/js/kendo.datepicker.min.js',
            'KendoUI/js/kendo.datetimepicker.min.js',
            'KendoUI/js/kendo.draganddrop.min.js',
            'KendoUI/js/kendo.dropdownlist.min.js',
            'KendoUI/js/kendo.editable.min.js',
            'KendoUI/js/kendo.editor.min.js',
            'KendoUI/js/kendo.filtermenu.min.js',
            'KendoUI/js/kendo.fx.min.js',
            'KendoUI/js/kendo.grid.min.js',
            'KendoUI/js/kendo.groupable.min.js',
            'KendoUI/js/kendo.imagebrowser.min.js',
            'KendoUI/js/kendo.list.min.js',
            'KendoUI/js/kendo.listview.min.js',
            'KendoUI/js/kendo.menu.min.js',
//            'KendoUI/js/kendo.mobile.actionsheet.min.js',
//            'KendoUI/js/kendo.mobile.application.min.js',
//            'KendoUI/js/kendo.mobile.button.min.js',
//            'KendoUI/js/kendo.mobile.buttongroup.min.js',
//            'KendoUI/js/kendo.mobile.drawer.min.js',
//            'KendoUI/js/kendo.mobile.listview.min.js',
//            'KendoUI/js/kendo.mobile.loader.min.js',
//            'KendoUI/js/kendo.mobile.min.js',
//            'KendoUI/js/kendo.mobile.modalview.min.js',
//            'KendoUI/js/kendo.mobile.navbar.min.js',
//            'KendoUI/js/kendo.mobile.pane.min.js',
//            'KendoUI/js/kendo.mobile.popover.min.js',
//            'KendoUI/js/kendo.mobile.scroller.min.js',
//            'KendoUI/js/kendo.mobile.scrollview.min.js',
//            'KendoUI/js/kendo.mobile.shim.min.js',
//            'KendoUI/js/kendo.mobile.splitview.min.js',
//            'KendoUI/js/kendo.mobile.switch.min.js',
//            'KendoUI/js/kendo.mobile.tabstrip.min.js',
//            'KendoUI/js/kendo.mobile.view.min.js',
            'KendoUI/js/kendo.multiselect.min.js',
            'KendoUI/js/kendo.numerictextbox.min.js',
            'KendoUI/js/kendo.pager.min.js',
            'KendoUI/js/kendo.panelbar.min.js',
            'KendoUI/js/kendo.popup.min.js',
            'KendoUI/js/kendo.reorderable.min.js',
            'KendoUI/js/kendo.resizable.min.js',
            'KendoUI/js/kendo.router.min.js',
            'KendoUI/js/kendo.scheduler.agendaview.min.js',
            'KendoUI/js/kendo.scheduler.dayview.min.js',
            'KendoUI/js/kendo.scheduler.min.js',
            'KendoUI/js/kendo.scheduler.monthview.min.js',
            'KendoUI/js/kendo.scheduler.recurrence.min.js',
            'KendoUI/js/kendo.scheduler.view.min.js',
            'KendoUI/js/kendo.selectable.min.js',
            'KendoUI/js/kendo.slider.min.js',
            'KendoUI/js/kendo.sortable.min.js',
            'KendoUI/js/kendo.splitter.min.js',
            'KendoUI/js/kendo.tabstrip.min.js',
            'KendoUI/js/kendo.timepicker.min.js',
            'KendoUI/js/kendo.timezones.min.js',
            'KendoUI/js/kendo.tooltip.min.js',
            'KendoUI/js/kendo.touch.min.js',
            'KendoUI/js/kendo.treeview.min.js',
            'KendoUI/js/kendo.upload.min.js',
            'KendoUI/js/kendo.userevents.min.js',
            'KendoUI/js/kendo.validator.min.js',
            'KendoUI/js/kendo.view.min.js',
            'KendoUI/js/kendo.web.min.js',
            'KendoUI/js/kendo.window.min.js'
//            'KendoUI/js/cultures/kendo.culture.af-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.af.min.js',
//            'KendoUI/js/cultures/kendo.culture.am-ET.min.js',
//            'KendoUI/js/cultures/kendo.culture.am.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-AE.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-BH.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-DZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-EG.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-IQ.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-JO.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-KW.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-LB.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-LY.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-MA.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-OM.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-QA.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-SA.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-SY.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-TN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar-YE.min.js',
//            'KendoUI/js/cultures/kendo.culture.ar.min.js',
//            'KendoUI/js/cultures/kendo.culture.arn-CL.min.js',
//            'KendoUI/js/cultures/kendo.culture.arn.min.js',
//            'KendoUI/js/cultures/kendo.culture.as-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.as.min.js',
//            'KendoUI/js/cultures/kendo.culture.az-Cyrl-AZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.az-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.az-Latn-AZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.az-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.az.min.js',
//            'KendoUI/js/cultures/kendo.culture.ba-RU.min.js',
//            'KendoUI/js/cultures/kendo.culture.ba.min.js',
//            'KendoUI/js/cultures/kendo.culture.be-BY.min.js',
//            'KendoUI/js/cultures/kendo.culture.be.min.js',
//            'KendoUI/js/cultures/kendo.culture.bg-BG.min.js',
//            'KendoUI/js/cultures/kendo.culture.bg.min.js',
//            'KendoUI/js/cultures/kendo.culture.bn-BD.min.js',
//            'KendoUI/js/cultures/kendo.culture.bn-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.bn.min.js',
//            'KendoUI/js/cultures/kendo.culture.bo-CN.min.js',
//            'KendoUI/js/cultures/kendo.culture.bo.min.js',
//            'KendoUI/js/cultures/kendo.culture.br-FR.min.js',
//            'KendoUI/js/cultures/kendo.culture.br.min.js',
//            'KendoUI/js/cultures/kendo.culture.bs-Cyrl-BA.min.js',
//            'KendoUI/js/cultures/kendo.culture.bs-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.bs-Latn-BA.min.js',
//            'KendoUI/js/cultures/kendo.culture.bs-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.bs.min.js',
//            'KendoUI/js/cultures/kendo.culture.ca-ES.min.js',
//            'KendoUI/js/cultures/kendo.culture.ca.min.js',
//            'KendoUI/js/cultures/kendo.culture.co-FR.min.js',
//            'KendoUI/js/cultures/kendo.culture.co.min.js',
//            'KendoUI/js/cultures/kendo.culture.cs-CZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.cs.min.js',
//            'KendoUI/js/cultures/kendo.culture.cy-GB.min.js',
//            'KendoUI/js/cultures/kendo.culture.cy.min.js',
//            'KendoUI/js/cultures/kendo.culture.da-DK.min.js',
//            'KendoUI/js/cultures/kendo.culture.da.min.js',
//            'KendoUI/js/cultures/kendo.culture.de-AT.min.js',
//            'KendoUI/js/cultures/kendo.culture.de-CH.min.js',
//            'KendoUI/js/cultures/kendo.culture.de-DE.min.js',
//            'KendoUI/js/cultures/kendo.culture.de-LI.min.js',
//            'KendoUI/js/cultures/kendo.culture.de-LU.min.js',
//            'KendoUI/js/cultures/kendo.culture.de.min.js',
//            'KendoUI/js/cultures/kendo.culture.dsb-DE.min.js',
//            'KendoUI/js/cultures/kendo.culture.dsb.min.js',
//            'KendoUI/js/cultures/kendo.culture.dv-MV.min.js',
//            'KendoUI/js/cultures/kendo.culture.dv.min.js',
//            'KendoUI/js/cultures/kendo.culture.el-GR.min.js',
//            'KendoUI/js/cultures/kendo.culture.el.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-029.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-AU.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-BZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-CA.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-GB.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-IE.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-JM.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-MY.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-NZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-PH.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-SG.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-TT.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-US.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.en-ZW.min.js',
//            'KendoUI/js/cultures/kendo.culture.en.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-AR.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-BO.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-CL.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-CO.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-CR.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-DO.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-EC.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-ES.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-GT.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-HN.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-MX.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-NI.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-PA.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-PE.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-PR.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-PY.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-SV.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-US.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-UY.min.js',
//            'KendoUI/js/cultures/kendo.culture.es-VE.min.js',
//            'KendoUI/js/cultures/kendo.culture.es.min.js',
//            'KendoUI/js/cultures/kendo.culture.et-EE.min.js',
//            'KendoUI/js/cultures/kendo.culture.et.min.js',
//            'KendoUI/js/cultures/kendo.culture.eu-ES.min.js',
//            'KendoUI/js/cultures/kendo.culture.eu.min.js',
//            'KendoUI/js/cultures/kendo.culture.fa-IR.min.js',
//            'KendoUI/js/cultures/kendo.culture.fa.min.js',
//            'KendoUI/js/cultures/kendo.culture.fi-FI.min.js',
//            'KendoUI/js/cultures/kendo.culture.fi.min.js',
//            'KendoUI/js/cultures/kendo.culture.fil-PH.min.js',
//            'KendoUI/js/cultures/kendo.culture.fil.min.js',
//            'KendoUI/js/cultures/kendo.culture.fo-FO.min.js',
//            'KendoUI/js/cultures/kendo.culture.fo.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-BE.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-CA.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-CH.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-FR.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-LU.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr-MC.min.js',
//            'KendoUI/js/cultures/kendo.culture.fr.min.js',
//            'KendoUI/js/cultures/kendo.culture.fy-NL.min.js',
//            'KendoUI/js/cultures/kendo.culture.fy.min.js',
//            'KendoUI/js/cultures/kendo.culture.ga-IE.min.js',
//            'KendoUI/js/cultures/kendo.culture.ga.min.js',
//            'KendoUI/js/cultures/kendo.culture.gd-GB.min.js',
//            'KendoUI/js/cultures/kendo.culture.gd.min.js',
//            'KendoUI/js/cultures/kendo.culture.gl-ES.min.js',
//            'KendoUI/js/cultures/kendo.culture.gl.min.js',
//            'KendoUI/js/cultures/kendo.culture.gsw-FR.min.js',
//            'KendoUI/js/cultures/kendo.culture.gsw.min.js',
//            'KendoUI/js/cultures/kendo.culture.gu-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.gu.min.js',
//            'KendoUI/js/cultures/kendo.culture.ha-Latn-NG.min.js',
//            'KendoUI/js/cultures/kendo.culture.ha-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.ha.min.js',
//            'KendoUI/js/cultures/kendo.culture.he-IL.min.js',
//            'KendoUI/js/cultures/kendo.culture.he.min.js',
//            'KendoUI/js/cultures/kendo.culture.hi-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.hi.min.js',
//            'KendoUI/js/cultures/kendo.culture.hr-BA.min.js',
//            'KendoUI/js/cultures/kendo.culture.hr-HR.min.js',
//            'KendoUI/js/cultures/kendo.culture.hr.min.js',
//            'KendoUI/js/cultures/kendo.culture.hsb-DE.min.js',
//            'KendoUI/js/cultures/kendo.culture.hsb.min.js',
//            'KendoUI/js/cultures/kendo.culture.hu-HU.min.js',
//            'KendoUI/js/cultures/kendo.culture.hu.min.js',
//            'KendoUI/js/cultures/kendo.culture.hy-AM.min.js',
//            'KendoUI/js/cultures/kendo.culture.hy.min.js',
//            'KendoUI/js/cultures/kendo.culture.id-ID.min.js',
//            'KendoUI/js/cultures/kendo.culture.id.min.js',
//            'KendoUI/js/cultures/kendo.culture.ig-NG.min.js',
//            'KendoUI/js/cultures/kendo.culture.ig.min.js',
//            'KendoUI/js/cultures/kendo.culture.ii-CN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ii.min.js',
//            'KendoUI/js/cultures/kendo.culture.is-IS.min.js',
//            'KendoUI/js/cultures/kendo.culture.is.min.js',
//            'KendoUI/js/cultures/kendo.culture.it-CH.min.js',
//            'KendoUI/js/cultures/kendo.culture.it-IT.min.js',
//            'KendoUI/js/cultures/kendo.culture.it.min.js',
//            'KendoUI/js/cultures/kendo.culture.iu-Cans-CA.min.js',
//            'KendoUI/js/cultures/kendo.culture.iu-Cans.min.js',
//            'KendoUI/js/cultures/kendo.culture.iu-Latn-CA.min.js',
//            'KendoUI/js/cultures/kendo.culture.iu-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.iu.min.js',
//            'KendoUI/js/cultures/kendo.culture.ja-JP.min.js',
//            'KendoUI/js/cultures/kendo.culture.ja.min.js',
//            'KendoUI/js/cultures/kendo.culture.ka-GE.min.js',
//            'KendoUI/js/cultures/kendo.culture.ka.min.js',
//            'KendoUI/js/cultures/kendo.culture.kk-KZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.kk.min.js',
//            'KendoUI/js/cultures/kendo.culture.kl-GL.min.js',
//            'KendoUI/js/cultures/kendo.culture.kl.min.js',
//            'KendoUI/js/cultures/kendo.culture.km-KH.min.js',
//            'KendoUI/js/cultures/kendo.culture.km.min.js',
//            'KendoUI/js/cultures/kendo.culture.kn-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.kn.min.js',
//            'KendoUI/js/cultures/kendo.culture.ko-KR.min.js',
//            'KendoUI/js/cultures/kendo.culture.ko.min.js',
//            'KendoUI/js/cultures/kendo.culture.kok-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.kok.min.js',
//            'KendoUI/js/cultures/kendo.culture.ky-KG.min.js',
//            'KendoUI/js/cultures/kendo.culture.ky.min.js',
//            'KendoUI/js/cultures/kendo.culture.lb-LU.min.js',
//            'KendoUI/js/cultures/kendo.culture.lb.min.js',
//            'KendoUI/js/cultures/kendo.culture.lo-LA.min.js',
//            'KendoUI/js/cultures/kendo.culture.lo.min.js',
//            'KendoUI/js/cultures/kendo.culture.lt-LT.min.js',
//            'KendoUI/js/cultures/kendo.culture.lt.min.js',
//            'KendoUI/js/cultures/kendo.culture.lv-LV.min.js',
//            'KendoUI/js/cultures/kendo.culture.lv.min.js',
//            'KendoUI/js/cultures/kendo.culture.mi-NZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.mi.min.js',
//            'KendoUI/js/cultures/kendo.culture.mk-MK.min.js',
//            'KendoUI/js/cultures/kendo.culture.mk.min.js',
//            'KendoUI/js/cultures/kendo.culture.ml-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ml.min.js',
//            'KendoUI/js/cultures/kendo.culture.mn-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.mn-MN.min.js',
//            'KendoUI/js/cultures/kendo.culture.mn-Mong-CN.min.js',
//            'KendoUI/js/cultures/kendo.culture.mn-Mong.min.js',
//            'KendoUI/js/cultures/kendo.culture.mn.min.js',
//            'KendoUI/js/cultures/kendo.culture.moh-CA.min.js',
//            'KendoUI/js/cultures/kendo.culture.moh.min.js',
//            'KendoUI/js/cultures/kendo.culture.mr-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.mr.min.js',
//            'KendoUI/js/cultures/kendo.culture.ms-BN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ms-MY.min.js',
//            'KendoUI/js/cultures/kendo.culture.ms.min.js',
//            'KendoUI/js/cultures/kendo.culture.mt-MT.min.js',
//            'KendoUI/js/cultures/kendo.culture.mt.min.js',
//            'KendoUI/js/cultures/kendo.culture.nb-NO.min.js',
//            'KendoUI/js/cultures/kendo.culture.nb.min.js',
//            'KendoUI/js/cultures/kendo.culture.ne-NP.min.js',
//            'KendoUI/js/cultures/kendo.culture.ne.min.js',
//            'KendoUI/js/cultures/kendo.culture.nl-BE.min.js',
//            'KendoUI/js/cultures/kendo.culture.nl-NL.min.js',
//            'KendoUI/js/cultures/kendo.culture.nl.min.js',
//            'KendoUI/js/cultures/kendo.culture.nn-NO.min.js',
//            'KendoUI/js/cultures/kendo.culture.nn.min.js',
//            'KendoUI/js/cultures/kendo.culture.no.min.js',
//            'KendoUI/js/cultures/kendo.culture.nso-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.nso.min.js',
//            'KendoUI/js/cultures/kendo.culture.oc-FR.min.js',
//            'KendoUI/js/cultures/kendo.culture.oc.min.js',
//            'KendoUI/js/cultures/kendo.culture.or-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.or.min.js',
//            'KendoUI/js/cultures/kendo.culture.pa-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.pa.min.js',
//            'KendoUI/js/cultures/kendo.culture.pl-PL.min.js',
//            'KendoUI/js/cultures/kendo.culture.pl.min.js',
//            'KendoUI/js/cultures/kendo.culture.prs-AF.min.js',
//            'KendoUI/js/cultures/kendo.culture.prs.min.js',
//            'KendoUI/js/cultures/kendo.culture.ps-AF.min.js',
//            'KendoUI/js/cultures/kendo.culture.ps.min.js',
//            'KendoUI/js/cultures/kendo.culture.pt-BR.min.js',
//            'KendoUI/js/cultures/kendo.culture.pt-PT.min.js',
//            'KendoUI/js/cultures/kendo.culture.pt.min.js',
//            'KendoUI/js/cultures/kendo.culture.qut-GT.min.js',
//            'KendoUI/js/cultures/kendo.culture.qut.min.js',
//            'KendoUI/js/cultures/kendo.culture.quz-BO.min.js',
//            'KendoUI/js/cultures/kendo.culture.quz-EC.min.js',
//            'KendoUI/js/cultures/kendo.culture.quz-PE.min.js',
//            'KendoUI/js/cultures/kendo.culture.quz.min.js',
//            'KendoUI/js/cultures/kendo.culture.rm-CH.min.js',
//            'KendoUI/js/cultures/kendo.culture.rm.min.js',
//            'KendoUI/js/cultures/kendo.culture.ro-RO.min.js',
//            'KendoUI/js/cultures/kendo.culture.ro.min.js',
//            'KendoUI/js/cultures/kendo.culture.ru-RU.min.js',
//            'KendoUI/js/cultures/kendo.culture.ru-UA.min.js',
//            'KendoUI/js/cultures/kendo.culture.ru.min.js',
//            'KendoUI/js/cultures/kendo.culture.rw-RW.min.js',
//            'KendoUI/js/cultures/kendo.culture.rw.min.js',
//            'KendoUI/js/cultures/kendo.culture.sa-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.sa.min.js',
//            'KendoUI/js/cultures/kendo.culture.sah-RU.min.js',
//            'KendoUI/js/cultures/kendo.culture.sah.min.js',
//            'KendoUI/js/cultures/kendo.culture.se-FI.min.js',
//            'KendoUI/js/cultures/kendo.culture.se-NO.min.js',
//            'KendoUI/js/cultures/kendo.culture.se-SE.min.js',
//            'KendoUI/js/cultures/kendo.culture.se.min.js',
//            'KendoUI/js/cultures/kendo.culture.si-LK.min.js',
//            'KendoUI/js/cultures/kendo.culture.si.min.js',
//            'KendoUI/js/cultures/kendo.culture.sk-SK.min.js',
//            'KendoUI/js/cultures/kendo.culture.sk.min.js',
//            'KendoUI/js/cultures/kendo.culture.sl-SI.min.js',
//            'KendoUI/js/cultures/kendo.culture.sl.min.js',
//            'KendoUI/js/cultures/kendo.culture.sma-NO.min.js',
//            'KendoUI/js/cultures/kendo.culture.sma-SE.min.js',
//            'KendoUI/js/cultures/kendo.culture.sma.min.js',
//            'KendoUI/js/cultures/kendo.culture.smj-NO.min.js',
//            'KendoUI/js/cultures/kendo.culture.smj-SE.min.js',
//            'KendoUI/js/cultures/kendo.culture.smj.min.js',
//            'KendoUI/js/cultures/kendo.culture.smn-FI.min.js',
//            'KendoUI/js/cultures/kendo.culture.smn.min.js',
//            'KendoUI/js/cultures/kendo.culture.sms-FI.min.js',
//            'KendoUI/js/cultures/kendo.culture.sms.min.js',
//            'KendoUI/js/cultures/kendo.culture.sq-AL.min.js',
//            'KendoUI/js/cultures/kendo.culture.sq.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Cyrl-BA.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Cyrl-CS.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Cyrl-ME.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Cyrl-RS.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Latn-BA.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Latn-CS.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Latn-ME.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Latn-RS.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.sr.min.js',
//            'KendoUI/js/cultures/kendo.culture.sv-FI.min.js',
//            'KendoUI/js/cultures/kendo.culture.sv-SE.min.js',
//            'KendoUI/js/cultures/kendo.culture.sv.min.js',
//            'KendoUI/js/cultures/kendo.culture.sw-KE.min.js',
//            'KendoUI/js/cultures/kendo.culture.sw.min.js',
//            'KendoUI/js/cultures/kendo.culture.syr-SY.min.js',
//            'KendoUI/js/cultures/kendo.culture.syr.min.js',
//            'KendoUI/js/cultures/kendo.culture.ta-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ta.min.js',
//            'KendoUI/js/cultures/kendo.culture.te-IN.min.js',
//            'KendoUI/js/cultures/kendo.culture.te.min.js',
//            'KendoUI/js/cultures/kendo.culture.tg-Cyrl-TJ.min.js',
//            'KendoUI/js/cultures/kendo.culture.tg-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.tg.min.js',
//            'KendoUI/js/cultures/kendo.culture.th-TH.min.js',
//            'KendoUI/js/cultures/kendo.culture.th.min.js',
//            'KendoUI/js/cultures/kendo.culture.tk-TM.min.js',
//            'KendoUI/js/cultures/kendo.culture.tk.min.js',
//            'KendoUI/js/cultures/kendo.culture.tn-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.tn.min.js',
//            'KendoUI/js/cultures/kendo.culture.tr-TR.min.js',
//            'KendoUI/js/cultures/kendo.culture.tr.min.js',
//            'KendoUI/js/cultures/kendo.culture.tt-RU.min.js',
//            'KendoUI/js/cultures/kendo.culture.tt.min.js',
//            'KendoUI/js/cultures/kendo.culture.tzm-Latn-DZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.tzm-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.tzm.min.js',
//            'KendoUI/js/cultures/kendo.culture.ug-CN.min.js',
//            'KendoUI/js/cultures/kendo.culture.ug.min.js',
//            'KendoUI/js/cultures/kendo.culture.uk-UA.min.js',
//            'KendoUI/js/cultures/kendo.culture.uk.min.js',
//            'KendoUI/js/cultures/kendo.culture.ur-PK.min.js',
//            'KendoUI/js/cultures/kendo.culture.ur.min.js',
//            'KendoUI/js/cultures/kendo.culture.uz-Cyrl-UZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.uz-Cyrl.min.js',
//            'KendoUI/js/cultures/kendo.culture.uz-Latn-UZ.min.js',
//            'KendoUI/js/cultures/kendo.culture.uz-Latn.min.js',
//            'KendoUI/js/cultures/kendo.culture.uz.min.js',
//            'KendoUI/js/cultures/kendo.culture.vi-VN.min.js',
//            'KendoUI/js/cultures/kendo.culture.vi.min.js',
//            'KendoUI/js/cultures/kendo.culture.wo-SN.min.js',
//            'KendoUI/js/cultures/kendo.culture.wo.min.js',
//            'KendoUI/js/cultures/kendo.culture.xh-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.xh.min.js',
//            'KendoUI/js/cultures/kendo.culture.yo-NG.min.js',
//            'KendoUI/js/cultures/kendo.culture.yo.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-CHS.js',
//            'KendoUI/js/cultures/kendo.culture.zh-CHS.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-CHT.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-CN.js',
//            'KendoUI/js/cultures/kendo.culture.zh-CN.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-Hans.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-Hant.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-HK.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-MO.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-SG.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh-TW.min.js',
//            'KendoUI/js/cultures/kendo.culture.zh.js',
//            'KendoUI/js/cultures/kendo.culture.zh.min.js',
//            'KendoUI/js/cultures/kendo.culture.zu-ZA.min.js',
//            'KendoUI/js/cultures/kendo.culture.zu.min.js'
//            'KendoUI/js/cultures/console.js'
        );
        var cssfiles = new Array(
        		'KendoUI/styles/kendo.black.min.css',
        		'KendoUI/styles/kendo.blueopal.min.css',
        		'KendoUI/styles/kendo.bootstrap.min.css',
        		'KendoUI/styles/kendo.common.min.css',
        		'KendoUI/styles/kendo.dataviz.black.min.css',
        		'KendoUI/styles/kendo.dataviz.blueopal.min.css',
        		'KendoUI/styles/kendo.dataviz.bootstrap.min.css',
        		'KendoUI/styles/kendo.dataviz.default.min.css',
        		'KendoUI/styles/kendo.dataviz.flat.min.css',
        		'KendoUI/styles/kendo.dataviz.highcontrast.min.css',
        		'KendoUI/styles/kendo.dataviz.metro.min.css',
        		'KendoUI/styles/kendo.dataviz.metroblack.min.css',
        		'KendoUI/styles/kendo.dataviz.min.css',
        		'KendoUI/styles/kendo.dataviz.moonlight.min.css',
        		'KendoUI/styles/kendo.dataviz.silver.min.css',
        		'KendoUI/styles/kendo.dataviz.uniform.min.css',
        		'KendoUI/styles/kendo.default.min.css',
        		'KendoUI/styles/kendo.flat.min.css',
        		'KendoUI/styles/kendo.highcontrast.min.css',
        		'KendoUI/styles/kendo.icenium.min.css',
        		'KendoUI/styles/kendo.metro.min.css',
        		'KendoUI/styles/kendo.metroblack.min.css',
//        		'KendoUI/styles/kendo.mobile.all.min.css',
//        		'KendoUI/styles/kendo.mobile.android4.min.css',
//        		'KendoUI/styles/kendo.mobile.blackberry.min.css',
//        		'KendoUI/styles/kendo.mobile.common.min.css',
//        		'KendoUI/styles/kendo.mobile.flat.min.css',
//        		'KendoUI/styles/kendo.mobile.icenium.min.css',
//        		'KendoUI/styles/kendo.mobile.ios.min.css',
//        		'KendoUI/styles/kendo.mobile.meego.min.css',
//        		'KendoUI/styles/kendo.mobile.wp8.min.css',
        		'KendoUI/styles/kendo.moonlight.min.css',
        		'KendoUI/styles/kendo.rtl.min.css',
        		'KendoUI/styles/kendo.silver.min.css',
        		'KendoUI/styles/kendo.uniform.min.css'
//        		'KendoUI/styles/examples-offline.css'
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
//                var s = document.createElement("link");
//                s.href = host + cssfiles[i];
//                var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
//                h.appendChild(s);
                
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