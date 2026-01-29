// app/pages/frameworks/view.tsx
import * as ContentModule from './cntnt01';
import Cntnt02 from './cntnt02';
import { CntntHd } from './cntnt01.hd'; 

export default function View({ shell, title }: any) {
  const Content = ContentModule.default;

  return (
    <div className="view-container">
      <div className={shell.gridClass}>
        {/* Main Content Area */}
        <div className={`${shell.mainClass} view-card`}>
          <h1 className="view-title">
            {/* This component handles the "coolTitle" logic internally, 
                falling back to the pageList title if necessary. 
            */}
            <CntntHd fallback={title} />
          </h1>
          <div className="view-content">
            <Content />
          </div>
        </div>

        {shell.sideClass !== "hidden" && (
          <div className={`${shell.sideClass} side-col-wrapper`}>
            <Cntnt02 /> 
          </div>
        )}
      </div>
    </div>
  );
}
