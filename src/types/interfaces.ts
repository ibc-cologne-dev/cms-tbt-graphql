export interface ResourceType {
  title: string;
}

enum Media {
  text = 'text',
  audio = 'audio',
  video = 'video',
  image = 'image',
}

export interface MediaType {
  type: Media;
  value: string;
}

export interface Resource {
  id: string;
  title: string;
  image_header: string;
  content: MediaType;
  type: ResourceType;
}

export interface Lesson {
  title: string;
  image: string;
  resources: Resource[];
}