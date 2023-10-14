import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: any[] = [
    { id: 1, title: 'Vídeo 1', url: 'https://www.youtube.com/embed/video1' },
    { id: 2, title: 'Vídeo 2', url: 'https://www.youtube.com/embed/video2' },
    // Adicione mais vídeos conforme necessário
  ];

  getVideos() {
    return this.videos;
  }

  getVideoById(id: number) {
    return this.videos.find((video) => video.id === id);
  }

  getVideosByGameId(gameId: string) {
    // Lógica para recuperar vídeos relacionados a um jogo específico
    // Você pode implementar essa lógica com base em sua estrutura de dados
  }
}
