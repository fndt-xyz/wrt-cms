// app/exmp/view.tsx
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
             {/* Replace this div with your specific sidebar component */}
             <div className="side-placeholder">Sidebar</div>
          </div>
        )}
      
      </div>
    </div>
  );
}
