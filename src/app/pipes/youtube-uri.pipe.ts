import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeUri'
})
export class YoutubeUriPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(uri: string): any {
    let url = 'https://www.youtube.com/embed/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + uri);
  }

}
