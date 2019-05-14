jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("testui5_bind.TESTUI5_BIND", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf testui5_bind.TESTUI5_BIND
	 */

	/*
	 * _oInputFirstName : null, _oInputLastName : null,
	 */

	onInit : function() {

		/*
		 * this._oInputFirstName = this.getView().byId("idInputFirstName");
		 * this._oInputLastName = this.getView().byId("idInputLastName");
		 */

		var oPersonModel = new sap.ui.model.json.JSONModel({
			firstName : "",
			lastName : "",
		});
		this.getView().setModel(oPersonModel);
	},

	onButtonPressed : function(oEvent) {
		/*
		 * var sFirstName = this._oInputFirstName.getValue(); var sLastName =
		 * this._oInputLastName.getValue();
		 */

		var oPersonModel = this.getView().getModel();
		
		var sFirstName = oPersonModel.getProperty("/firstName");
		var sLastName = oPersonModel.getProperty("/lastName");

		var sMessage = "First Name: " + sFirstName + "\n" + "Last Name: "
				+ sLastName;
		sap.m.MessageBox.show(sMessage, {
			title : "Welcome!"
		});
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf testui5_bind.TESTUI5_BIND
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf testui5_bind.TESTUI5_BIND
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf testui5_bind.TESTUI5_BIND
 */
// onExit: function() {
//
// }
});