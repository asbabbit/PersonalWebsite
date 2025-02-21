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
      name: 'Distributed Hash Table P2P Network',
      summary: "Created a DHT for storing entries in a table amongst a host of peers managed by the DHT manager.",
      description: 'I developed an application where processes communicate using sockets to build and query a Distributed Hash Table (DHT). The system uses a ring topology for DHT management and implements hot potato query processing. The project involved creating two main components: An \"always-on\" manager program that manages the DHT peers, listens on a specified port, and supports communication between peers. A peer program that interacts with the manager for DHT construction, management, and query processing. I used socket programming to implement these components, ensuring that the communication between peers followed a hot potato protocol. The manager oversees the DHT creation and manages peer churn. Throughout the project, I utilized version control to manage the code and regularly committed updates to a private repository.',
      projectLink: 'https://github.com/asbabbit/SocketProject/tree/main',
      tags: [Tag.CPP, Tag.PYTHON],
      pictures: ["assets/DHT.png"]
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
