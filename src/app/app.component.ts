import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Array-CURD Application';
  msg:any="";
  model:any={};
  model2:any={};

  products = [
    {name:"Rice",qty:"25",price:"1300"},
    {name:"Soap",qty:"1",price:"130"},
    {name:"Oil",qty:"1L",price:"120"}
  ];

  deleteProduct(i){
    this.products.splice(i,1);
    this.msg="Record is Successfully deleted....";
  }

  myValue;
  editProduct(k){
    this.model2.name = this.products[k].name;
    this.model2.qty=this.products[k].qty;
    this.model2.price=this.products[k].price;
    this.myValue=k;
  }
  updateProduct(){
    let k = this.myValue;
    for(let i=0;i<this.products.length;i++){
      if(i==k){
        this.products[i]=this.model2;
        this.model2={};
        this.msg="Record is successfully updated......";
      }
    }
  }
  addProduct(){
    this.products.push(this.model);
    this.model={};
    this.msg="Record is Successfully added.....";
  }
  clickMe(){
    this.msg = "";
  }
}
