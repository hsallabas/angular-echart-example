import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';

import { SimpleStateService } from 'src/app/core/services/simple-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public progressBarMode$ = this.progressBarService.updateProgressBar$;
  public searchValue = '';

  constructor(
    private stateService: SimpleStateService,
    private progressBarService: ProgressBarService,
  ) { }

  ngOnInit(): void { }

  public search(): void {
    this.stateService.searchText$.next(this.searchValue);
    this.searchValue = '';
  }

}
