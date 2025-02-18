import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    projects: Project[] = [
      {
      id: 0,
      name: 'Sample',
      summary: 'Test Summary',
      description: 'Test Description',
      projectLink: 'https://github.com',
      tags: [Tag.CPP, Tag.PYTHON],
      pictures: ["assets/Grad.JPG","/assets/Grad.JPG","assets/Grad.JPG"]
    },
    {
      id: 1,
      name: 'blah',
      summary: 'Test Summary',
      description: 'Test Description',
      projectLink: 'https://github.com',
      tags: [Tag.CPP, Tag.VERILOG],
      pictures: ["assets/ProfileSqr.JPG","assets/Grad.JPG","assets/ProfileSqr.JPG"]
    },
    {
      id: 2,
      name: 'Bleh',
      summary: 'Test Summary',
      description: 'Test Description',
      projectLink: 'https://github.com',
      tags: [Tag.CADENCE, Tag.PYTHON],
      pictures: []
    },
    {
      id: 3,
      name: 'Bloo',
      summary: 'Test Summary',
      description: 'Test Description',
      projectLink: 'https://github.com',
      tags: [Tag.CPP, Tag.PYTHON],
      pictures: []
    }
  ]
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('No project with provided id' + id)
    }

    return project;
  }
}
