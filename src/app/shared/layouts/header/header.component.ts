import { Component, OnInit } from '@angular/core';

import { SimpleStateService } from 'src/app/core/services/simple-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchValue = '';

  constructor(private stateService: SimpleStateService) { }

  ngOnInit(): void {
  }

  public search(): void {
    this.stateService.searchText$.next(this.searchValue);
    this.searchValue = '';
  }

}
