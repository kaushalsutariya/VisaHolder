import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-verifi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verifi.component.html',
  styleUrls: ['./verifi.component.css']
})
export class VerifiComponent {
  visaData: any[] = [];
  filteredData: any[] = [];
  paginatedData: any[] = [];
  filterName: string = '';
  filterStatus: string = 'All';
  currentPage: number = 1;
  rowsPerPage: number = 10;
  totalPages: number = 1;
  pagesArray: number[] = [];

  async ngOnInit() {
    await this.fetchPageData();
  }

  applyFilter() {
    this.applyLocalFilters();
  }

  resetFilter() {
    this.filterName = '';
    this.filterStatus = 'All';
    this.paginatedData = this.visaData;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchPageData();
  }

  async fetchPageData() {
    try {
      const params = new URLSearchParams({
        page: this.currentPage.toString()
      });

      const response = await fetch(`${environment.apiUrl}/VisaHolder?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      this.visaData = data.visaHolders;
      this.totalPages = data.totalPages;
      
      
      this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      
      
      this.applyLocalFilters();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private applyLocalFilters() {
    let filtered = [...this.visaData];

    
    if (this.filterName) {
      filtered = filtered.filter(item => 
        item.visaHolderName.toLowerCase().includes(this.filterName.toLowerCase())
      );
    }

    // Apply status filter if not 'All'
    if (this.filterStatus !== 'All') {
      filtered = filtered.filter(item => {
        if (this.filterStatus === 'Verified') {
          return item.visaStatus === 'Verified';
        } else { // Unverified
          return !item.visaStatus || item.visaStatus !== 'Verified';
        }
      });
    }

    this.paginatedData = filtered;
  }
}
