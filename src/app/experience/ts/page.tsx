import Link from 'next/link';

export default function Page() {
  return (
    <div className='text-justify'>
      <section id="about">
        <h1 className='mb-2 text-2xl font-semibold tracking-tighter'>
          Quality Assurance Automation Engineer Co-op @ theScore
        </h1>
        <p className='mb-8 text-sm'>
          The painstakingly maintenance of flaky tests and what it means to own
          the testing phase of a continuous integration, continuous development
          pipeline.
        </p>
      </section>

      <section id="skills">
        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Critical flow automation for regression testing
        </h2>
        <p className='text-sm mb-2'>
          <Link href="/documents/ts/Jira.pdf">
            <span className='link-text-li'>Automation tickets</span>
          </Link>
          <span>, last updated April 20, 2025</span>.
        </p>
        <p>
          
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Regression testing and failure investigation
        </h2>
        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/ts/Jira-Maintenance.pdf">
            <span className='link-text-li'>Maintenance tickets</span>
          </Link>
          <span>, last updated on April 20, 2025.</span>
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Kotlin, Jenkins, Selenium, Cucumber and more
        </h2>
        <p>
          This experience has allowed me the opportunity to pick up many new technologies
          and also improve my skills in those tools that I am already familiar with.
          Some of them are highlighted below.
        </p>
        <p>
          The automation codebase mainly uses Kotlin, with the exception of some
          base functionalities being implemented in Java. Learning Kotlin with a
          Java background is not difficult but is interesting nonetheless, especially
          when equipped with a functional programming foundation to appreciate
          the differences between Java and Kotlin. Two of the most useful Kotlin-specific
          features that I may or may not have overused and will definitely miss
          when going back to Java are if and when expressions.
          The ability to use if and when as expressions
          that return some value, together with other functional-programming-inspired
          features such as proper function types as well as type inference makes
          Kotlin code much more consistent, concise, and readable in my humble opinion.
        </p>

        <h2 className='my-6 text-sm tracking-tighter text-center'>
          <Link href="/documents/pcc/UpdatedResume2024.pdf">
            <span className='link-text-li'>updated resume</span>
          </Link>
        </h2>
      </section>
    </div>
  );
}
