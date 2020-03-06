import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp-com-a-b',
  templateUrl: './com-prov-a-b.component.html',
  styleUrls: ['./com-prov-a-b.component.css']
})
export class DispComABComponent implements OnInit {
  dispCom: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDispCom(event: any, option: number) {
    const actives = document.getElementById('disCom').getElementsByClassName('active');

    for (let i = 0; i < actives.length; i++) {
      actives[i].className = actives[i].className.replace('btn-warning', 'btn-primary');
      actives[i].className = actives[i].className.replace(' active', '');
    }

    for (let i = 0; i < this.dispCom.length; i++) {
      if (i === option) {
        this.dispCom[i] = !this.dispCom[i];

        if (this.dispCom[i]) {
          event.target.className = 'btn btn-warning active';
        }
      } else {
        this.dispCom[i] = false;
      }
    }
  }

}
