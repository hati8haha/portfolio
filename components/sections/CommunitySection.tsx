import Counter from "../motion/Counter"
import OnScrollInViewAnimation from "../motion/OnScrollInViewAnimation"
import FloatingImages from "./FloatingImages"

const ComunitySection = () => {
  const ansImages = ['/issue-tracker-ans1.png', '/issue-tracker-ans2.png', '/issue-tracker-ans3.png', '/issue-tracker-ans4.png', '/issue-tracker-ans5.png', '/issue-tracker-ans6.png', '/issue-tracker-ans7.png']
  const thxImages = ['/issue-tracker-thanks1.png', '/issue-tracker-thanks2.png', '/issue-tracker-thanks3.png', '/issue-tracker-thanks4.png', '/issue-tracker-thanks5.png', '/issue-tracker-thanks6.png']

 return (
  <section className='container mx-auto py-20'>
  <h2 className='text-4xl font-bold mb-8 text-bunker-600 dark:text-bunker-300'>
    Google Dev Community Work
  </h2>
  <div className='flex flex-col gap-8'>
    <Counter from={0} to={400} duration={2} className="text-3xl" inViewShow={true} />

    <div className="flex flex-col md:flex-row gap-3 justify-between">
      <div className="flex-grow px-6">
      <FloatingImages images={ansImages} interval={2000} />
      </div>
      <div className="border border-bunker-600 dark:border-bunker-300 h-[40rem]"></div>
      <div className="flex-grow px-6">

      <FloatingImages images={thxImages} interval={2000} />
      </div>

    </div>


  </div>
</section>
 ) 
}

export default ComunitySection