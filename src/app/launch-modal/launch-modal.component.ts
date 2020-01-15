import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-launch-modal',
  templateUrl: './launch-modal.component.html',
  styleUrls: ['./launch-modal.component.css']
})
export class LaunchModalComponent implements OnInit {
  closeResult: string;
  formGroupModal;

  constructor(
      private modalService: NgbModal,
      private formBuilder: FormBuilder
    ) { 
      this.formGroupModal = this.formBuilder.group({
      dateOfBirth: '',
      });
    }

    open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}