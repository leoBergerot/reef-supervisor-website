import { TopicPage, topicMetadata } from "@/components/topic-page";

export function generateMetadata() {
  return topicMetadata("compte");
}

export default function Page() {
  return <TopicPage topic="compte" />;
}
