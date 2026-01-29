// app/pages/view.tsx

import * as ContentModule from './cntnt01';
import PgsLnks from './pgs-lnks';

export default function View({ shell, title }: any) {
  const Content = ContentModule.default;
  const displayedTitle = (ContentModule as any).coolTitle || title;

  return (
    <div className="view-container">
      <div className={shell.gridClass}>
        
        {/* Main Column */}
        <div className={`${shell.mainClass} view-card`}>
          <h1 className="view-title">
            {displayedTitle}
          </h1>
          <div className="view-content">
            <Content />
          </div>
        </div>

        {shell.sideClass !== "hidden" && (
          <div className={`${shell.sideClass} side-col-wrapper`}>
            <div className="right-col-links">
              <h2 className="right-col-link-h2">links</h2>
              <PgsLnks />
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
