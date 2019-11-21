import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private dialogService: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  openProfile() {
    this.dialogService.open(ProfileComponent);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/signin']);
  }
}
