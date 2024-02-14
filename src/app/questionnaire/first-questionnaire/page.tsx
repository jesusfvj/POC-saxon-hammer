import Question from "@/components/Question";
import {
  ISbResult,
  ISbStoriesParams,
  getStoryblokApi,
} from "@storyblok/react/rsc";

export default async function Home() {
  const questions = await fetchData();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      {questions.map((question) => (
        <Question
          blok={question.data.stories[0].content}
          key={question.data.stories[0].content._uid}
        />
      ))}
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

  return (await Promise.all(
    response.data.story.content.questions.map((uuid: string) => {
      return storyblokApi.get(
        `cdn/stories/`,
        { ...sbParams, by_uuids: uuid },
        {
          cache: "no-store",
        }
      );
    })
  )) as ISbResult[];
}
