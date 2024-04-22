import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user!: User
  selectedFile!: File | undefined;

  constructor(private userService : UserService , private toastrService : ToastrService){}

  ngOnInit(): void {
    this.user = this.userService.currentUser
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  // Method to upload profile picture
  uploadProfilePicture(): void {
    if (!this.selectedFile) {
      alert('Please select a file.');
      return;
    }

    // After successful upload, update the user's profile picture URL  For demonstration purposes,let's assume updating the URL directly
    this.user!.profilePictureUrl = URL.createObjectURL(this.selectedFile);

    // Reset selectedFile to allow for uploading a new file
    this.selectedFile = undefined ;

    this.toastrService.success('Profile picture uploaded successfully');
  }
}
