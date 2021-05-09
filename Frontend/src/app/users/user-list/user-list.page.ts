import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User, UserInfo } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit{
  
  public userType: string;
  dataUsers: Array<any>[];
  userInfo: UserInfo = new User;
  apoderados: UserInfo = new User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router, 
    private route: ActivatedRoute
    
    ) { }

  ngOnInit() {}

  edit(id: number) {
    console.log(id);
    this.router.navigate(['editar/' + id], { relativeTo: this.route });
  }

  ionViewWillEnter(){
    this.userType = this.activatedRoute.snapshot.paramMap.get('userType');

    this.userService.getAll().subscribe(data => {
      this.userInfo = data.filter(user => user.userType == this.userType);
      this.dataUsers = Object.values(this.userInfo);

      this.apoderados = data.filter(user => user.userType == '4');
    });
    
  }
}