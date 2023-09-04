import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoaderComponent {

  show = false;

    private subscription: Subscription | any;

  constructor(public loaderService: LoaderService) { }
  ngOnInit() { 
    this.subscription = this.loaderService.loaderState
        .subscribe((state: LoaderState) => {
            this.show = state.show;
            // console.log("Show_loader:",this.show);
        });
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}
}



