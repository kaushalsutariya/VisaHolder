import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-visa-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './visa-table.component.html',
  styleUrls: ['./visa-table.component.css']
})
export class VisaTableComponent {
  visaData: any[] = [];
  selectedIndexes: Set<number> = new Set();

  constructor(private router: Router) {
    // debugger
    this.loadData();
  }

  async loadData() {
    // debugger
    const response = await fetch(
      `${environment.apiUrl}/VisaHolder`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json()
    console.log('data...', data);
    this.visaData = data;
  }

  toggleSelection(index: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedIndexes.add(index);
    } else {
      this.selectedIndexes.delete(index);
    }
  }

  deleteSelected() {
    this.visaData = this.visaData.filter((_, idx) => !this.selectedIndexes.has(idx));
    localStorage.setItem('visaData', JSON.stringify(this.visaData));
    this.selectedIndexes.clear();
  }

  next() {
    // localStorage.setItem('visaData', JSON.stringify(this.visaData));
    this.router.navigate(['/verifi']);
  }
}
