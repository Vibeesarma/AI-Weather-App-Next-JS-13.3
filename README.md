# AI Weather App in Next.js 13.3

![Screenshot 2023-04-30 085348](https://user-images.githubusercontent.com/77588716/235366770-30fde490-32d4-4169-8716-45c3f1bf6fef.jpg)

>This project get from [Sonny Sangha](https://www.youtube.com/@SonnySangha) YouTube channel

>Project Link [Let’s Build an AI Weather App with ChatGPT-4 (Next.js 13.3, React, Tremor 2.0, StepZen, GraphQL)](https://www.youtube.com/watch?v=DS5TZCn-pk8&t=7807s)


- Next.js 13 has so many new features one of the new ones useRouter in come from `"next/navigation" ` do not use next.js 12 router here it will affect the code.

- also,use default ```loading.tsx``` file for loading.


## tremor
- [tremor](https://www.tremor.so/) gives you a component for create dashboard easily.

- you can install using below commnad.

```bash
npm install @tremor/react
```
- this library gives you some specific components like an Area chart bar chart line chart and donut chart-like things also components for show data etc.

- it is only work on client-side in the next js 13 for now in the future it will give some more updates.


## Apollo Client

- [Apollo Client](https://www.apollographql.com/) is graphql developer platform.

- this has cache management also and is one of the best graphQL clients.

- you can install using below command

```bash
npm install @apollo/client graphql
```

- you want to create a client like a below,

```typescript
const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});
```

## Open-Meteo

- [Open-Meteo](https://open-meteo.com/) gives you a free weather API.

## CHAT GPT

- [chat GPT](https://platform.openai.com/docs/api-reference) use for get the summary of weather data.

- you can use chat GPT 3.5 here.

- you want to create an openai instance using below code,

```typescript
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;

```


## StepZen

- this middleware gives a connection between graphql so much easier.

- In here you want to install [stepzen](https://stepzen.com/) to your terminal add globally
  -this is the one you want to run

```bash
npm install -g stepzen
```

   -  login your account it gives by stepzen guide
   -  then copy the api from dashboard
   -  after that run ```stepzen init``` in your root directory terminal it will create stepzen config file for you.

- go to your stepzen account and gets your RestAPI added command.
  - this is a command `stepzen import curl` paste it your terminal.
  - then it asked the endpoint to connect to your stepzen (MediaStack url)
  - page the below URL to your terminal and accept another thing that they asked of you.
    `http://api.mediastack.com/v1/news ? access_key = YOUR_ACCESS_KEY`
  - also you can add some option parameter there if you add those to filter out the data
  - after running the command on terminal to start stepzen `stepzen start`
  - the above command also push the changes in graphql schema and also you can run stepzen in local using  this flag after stepzen start  command `--dashboard=local`


> Thanks for [Sonny Sangha](https://www.youtube.com/@SonnySangha)



