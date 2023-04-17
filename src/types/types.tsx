export interface IPluginDetail {
  author: string;
  time?: string;
  heading?: string;
  description: string;
  name: string;
  thumbnail: string;
  title?: string;
  file: string;
  content?: string[];
  image?: string[];
  tags?: string[];
  youtubeId?: string;
  createAt?: number;
}

export interface IPlugin {
  [id: string]: IPluginDetail;
}
