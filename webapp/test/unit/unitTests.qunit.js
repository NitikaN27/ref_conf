/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comrefconf/ref_conf/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
