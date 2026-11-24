import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  list: profiles[];

  friends = ["Sami", "Sarra", "Amine"];
  show = false;

  ngOnInit() {
    this.list = [
      { nom: "Ben Ali", prenom: "Ahmed", email: "ahmed@email.com" },
      { nom: "Trabelsi", prenom: "Sarra", email: "sarra@email.com" },
      { nom: "Gharbi", prenom: "Sami", email: "sami@email.com" }
    ];
  }
}
