// app/front-page/view.tsx
import * as ContentModule from './cntnt01'; 
import Herond from './herond';
import Barnd from './barnd';
import Row01 from './row01';
import Shapes from './shapes';
import { coolTitle, heroSlides, featuredItems } from './fp-mnfst';

export default function View({ shell }: any) {
  const Content = ContentModule.default;

  return (
    <div className="view-container">
      <div className={shell.gridClass}>
        
        {/* Left Column: Modular Framework Elements */}
        <div className={`${shell.mainClass} space-y-10`}>
          
          {/* Slot 1: Text Content */}
          <div className="view-card">
             <h1 className="view-title mb-6">{coolTitle}</h1>
             <div className="view-content">
                <Content />
             </div>
          </div>

          {/* Slot 2: Hero Slides */}
          <Herond slides={heroSlides} />

          {/* Slot 3: The Static Row */}
          <Row01 />

          {/* Slot 4: Featured Grid */}
          <section>
            <h2 className="lowercase text-xs font-bold text-slate-400 mb-4 px-4">Featured items</h2>
            <Barnd items={featuredItems} />
          </section>

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
