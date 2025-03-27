import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CommentService } from '../services/comment.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-mitigation-plan-comments',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule, MatListModule, MatFormFieldModule, MatDialogModule],
  templateUrl: './mitigation-plan-comments.component.html',
  styleUrl: './mitigation-plan-comments.component.css'
})
export class MitigationPlanCommentsComponent implements OnInit {

  comments: any[] = [];
  commentForm!: FormGroup;
  userID: string = '';

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private dialogRef: MatDialogRef<MitigationPlanCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mitigationPlanID: string }
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userID = user.userID;
    }
    this.initForm();
    this.fetchComments();
  }

  initForm() {
    this.commentForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  fetchComments() {
    this.commentService.getCommentsByMitigationPlanID(this.data.mitigationPlanID).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (error) => {
        console.error('Error fetching comments:', error);
      }
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const newComment = {
        mitigationPlanID: this.data.mitigationPlanID,
        author: this.userID,
        text: this.commentForm.value.text
      };

      console.log('Submitting comment:', newComment);

      this.commentService.createComment(newComment).subscribe({
        next: (data) => {
          this.comments.push(data);
          this.commentForm.reset();
        },
        error: (error) => {
          console.error('Error posting comment:', error);
        }
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}



