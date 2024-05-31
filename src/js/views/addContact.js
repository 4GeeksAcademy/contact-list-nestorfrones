import React from "react";
import { Link } from "react-router-dom";
import { ContactList } from "./contactList";

export const AddContact = () => {
	return (
		<div className="container">
			<h1 className="mt-5 mx-auto p-3 text-center">Add new Contact</h1>
			<form>
				<div className="mb-3">
					<label for="fullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="fullName" aria-describedby="Full Name" placeholder="Full Name"/>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
				</div>
				<div className="mb-3">
					<label for="phone" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phone" aria-describedby="phone" placeholder="Enter phone" />
				</div>
				<div className="mb-3">
					<label for="address" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" aria-describedby="address" placeholder="Enter address"/>
				</div>
				<div className="mb-3">
					<button class="btn btn-primary w-100" type="submit">Save</button>
				</div>
				<Link to="/">or get back to contacts</Link>
			</form>
		</div>
	);
};
