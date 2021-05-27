import { Component, OnInit } from '@angular/core';
import { CommonListService } from '../common-list.service';

@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.css']
})
export class ListBComponent implements OnInit {

  constructor(private commonService : CommonListService) { }

  listBItems : any

  ngOnInit(): void {
    this.listBItems = this.commonService.listBMembers 
    console.log(this.listBItems)
  }

  ngDoCheck(){
    this.listBItems = this.commonService.listBMembers 
  }

  getBId(element:any){
    console.log("getId",element)

    if(!this.commonService.selectedItemsBlist.includes(element)){
      this.commonService.selectedItemsBlist.push(element)
    }
    else{
      console.log("duplicate selection")
    }
    // console.log("this.commonService.selectedItemsAlist", this.commonService.selectedItemsBlist)
  }

  getCustomBCss(item:any){
    if(this.commonService.selectedItemsBlist.length > 0){
      if(this.commonService.selectedItemsBlist.includes(item)){
        return 'selected-card'
      }else{
        return ''
      }
    }else{
      return ''
    }
  }
    
  }
  