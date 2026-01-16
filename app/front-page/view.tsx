//app/front-page/view.tsx
// Note the change in import to include * as Content
import * as ContentModule from './cntnt01'; 
import Shapes from './shapes';

export default function View({ shell, title }: any) {
  // 1. Try to get coolTitle from the module, otherwise use the passed title
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
          <div className={`${shell.sideClass} side-col-front`}>
            <Shapes />
          </div>
        )}
        
      </div>
    </div>
  );
}
