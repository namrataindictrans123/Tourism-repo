// Copyright (c) 2019, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration',{

	setup:function(frm) {
		console.log("setup called");	
	},

	refresh:function(frm) {
		console.log("Refresh called")
		frm.get_field("pin").$input.on("keypress", function(event) {
		 console.log("onkeypress called--------------------",event.keyCode) 
			 if(event.keyCode < 48 || event.keyCode > 57) {
			 	console.log("*************************");
			 	return false
			 }
	
		});
		frm.get_field("mobile").$input.on("keypress", function(event) {
			console.log("Onkeypress called" ,event)
			if(event.keyCode < 48 || event.keyCode > 57 ) {
				return false
			}
		});
	},

	onload:function(frm) {
		console.log("Form loaded successfully")
	},

	before_save:function(frm) {
		console.log("Before save called")
	},

	after_save:function(frm) {
		show_alert("Form saved successfully")
		console.log("Form saved successfully")
	},

    email:function(frm) {

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		console.log(reg.test(frm.doc.email));
		if (reg.test(frm.doc.email) == false && frm.doc.email){
			frm.set_value(`email`,``);
			frappe.throw('Invalid Email Address');
			
			
		}
	},

    mobile:function(frm) {

       var phoneno = /^\d{10}$/;
       //var mob=frm.doc.mobile;
       console.log(phoneno.test(frm.doc.mobile));
       if (phoneno.test(frm.doc.mobile) == false && frm.doc.mobile) 
       {
       	   frm.set_value(`mobile`,``);
       	   console.log("Invalid number",frm.doc.mobile);
       	   frappe.throw('Invalid mobile number,should be 10 digits long');
       	   
       }
   },
    pin:function(frm) {
    	var pincode= /^\d{6}$/;
    	console.log(pincode.test(frm.doc.pin));
    	if (pincode.test(frm.doc.pin) == false && frm.doc.pin) 
    	{
    		frm.set_value(`pin`,``);
    		frappe.throw('Invalid pin');
    		
    		console.log("Invalid pin");
    	}
    },
    password:function(frm) {
    	var pass2= /^[a-zA-Z]\w{3,14}$/;
    	console.log(pass2.test(frm.doc.password));
    	if(pass2.test(frm.doc.password) == false) 
    	{
    		frappe.throw('Please provide strong password');
    	}
    },
    password2:function(frm) {
    	var pass3= frm.doc.password;
    	console.log(pass3.match(frm.doc.password2));
    	if(pass3.match(frm.doc.password2) == null && frm.doc.password2 != " ") {
    		frm.set_value(`password2`,``)
    		frappe.throw("Password does not matches");
    	}
    },
    register:function(frm) {
    	frappe.msgprint("Registeed successfully")
    },
    clear:function(frm) {
    	frm.set_value(`first_name`,``)
    	frm.set_value(`last_name`,``)
    	frm.set_value(`email`,``)
    	frm.set_value(`mobile`,``)
    	frm.set_value(`pin`,``)
    	frm.set_value(`state`,``)
    	frm.set_value(`country`,``)
    	frm.set_value(`username`,``)
    	frm.set_value(`password`,``)
    	frm.set_value(`language`,``)
    	frm.set_value(`password2`,``)
    	frm.set_value(`address`,``)
        frm.set_value('dob',``)
        frm.set_value(`gender`,``)
        frm.set_value(`salutation`,``)
    }
});


	
	
