import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-visa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './visa-form.component.html',
  styleUrls: ['./visa-form.component.css']
})
export class VisaFormComponent{
  id: string = '';
  visaHolderName: string = '';
  visaType: string = '';
  dateOfBirth: string = '';
  visaStatus: string = 'Verified';
  constructor(private router: Router) { }

  async onSubmit(form: any) {
    if (!form.valid) {
      return;
    }

    const newData = {
      id: this.id,
      visaHolderName: this.visaHolderName,
      visaType: this.visaType,
      dateOfBirth: this.dateOfBirth,
      visaStatus: this.visaStatus
    };

    const response = await fetch(
      `${environment.apiUrl}/VisaHolder/visa_holder`,
      {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (response.ok) {
      this.router.navigate(['/verifi']);
    }
  }
}
  

