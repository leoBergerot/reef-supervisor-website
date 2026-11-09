import { TopicPage, topicMetadata } from "@/components/topic-page";

export function generateMetadata() {
  return topicMetadata("graphiques");
}

export default function Page() {
  return <TopicPage topic="graphiques" />;
}
