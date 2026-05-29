import { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    id: 'tecverse',
    name: 'TecVerse',
    category: 'VR / Metaverse',
    description: 'El metaverso del TEC en realidad virtual',

    years: 2,
    hours: 5,
    team: 12,

    status: 'active',

    accent: 'blue',

    technologies: [
      'Unity',
      'C#',
      'Meta Quest',
      'Blender',
      'Photon'
    ]
  },

  {
    id: 'culturexr',
    name: 'CultureXR',
    category: 'XR / Cultural',
    description: 'Patrimonio cultural costarricense en realidad extendida',

    years: 1,
    hours: 5,
    team: 8,

    status: 'active',

    accent: 'purple',

    technologies: [
      'Unity',
      'AR Foundation',
      'Meta Quest',
      'Blender',
      'C#'
    ]
  },

  {
    id: 'iotproject',
    name: 'IoT Project',
    category: 'IoT / Smart Campus',
    description: 'Infraestructura inteligente para el campus TEC',

    years: 1,
    hours: 5,
    team: 6,

    status: 'active',

    accent: 'green',

    technologies: [
      'Arduino',
      'Raspberry Pi',
      'MQTT',
      'Node.js',
      'InfluxDB'
    ]
  }
];