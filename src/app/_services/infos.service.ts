import { Injectable } from '@angular/core';
import { Info } from '../_models/Info';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  infos: Info[] = [
    {
      id: 0,
      exists: false,
      section: 'Experience',
      title: 'LLM Research Intern',
      company: 'Arizona State University',
      time: 'August 2023 - December 2024',
      summary: '• yes \n • yes \n •	yes',
      icon: ''
    },
    {
      id: 1,
      exists: true,
      section: 'Experience',
      title: 'Undergraduate TA',
      company: 'Arizona State University',
      time: 'August 2023 - December 2024',
      summary: 'Worked with professors and graduate students to create programming assignments for 100+ Data Structures students and joined weekly curriculum and progress meetings.',
      icon: ''
    },
    {
      id: 2,
      exists: true,
      section: 'Experience',
      title: 'Retail Associate',
      company: 'BassPro LLC.',
      time: 'June 2022 - Present',
      summary: 'Balanced full-time studies while ensuring excellent customer service and collaborating with my team to handle high-demand sales, generating $10,000–$20,000 in weekly revenue in the hunting department.',
      icon: ''
    },
    {
      id: 3,
      exists: false,
      section: 'Education',
      title: 'BSE Computer Systems',
      company: 'Arizona State University',
      time: 'May 2020 - December 2024',
      summary: 'New American University Scholar GPA: 3.62',
      icon: ''
    }
  ];
  constructor() { }

  GetInfos() {
    return this.infos;
  }

  GetInfoById(id: number) : Info {
    let info = this.infos.find(info => info.id === id);

    if (info === undefined) {
      throw new TypeError('There is no info that matches the id: ' + id);
    }
    return info;
  }
}
