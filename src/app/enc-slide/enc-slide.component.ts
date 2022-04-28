import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActiveSlideService } from '../active-slide.service';

@Component({
  selector: 'enc-slide',
  templateUrl: './enc-slide.component.html',
  styleUrls: ['./enc-slide.component.css'],
})
export class EncSlideComponent implements OnInit, OnDestroy {
  show = false;

  @Input()
  index?: number;

  @Input()
  backgroundImage: string | 'none' = 'none';

  private destroy$ = new Subject<void>();

  constructor(private slides: ActiveSlideService) {}

  ngOnInit() {
    this.slides.activeSlide$
      .pipe(takeUntil(this.destroy$))
      .subscribe((index) => {
        if (index === this.index) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }
}
