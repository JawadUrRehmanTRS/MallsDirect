import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  closeResult = '';
  term: string;
  public dishes: any[] = [
    {NameEn: 'rice', NameAr: 'Arabic'},
    {NameEn: 'biryani', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'sweet', NameAr: 'Arabic'},
    {NameEn: 'nihari', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'biryani', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'sweet', NameAr: 'Arabic'},
    {NameEn: 'nihari', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'biryani', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'sweet', NameAr: 'Arabic'},
    {NameEn: 'nihari', NameAr: 'Arabic'},
    {NameEn: 'Korma', NameAr: 'Arabic'},
    {NameEn: 'fruit', NameAr: 'Arabic'},
    {NameEn: 'icecream', NameAr: 'Arabic'}
    
  ];
  check = true;
  p: number = 1;
  pageSize = 10;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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
      return `with: ${reason}`;
    }
    

    }
    onChange(term:string){
      this.term = term;
    }

    reload(pageSize) {
      this.pageSize = pageSize;
  }
  onSwitchChange(value){
    console.log(value)
  }
  
  }




