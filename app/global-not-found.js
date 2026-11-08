import { NotFoundContent } from "@/components/not-found-content";
import "./globals.css";

export const metadata = {
  title: "Page introuvable | Reef Supervisor",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="min-h-full bg-[#f3f6f8] text-[#57595b]">
        <NotFoundContent />
      </body>
    </html>
  );
}
