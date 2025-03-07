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
      tags: [Tag.PYTHON],
      pictures: ["assets/DHT.png"]
    },
    {
      id: 1,
      name: 'FRDM Robot',
      summary: 'Built an object avoidance robot using the FRDM-KL46Z board with the MCUXpresso software and peripherals like motors and ultrasonic sensor.',
      description: 'I developed an obstacle avoidance system using an FRDM microcontroller, integrating an ultrasonic sensor, a servo motor, and dual DC motors. The system detects obstacles in real time and autonomously navigates by adjusting movement based on sensor input. Motor control is handled via TPM0, while the ultrasonic sensor operates through PortA and PortD to measure distances. A servo motor, controlled via TPM1, dynamically scans the surroundings to enhance detection accuracy. Additionally, an interrupt-driven switch (SW1) allows manual intervention. This project successfully demonstrates real-time obstacle detection and autonomous decision-making for smooth navigation.',
      projectLink: 'https://github.com/asbabbit/FRDM_Object_Detection',
      tags: [Tag.C, Tag.MCU, Tag.MCU, Tag.ASSEMBLY, Tag.BASH],
      pictures: ["assets/FRDM_Board.webp", "assets/Object_Detection.gif"]
    },
    {
      id: 2,
      name: 'Infix2Postfix Calculator',
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
