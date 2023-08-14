import Counter from '../motion/Counter'
import OnScrollInViewAnimation from '../motion/OnScrollInViewAnimation'
import FloatingImages from './FloatingImages'

const ComunitySection = () => {
  const ansImages = [
    '/issue-tracker-ans1.png',
    '/issue-tracker-ans2.png',
    '/issue-tracker-ans3.png',
    '/issue-tracker-ans4.png',
    '/issue-tracker-ans5.png',
    '/issue-tracker-ans6.png',
    '/issue-tracker-ans7.png'
  ]
  const thxImages1 = [
    '/issue-tracker-thanks1.png',
    '/issue-tracker-thanks2.png'
  ]
  const thxImages2 = [
    '/issue-tracker-thanks3.png',
    '/issue-tracker-thanks4.png',
    '/issue-tracker-thanks3.png'
  ]
  const thxImages3 = [
    '/issue-tracker-thanks2.png',
    '/issue-tracker-thanks5.png',
    '/issue-tracker-thanks6.png',
    '/issue-tracker-thanks4.png'
  ]

  return (
    <section className='container mx-auto py-20 '>
      <h2 className='text-4xl font-bold mb-8 text-bunker-600 dark:text-bunker-300'>
        Google Dev Community Work
      </h2>
      <div className='flex flex-col gap-8'>
        <p className='flex flex-col gap-4 text-xl leading-8 text-bunker-600 dark:text-bunker-200 '>
          As a Developer Programs Engineer, my role centers on guiding global
          developers in Google Smart Home software integration. I accomplished the following:
        </p>
        <div className='flex gap-4  flex-wrap  '>
          <OnScrollInViewAnimation>

          <div className='flex gap-1 items-center rounded-lg bg-gray-50  dark:bg-gray-900  shadow-md border border-gray-300 dark:border-gray-700 backdrop-filter backdrop-blur-lg p-4 w-full sm:w-fit justify-center '>
            <span>caoched</span>
            <Counter
              from={0}
              to={400}
              duration={2}
              inViewShow={true}
              className='text-3xl font-blod w-16 text-center'
            />
            <span> + developers</span>
          </div>
          </OnScrollInViewAnimation>
          <OnScrollInViewAnimation>

          <div className='flex gap-1 items-center rounded-lg bg-gray-50  dark:bg-gray-900  shadow-md border border-gray-300 dark:border-gray-700 backdrop-filter backdrop-blur-lg p-4 w-full sm:w-fit justify-center '>
            <span>resolved</span>
            <Counter
              from={0}
              to={100}
              duration={2}
              inViewShow={true}
              className='text-3xl font-blod w-16 text-center'
            />
            <span> + issues per quarter</span>
          </div>
          </OnScrollInViewAnimation>

          <OnScrollInViewAnimation>

          <div className='flex gap-1 items-center rounded-lg bg-gray-50  dark:bg-gray-900  shadow-md border border-gray-300 dark:border-gray-700 backdrop-filter backdrop-blur-lg p-4 w-full sm:w-fit justify-center '>
            <span>reduce the response time by </span>
            <Counter
              from={0}
              to={85}
              duration={2}
              inViewShow={true}
              className='text-3xl font-blod w-12 text-center'
            />
            <span> %</span>
          </div>
          </OnScrollInViewAnimation>

        </div>

        <div className='flex flex-col md:flex-row gap-3 justify-between overflow-y-clip'>
          <div className='flex-grow px-6 h-96'>
            <FloatingImages images={ansImages} interval={3000} initialX={-10} />
          </div>
          <div className='border border-bunker-600 dark:border-bunker-300 md:h-96 h-[1px] w-fll md:w-[1px] '></div>
          <div className='flex-grow px-6 h-96 flex flex-col justify-around'>
            <div className='w-full h-24'>
              <FloatingImages
                images={thxImages1}
                interval={3000}
                initialX={10}
              />
            </div>
            <div className='w-full h-24'>
              <FloatingImages
                images={thxImages2}
                interval={3000}
                initialX={10}
              />
            </div>
            <div className='w-full h-24'>
              <FloatingImages
                images={thxImages3}
                interval={3000}
                initialX={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComunitySection
