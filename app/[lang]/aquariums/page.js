import { TopicPage, topicMetadata } from "@/components/topic-page";

export function generateMetadata() {
  return topicMetadata("aquariums");
}

export default function Page() {
  return <TopicPage topic="aquariums" />;
}
