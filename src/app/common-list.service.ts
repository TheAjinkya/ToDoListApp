import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { List } from './list.model';
 

@Injectable({
  providedIn: 'root'
})
export class CommonListService {
  
  private subject = new Subject();

  constructor() { }

  listBMembers:List[] = []
  removedItem:any
  selectedItemAListId:any
  selectedItemBListId:any
  selectedItemsAlist:List[] =[]
  selectedItemsBlist:List[] =[]
  listAMembers:List[] = [{ id: 1, label: 'one' }, { id: 2, label: 'Two' }, { id: 3, label: 'Three' }, { id: 4, label: 'Four' }, { id: 5, label: 'Five' },
  { id: 6, label: 'six' }, { id: 7, label: 'seven' }, { id: 8, label: 'Eight' }, { id: 9, label: 'Nine' }, { id: 10, label: 'Ten' },
]


  addToBList() {
    if(this.selectedItemsAlist.length > 0 ){
    console.log("addToBList", this.selectedItemsAlist)
    for (let i = 0; i < this.selectedItemsAlist.length; i++) {
      this.listBMembers.push(this.selectedItemsAlist[i]);
    }
    this.removeItemAList()
    console.log("this.listBMembers", this.listBMembers)
  }else{
    console.log("No selection")
  }
  }

  addToAList() {
    if(this.selectedItemsBlist.length > 0 ){
    console.log("addToAList", this.selectedItemsBlist)
    for (let i = 0; i < this.selectedItemsBlist.length; i++) {
      this.listAMembers.push(this.selectedItemsBlist[i]);
    }
    this.removeItemBList()
  }else{
    console.log("No selection")
  }
  }

  removeItemAList(){
    if(this.selectedItemsAlist.length > 0 && this.listAMembers.length > 0){

    this.removedItem =  this.listAMembers.find(item => item.id === this.selectedItemAListId);

    for( var i = 0; i < this.listAMembers.length; i++){ 
      
      for (let index = 0; index < this.selectedItemsAlist.length; index++) {
        if ( this.listAMembers[i].id === this.selectedItemsAlist[index].id) { 
          this.listAMembers.splice(i, 1); 
        }
      }
    }
    console.log("this.listAMembers",this.listAMembers)
    console.log("this.selectedItemsAlist", this.selectedItemsAlist)
    this.selectedItemsAlist.length = 0 
  }else{
    console.log("No selection")
  }
}


removeItemBList(){
  if(this.selectedItemsBlist.length > 0 && this.listBMembers.length > 0){

  this.removedItem =  this.listBMembers.find(item => item.id === this.selectedItemBListId);

  for( var i = 0; i < this.listBMembers.length; i++){ 
    
    for (let index = 0; index < this.selectedItemsBlist.length; index++) {
      if ( this.listBMembers[i].id === this.selectedItemsBlist[index].id) { 
        this.listBMembers.splice(i, 1); 
      }
    }
  }
  console.log("this.listAMembers",this.listBMembers)
  console.log("this.selectedItemsAlist", this.selectedItemsBlist)
  this.selectedItemsBlist.length = 0 
}else{
  console.log("No selection")
}
}

addNewItem(itemName:List, listName:string){

  if(itemName.label == 'List A'){
    var newItemToA = {id:this.listAMembers.length + 1, label:listName}
    if(!this.listAMembers.includes(newItemToA)){
      this.listAMembers.push(newItemToA)
      console.log("listAMembers", this.listAMembers)
    }
    else{
      console.log("duplicate selection")
    }


  }else{

    var newItemToB = {id:this.listBMembers.length + 1, label:listName}
    if(!this.listBMembers.includes(newItemToB)){
      this.listBMembers.push(newItemToB)
      console.log("listBMembers", this.listBMembers)
    }
    else{
      console.log("duplicate selection")
    }

  }

}

}
