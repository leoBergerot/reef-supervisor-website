import { HomePage, homeMetadata } from "@/components/home-page";

export function generateMetadata() {
  return homeMetadata();
}

export default function Page() {
  return <HomePage />;
}
