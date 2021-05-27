import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonListService } from '../common-list.service';

 // This lets me use jquery
 declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  lists = [{id:10, label:'List A'}, {id:11, label:'List B'}];
  selectedList:any

  constructor(private commonService : CommonListService) { }

  labelName:string = ''

  ngOnInit(): void {
  }

  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    //do something here
    console.log(this.selectedList, this.labelName)
    let data = this.selectedList
    this.commonService.addNewItem(data, this.labelName)
    this.hideModal();
  }
  hideModal():void {
    $("#myModal").modal('hide');
    
  }

  onSelect(listId:any) { 
    listId = listId.target.value
    console.log(listId)
    this.selectedList = null;
    for (var i = 0; i < this.lists.length; i++)
    {
      if (this.lists[i].label == listId) {
        this.selectedList = this.lists[i];
      }
    }
}

}
