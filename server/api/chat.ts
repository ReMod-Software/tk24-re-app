import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';
import { experimental_buildLlama2Prompt } from 'ai/prompts';
export default defineLazyEventHandler(async () => {
 
     
    // Create a Replicate API client (that's edge friendly!)
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_KEY || '',
    });
    return defineEventHandler(async event => {
        const { messages } = (await readBody(event))
 
        const response = await replicate.predictions.create({
          stream: true,
          version: '02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3',
          input: {
            prompt: experimental_buildLlama2Prompt(messages),
          },
        });
       
        // Convert the response into a friendly text-stream
        const stream = await ReplicateStream(response);
        // Respond with the stream
        return new StreamingTextResponse(stream);
       
      });
    });
   