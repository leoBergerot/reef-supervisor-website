import { TopicPage, topicMetadata } from "@/components/topic-page";

export function generateMetadata() {
  return topicMetadata("historique");
}

export default function Page() {
  return <TopicPage topic="historique" />;
}
