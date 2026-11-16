import { Component } from '@angular/core';
interface Conference {
  picture: string;
  title: string;
  date: string;
  adrs: string;
  available: number;
}
@Component({
  selector: 'app-list-cof',
  imports: [],
  templateUrl: './list-cof.html',
  styleUrl: './list-cof.css',
})
export class ListCof {

  conferences: Conference[] = [
    {
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      title: 'AI & Machine Learning',
      date: '20 December 2026',
      adrs: 'Tunis, Tunisia',
      available: 45
    },
    {
      picture: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
      title: 'Web Development Conference',
      date: '25 December 2026',
      adrs: 'Sousse, Tunisia',
      available: 30
    },
    {
      picture: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      title: 'Cloud Computing Summit',
      date: '30 December 2026',
      adrs: 'Sfax, Tunisia',
      available: 15
    }
  ];

}
