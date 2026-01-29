// app/front-page/view.tsx
import * as ContentModule from './cntnt01'; 
import Shapes from './shapes';

export default function View({ shell, title }: any) {
  const Content = ContentModule.default;
  const displayedTitle = (ContentModule as any).coolTitle || title;

  return (
    <div className="view-container">
      {/* The grid-two-one class is now handled globally in your CSS */}
      <div className={shell.gridClass}>
        
        <div className={`${shell.mainClass} view-card`}>
          <h1 className="view-title">
            {displayedTitle}
          </h1>
          <div className="view-content">
            <Content />
          </div>
        </div>

        {/* Sidebar only shows if not hidden */}
        {shell.sideClass !== "hidden" && (
          <div className={`${shell.sideClass} side-col-front`}>
            <Shapes />
          </div>
        )}
        
      </div>
    </div>
  );
}
