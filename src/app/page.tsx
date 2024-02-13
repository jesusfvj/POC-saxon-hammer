import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const questions = await fetchData();
  console.log(questions);
  return (
    <div>
      <h1>Story: hello world</h1>
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(
    `cdn/stories/questionnaire/first-questionnaire`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  console.log("response:", response.data);
  return await Promise.all(
    response.data.story.content.body.map((question) => {
      return storyblokApi.get(
        `/v2/cdn/stories/questions/${question}`,
        sbParams,
        {
          cache: "no-store",
        }
      );
    })
  );
}
