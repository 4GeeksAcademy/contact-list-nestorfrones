import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationDot, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'




export const Contact = () => {
	return (
		<div className="row border">
			<div className="col-2 p-2 mx-4 my-auto">
				<img src="https://picsum.photos/200/200" className="card-img rounded-circle" alt="..." />
			</div>
			<div className="col p-2 my-auto">
				<div className="row d-flex">
					<div className="col-12 py-3">
						<h5 className="pt-2">Full Name</h5>
					</div>
					<div className="col">
						<div className="d-flex align-items-center">
							<FontAwesomeIcon className="pe-2" icon={faLocationDot} /><p className="pt-3">Adress</p>
						</div>
						<div className="d-flex align-items-center">
							<FontAwesomeIcon className="pe-2" icon={faPhoneAlt} /><p className="pt-3">Phone</p>
						</div>
						<div className="d-flex align-items-center">
							<FontAwesomeIcon className="pe-2" icon={faEnvelope} /><p className="pt-3">Email</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-2 p-2 ms-auto d-flex d-inline">
				<div className="d-flex align-items-start mt-3">
					 <Link to="/addContact"><button className="btn"><FontAwesomeIcon className="px-2" icon={faPencil} /></button></Link>
				</div>
				<div className="d-flex align-items-start mt-3">
					<button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" ><FontAwesomeIcon className="px-2" icon={faTrash} /></button>
				</div>
			</div>
			
			{/* <!-- Modal --> */}
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							If you delete this thing the entire uneverse will go down!
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
							<button type="button" class="btn btn-primary">Yes Baby!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
