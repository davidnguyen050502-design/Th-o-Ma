
export interface Scene {
  scene_number: number;
  script_description: string;
  veo_prompt: string;
}

export interface Script {
  story_summary: string;
  scenes: Scene[];
}

export interface VideoGenerationOptions {
  idea: string;
  promptCount: number;
  videoStyle: string;
  aspectRatio: string;
  dialogueLanguage: string;
  image?: string; // Base64 string without prefix
  imageMimeType?: string;
}