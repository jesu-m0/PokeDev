import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

      @Output() searchChange = new EventEmitter<string>();
      searchTerm: string = '';

      searchTermChanges(): void {
            this.searchChange.emit(this.searchTerm)
      }

}
