import Counter from "@/components/motion/Counter";
import OnScrollInViewAnimation from "@/components/motion/OnScrollInViewAnimation";
import Slideshow from "@/components/motion/Slideshow";

const CommunityWorkSection = () => {
  const thxImages1 = [
    '/issue-tracker-thanks1.png',
    '/issue-tracker-thanks2.png',
    '/issue-tracker-thanks3.png',
    '/issue-tracker-thanks4.png',
    '/issue-tracker-thanks5.png',
    '/issue-tracker-thanks6.png'
  ];

  return (
    <section id="community" className="mt-16">
      <h2 className="text-2xl font-bold gradient-text mb-6">Google Dev Community Work</h2>
      <div className="liquid-glass p-8">
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
          As a Developer Programs Engineer, my role centers on guiding global
          developers in Google Smart Home software integration. I accomplished
          the following:
        </p>
        <div className="flex gap-4 flex-wrap mb-8">
          <OnScrollInViewAnimation>
            <div className="glass-card p-4 flex gap-2 items-center justify-center min-w-[200px]">
              <span className="text-white">coached</span>
              <Counter
                from={0}
                to={400}
                duration={2}
                inViewShow={true}
                className="text-3xl font-bold gradient-text w-16 text-center"
              />
              <span className="text-white">+ developers</span>
            </div>
          </OnScrollInViewAnimation>
          <OnScrollInViewAnimation>
            <div className="glass-card p-4 flex gap-2 items-center justify-center min-w-[200px]">
              <span className="text-white">resolved</span>
              <Counter
                from={0}
                to={100}
                duration={2}
                inViewShow={true}
                className="text-3xl font-bold gradient-text w-16 text-center"
              />
              <span className="text-white">+ issues per quarter</span>
            </div>
          </OnScrollInViewAnimation>
          <OnScrollInViewAnimation>
            <div className="glass-card p-4 flex gap-2 items-center justify-center min-w-[200px]">
              <span className="text-white">reduced response time by</span>
              <Counter
                from={0}
                to={85}
                duration={2}
                inViewShow={true}
                className="text-3xl font-bold gradient-text w-12 text-center"
              />
              <span className="text-white">%</span>
            </div>
          </OnScrollInViewAnimation>
        </div>
        <div className="w-full h-36 rounded-xl overflow-hidden">
          <Slideshow images={thxImages1} interval={3000} />
        </div>
      </div>
    </section>
  );
};

export default CommunityWorkSection;
