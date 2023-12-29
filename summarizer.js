import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';
import { OpenAI } from 'langchain/llms/openai';

async function summarizeContent(url) {
  const loader = new CheerioWebBaseLoader('url');

  const data = await loader.load();

  const llm = new OpenAI();

  const query = `Please summarize the following data: ${data[0].pageContent}`;

  const result = await llm.predict(query);

  return result;
}

export default summarizeContent;
