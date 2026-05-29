export interface GalleryItem {
  id: number;

  title: string;

  category:
    | 'lab'
    | 'events'
    | 'team'
    | 'tecverse'
    | 'culturexr'
    | 'iotproject';

  type: 'image' | 'video';

  accent:
    | 'blue'
    | 'purple'
    | 'green'
    | 'rose'
    | 'amber';

  size:
    | 'small'
    | 'medium'
    | 'large';
}