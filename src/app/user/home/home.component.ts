import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../core/services/food.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
 foodData:any[]=[];
  constructor(private foodService:FoodService){}

  ngOnInit(): void {
   this.foodService.getFoodData().subscribe((data)=>{
    this.foodData=data;
    console.log("sdsadas",this.foodData)

   })
  }

}
