import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'openai',
  CHAT_GLM2 = 'chatglm2',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.CHAT_GLM2]: {
    id: OpenAIModelID.CHAT_GLM2,
    name: 'ChatGLM2-6B',
    maxLength: 12000,
    tokenLimit: 16000,
  },
};
