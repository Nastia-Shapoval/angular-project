import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../shared/services/news';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    imageUrl: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    views: new FormControl(0, Validators.required),
  });

  constructor(
    private newsService: NewsService,
    private notificationService: NotificationService
  ) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.newsService.addItem(this.form.value as any).subscribe(() => {
      this.notificationService.showSuccess('Новину додано успішно');
      this.newsService.loadNews();
      this.form.reset();
    });
  }

  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }
  get imageUrl() { return this.form.get('imageUrl'); }
  get date() { return this.form.get('date'); }
  get views() { return this.form.get('views'); }
}
