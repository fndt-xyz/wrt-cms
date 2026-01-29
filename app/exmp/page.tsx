// app/exmp/page.tsx

import { pageList } from "@/config/page-list";
import { layouts } from "@/config/glayout";
import View from "./view";

// ONLY CHANGE THIS NAME WHEN COPYING
const PAGE_ID = 'exmp'; 

export default function Page() {
  const cfg = pageList[PAGE_ID as keyof typeof pageList];
  const shell = layouts[cfg.layout as keyof typeof layouts];

  return (
    <View shell={shell} title={cfg.titlet} />
  );
}
