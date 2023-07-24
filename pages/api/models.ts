import {OpenAIModels} from '@/types/openai';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    let models: { id: string; name: string; }[] = []
    for (const model of Object.values(OpenAIModels)) {
      models.push({id: model.id, name: model.name})
    }
    return new Response(JSON.stringify(models), {status: 200});
  } catch (error) {
    console.error(error);
    return new Response('Error', {status: 500});
  }
};

export default handler;
