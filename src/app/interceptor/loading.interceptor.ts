import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { LoaderService } from '../services/load/loader.service';  

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;
  private noLoaderUrl: Array<String> = [
    "https://nominatim.openstreetmap.org/search",
    "http://localhost:8080/travel/currentloc",
  ]


  constructor(
    private loadingService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('caught '+request.url)
    const url = request.url.split("?")[0];
    
    if(!this.noLoaderUrl.includes(url)){
      this.totalRequests++;
      this.loadingService.setLoading(true);
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests <= 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
