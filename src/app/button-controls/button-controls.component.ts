import { Component, OnInit } from '@angular/core';
import { CommonListService } from '../common-list.service';

@Component({
  selector: 'app-button-controls',
  templateUrl: './button-controls.component.html',
  styleUrls: ['./button-controls.component.css']
})
export class ButtonControlsComponent implements OnInit {

  constructor(private commonService : CommonListService) { }

  ngOnInit(): void {
  }

  removeElement(){
    this.commonService.removeItemAList()
  }

  moveToBList(){
    this.commonService.addToBList()
  }

  moveToAList(){
    this.commonService.addToAList()
  }

}
