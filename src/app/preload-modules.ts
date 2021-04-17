import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';

import { flatMap } from 'rxjs/operators';

export class PreloadModules implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
      if (route.data && route.data.preload) {
        const delay: number = route.data.delay;
        console.log('preload called on ' + route.path + ' delay is ' + delay);
        return timer(delay).pipe(
          flatMap( _ => {
            console.log('Loading now ' + route.path);
            return load() ;
          }));
      } else {
        console.log('no preload for the path ' + route.path);
        return of(null);
      }
  }
}


