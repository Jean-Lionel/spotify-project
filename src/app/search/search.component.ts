import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent {
 searchKey = '';

 searchMusic(){
  console.log(this.searchKey);
 }
}
