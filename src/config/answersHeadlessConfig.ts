import { AnswersHeadlessProvider } from "@yext/answers-headless-react";

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: process.env.ANSWETS_KEY,
  experienceKey: process.env.EXP_KEY,
  locale: "en",
  sessionTrackingEnabled: true,
};
export const answersApiKey = process.env.ANSWETS_KEY;
export const answersExperienceKey = process.env.EXP_KEY;
export const answersSandboxEndpoints = {
  universalSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query?someparam=blah",
  verticalSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
  questionSubmission:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
  status: "https://answersstatus.pagescdn.com",
  universalAutocomplete:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
  verticalAutocomplete:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
  filterSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
};
