frappe.ui.form.on("Sales Order", "customer", function(frm){
	frappe.call({
		method: "sapphire_customization.custom_methods.get_invoice_info",
		args: {
			sales_order: cur_frm.doc
		},
		callback: function(r){
			if(r.message){
				// cur_frm.doc.period=r.period
				// cur_frm.doc.credit_limit=r.credit_limit
				// cur_frm.doc.total_outstanding_payment=r.total_outstanding_payment
				// cur_frm.doc.exceeded_amount=r.exceeded_amount
				// cur_frm.refresh_field('exceeded_amount');
				// cur_frm.refresh_field('credit_limit');
				// cur_frm.refresh_field('period');
				// cur_frm.refresh_field('total_outstanding_payment');
				// cur_frm.refresh_field('transaction_details');
				cur_frm.reload_doc();
			}
		}
	})
});