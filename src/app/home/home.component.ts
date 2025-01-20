import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Alma Babbitt - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }
}
