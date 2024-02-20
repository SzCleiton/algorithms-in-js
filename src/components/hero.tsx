import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex items-center flex-col h-screen justify-between pb-36 pt-16 animate-out">
      <div className="flex w-full justify-center">
        <div
          ref={ref}
          className={`transition-transform transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          } duration-1000 ease-in-out`}
        >
          <section className="flex flex-col items-center gap-2 px-2">
            <h1 className="text-2xl md:text-6xl text-nowrap font-semibold">Algorithms in JavaScript</h1>
            <p className="opacity-75 text-sm md:text-base text-center">Here are some of my studies on search and sorting algorithms</p>
          </section>
        </div>
      </div>
      <div className='flex flex-col-reverse xl:flex-row mt-16 xl:mt-5 gap-32'>
        <article
          className={`flex flex-col items-center gap-3 transition-transform transform px-5
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out`}
        >
          <img
            src="/bigO.png"
            alt="Gráfico de complexidade do BigO notation"
            className='max-w-[40rem] rounded-lg w-full md:w-screen -mt-10 md:mt-0'
          />
          <h3 className='text-secondary-foreground text-sm md:text-base'>
            Fonte: <a href="http://bigocheatsheet.com" target='_blank'>http://bigocheatsheet.com</a>
          </h3>
        </article>

        <div className={`text-justify flex flex-col gap-2 transition-transform transform px-5 md:px-28 xl:px-0 
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'} duration-1000 ease-in-out `}
        >
          <h1 className='text-xl font-semibold'>The beginning of everything</h1>
          <p className='leading-relaxed text-sm'>In this article, I will explain search and sorting algorithms in JavaScript. The motivation behind creating the site arose from the desire to help the dev community, motivated by the lack of content available in the language. Most of the content was aimed at solutions in Python, Java, C, C++, among others.</p>
          <br />
          <h1 className='text-xl font-semibold'><i>Big-O Notation</i></h1>
          <p className='leading-relaxed text-sm'>
            In short, Big-O measures the efficiency of an algorithm based on different amounts of input data.

            It helps predict how long the algorithm will take in the <b>WORST</b> scenario, based on the data received.

            We want to understand how the code behaves with more data. Will it be fast, slow or significantly longer? Let's explore this below.
            <span className='opacity-60 m-2'>(See graph for visual representation)</span>
          </p>
        </div>
      </div>

      <div className="animate-bounce mt-32 xl:mt-0 ">
        <div className="border-primary w-7 h-7 border border-r-2 border-l-0 border-b-2 border-t-0 rotate-45 " />
      </div>
    </div>
  )
}