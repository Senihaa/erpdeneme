frappe.views.calendar["Event"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "title",
		"status": "status",
	},
	get_events_method: "meeting.api.get_meetings"
}

