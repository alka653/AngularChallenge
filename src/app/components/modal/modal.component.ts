import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: [],
	providers: []
})
export class ModalComponent {
	title = '';
	constructor(public activeModal: NgbActiveModal){}
}