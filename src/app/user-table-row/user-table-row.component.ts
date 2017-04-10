import {Component, Input, OnInit} from '@angular/core';
import {User, Status} from "../models/user";

@Component({
  selector: '[app-user-table-row]',
  templateUrl: './user-table-row.component.html',
  styleUrls: ['./user-table-row.component.css']
})
export class UserTableRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hideOffline: boolean;
  @Input() user:User;
  Status: typeof Status = Status;
}
