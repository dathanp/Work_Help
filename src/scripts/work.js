function appRequest(app, approver, user) {
	
	let response = "Hello " + user + ",\n\n" + "I have looped " + approver + " to this ticket.\n\n" + "Please reach out to them as they manage the " + app + " app.\n\n" + "Cheers,\n\n" + "Daniel Diaz";
	
	let team = "Hello " + approver + ",\n\n" + user +" is requesting access to " + app + ". \n\nCan you approve this? \n \nThank you, \n\nDaniel Diaz";
	console.log(response + "\n\n");
	
	console.log(team);
}

function appSupport(app, approver, user) {
		
		let response = "Hello " + user + ",\n\n" + "I have looped " + approver + " to this ticket.\n\n" + "Please reach out to them as they manage the " + app + " app and can assist with this issue.\n\n" + "Cheers,\n\n" + "Daniel Diaz";
		if(app == "concur" || "Concur" || "Nexonia" || "nexonia") {
			console.log("expensereport@purestorage.com");
		}
		console.log('\n' + response);
}


function dEmail(user, building, floor, seat) {
	let suffix = 'st';
	if(floor >= 4) {
		suffix = 'th';
	}
	if(floor == 3) {
		suffix = 'rd';
	}
	if(floor == 2) {
		suffix = 'nd';
	}
	let respond = "Hello " + user + ", \n\n" + "To ensure the equipment is delivered to the accurate location.\ncan you confirm some information for me?\n";
	
	let location = "\nBuilding: " + building + '\n' + "Floor: " + floor + suffix  + '\n' + "Seat: " + seat + '\n\n';
	
	let thanks = "Thank you, \n\nDaniel";
	
	console.log(respond + location + thanks);
}

function dResponse(user, location) {
	if(location === 650) {
		console.log("Hello " + user + " your equipment has been delivered to " + location + " reception");
		console.log("\nLet me know if you have any issues.\n\nThank you,\n\nDaniel Diaz");
		return;
	}
	console.log("Hello " + user + " your equipment has been delivered to your desk at " + location);
	console.log("\nLet me know if you have any issues.\n\nThank you,\n\nDaniel Diaz");
}

function oRespond(office, count) {
	let equipment =  ["MAC power cord", "PC power cord - Yoga", "PC power cord - X1", "Mac keyboard", "Mac Mouse", "PC keyboard", "PC mouse", "USB-A to USB-C adapter", "Flashdrives", "Monitors -HDs", "Monitors -4k"]
	console.log(office + ':\n');
	for(let i = 0; i < equipment.length; i++) {
		if(count[i] !== 0) {
			console.log(count[i] + ' ' + equipment[i] + ',\n');
		}
	}
}

oRespond("New York",[2,3,3,0,0,0,0,5,5,2,1]);