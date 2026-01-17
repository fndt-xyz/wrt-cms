// app/frameworks/page.tsx
import { pageList } from "@/config/page-list";
import { layouts } from "@/config/glayout";
import { PagetProvd } from './paget_provd'; // Import this here
import View from "./view";

const PAGE_ID = 'frameworks'; 

export default function Page() {
  const cfg = pageList[PAGE_ID as keyof typeof pageList];
  const shell = layouts[cfg.layout as keyof typeof layouts];

  // We wrap the View here so shell and title are passed correctly
  return (
    <PagetProvd>
      <View shell={shell} title={cfg.titlet} />
    </PagetProvd>
  );
}
