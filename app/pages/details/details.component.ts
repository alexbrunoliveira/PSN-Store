import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../pages/details/video.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  nameGame: string = '';
  infoCard: string = '';
  photo: string = '';
  price: string = '';
  youtubeLink: SafeResourceUrl | undefined; // Use SafeResourceUrl para armazenar o link do YouTube

  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private sanitizer: DomSanitizer // Importe o DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.getInfoGame(this.id);
  }

  getInfoGame(id: string | null) {
    const result = dataFake.find((article) => article.id === id);

    if (result) {
      this.nameGame = result.nameGame;
      this.infoCard = result.description;
      this.photo = result.potho;
      this.price = result.price;

      if (result.youtubeLink) {
        // Sanitize and set the YouTube link
        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(result.youtubeLink);
      }
    }
  }
}
