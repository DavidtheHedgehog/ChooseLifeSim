export interface Impact {
  rebellion?: number;
  alienation?: number;
  conformity?: number;
  expression?: number;
}

export interface Choice {
  label: string;
  next: string;
  impact?: Impact;
}

export interface StoryNode {
  text: string;
  choices: Choice[];
}

export interface StoryDb {
  [key: string]: StoryNode;
}

export interface Stats {
  rebellion: number;
  alienation: number;
  conformity: number;
  expression: number;
}

export interface Character {
  name: string;
  pronouns: string;
  color: string;
}
