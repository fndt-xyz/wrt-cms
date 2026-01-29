// app/about/view.tsx

import * as ContentModule from './cntnt01';

export default function View({ shell, title }: any) {
  const Content = ContentModule.default;
  const displayedTitle = (ContentModule as any).coolTitle || title;

  return (
    <div className="view-container">
      <div className={shell.gridClass}>
        
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
             <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-xs text-slate-400">sidebar content</p>
             </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
