// app/page.tsx
import { pageList } from "@/config/page-list";
import { layouts } from "@/config/glayout";
import View from "./front-page/view"; // Always import the local view as 'View'

// ONLY CHANGE THIS NAME WHEN COPYING
const PAGE_ID = 'front-page';

export default function Home() {
  const cfg = pageList[PAGE_ID];
  const shell = layouts[cfg.layout as keyof typeof layouts];

  return (
    <View shell={shell} title={cfg.titlet} />
  );
}
