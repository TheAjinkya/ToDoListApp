import { Component, OnInit } from '@angular/core';
import { CommonListService } from '../common-list.service';
import { List } from '../list.model';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.css']
})
export class ListAComponent implements OnInit {


  constructor(private commonService: CommonListService) { }

  removedItem : any
  selectedItems :List[] = []
  listAItems:List[] =[]
  removeClassFlag = false

  
  ngOnInit(): void {
    this.listAItems = this.commonService.listAMembers;
    console.log(this.listAItems)
  }

  addNewItem(){
      this.listAItems.push({id:11,label:"new Item"})
  }


  getId(element:any){

    if(!this.commonService.selectedItemsAlist.includes(element)){
      this.selectedItems.push(element)
      this.commonService.selectedItemsAlist.push(element)
    }
    else{
      console.log("duplicate selection")
    }
  }

  getCustomCss(item:any){
    if(this.selectedItems.includes(item)){
      return 'selected-card'
    }else if(this.removeClassFlag){
      return ''
    }else{
      return ''
    }
  }

  unSelectClick(){
    this.commonService.selectedItemsAlist.length = 0
    this.commonService.selectedItemsBlist.length = 0
    this.removeClassFlag = true
  }

  // moveToBList(){
  //   console.log("moveToBList", this.commonService.selectedItemsAlist)
  //   if (this.commonService.selectedItemsAlist.length > 0) {
  //     this.commonService.addToBList()
  //     this.removeItem()
  //   }
  // }

}
