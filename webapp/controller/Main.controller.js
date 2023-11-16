sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ref.conf.refconf.controller.Main", {
            onInit: function () {
                // this._oRootPath = jQuery.sap.getModulePath("com.ref.conf.refconf.model.graph");

                var oGraphModel = this.getOwnerComponent().getModel();
                var oGraphData = oGraphModel.getData();
                console.log(oGraphData);

            }
        });
    });
