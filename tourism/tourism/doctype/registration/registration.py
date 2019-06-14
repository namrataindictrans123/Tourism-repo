# -*- coding: utf-8 -*-
# Copyright (c) 2019, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Registration(Document):

	def on_submit(self):
		frappe.sendmail(recipients=self.email,subject="Regarding registration.....",message='You have registered successfully to Tourism')
	
	def autoname(self):
        frappe.msgprint("Autoname called")
    	self.name=self.first_name+" "+self.last_name
	
	def before_insert(self):

		frappe.msgprint("Before insert called")

	
	def after_insert(self):
		frappe.msgprint("Record inserted successgully")

	
	def on_update(self):

		frappe.msgprint("onupdate called")

	def on_cancel(self):
		frappe.sendmail(recipients=self.email,subject="Regarding registration cancel..",message="Your registration is cancelled")
        frappe.msgprint("Registration cancelled")

    
    def on_trash(self):
    	frappe.sendmail(recipients=self.email,subject="Registration entry deleted..",message="Your registration deleted..")
# |

        

	# def register(self,email):
	# 	#name=self.first_name
	# 	last_records=frappe.db.get_values('Registration',filters={'email'},fieldname={'email'})
		
	# 	print(last_records)
	# 	# try:
	# 	# 	for name in last_records:
	# 	# 		if(name == self.first_name):
	# 	# 			frappe.throw("Already exists")
	# 	# except:
	# 	# 	return false

 #  #       