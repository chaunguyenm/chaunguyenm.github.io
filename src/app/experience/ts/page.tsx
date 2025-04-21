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
          The product I mainly worked on, Back Office, did not have a complete automated
          test suite, hence, when I was assigned to the team, one of the goals
          was to clear out the backlog and fully automate all the critical flows.
          One of the challenges that come with automating test cases is that it
          requires a good level of understanding of the product and the specific
          scenario being tested. To fill in the gaps, I reached out to the Quality
          Assurance Analysts of the team for a walkthrough of the product as well
          as an overview of the regression test plan. I also manually went over
          each critical flow as I started working on and actively asked clarifying
          questions in the team channel, which occasionally leading to discovery
          of small bugs or inconsistencies in the product. In the beginning, I
          also constantly sought advice and feedback from my mentor to help
          build up the good coding habits and get used to the best practices
          within the organization.
        </p>
        <p>
          As a result, I was able to quickly adapt to the automation work of 
          Back Office and had received high regards from my mentor and manager.
          I completed around 70 tickets, corresponding to 70 critical flows that
          require testing during releases. This was a significant contribution
          to achieve a 100% automated test suite, which placed Back Office far 
          beyond any other product team in terms of this metric.
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
        <p>
          Though not a focus of mine when starting working on Back Office automation 
          project, I also participated in regression testing whenever a new release 
          was launched. My mentor was highly impressed with the quality of my work
          on automating the critical flows and had agreed to bring me into regression 
          testing. The most important task during this process was to verify any 
          test failure, understand the cause and identify if there was any defect
          within the new release. This task required a high level of ownership
          over the codebase, which I did not possess at the time. Hence, I paid 
          particular attention to learning and understanding the large codebase
          that the automation team owns, reviewing team members&apos; pull requests
          and asking questions where I had difficulty understanding.
        </p>
        <p>
          Thus, I was able to contribute to the investigation of test failure during regression 
          testing by verifying functionality of the product, implementing fixes
          for flaky tests or changes in the user interface. This has helped Back Office 
          to consistently have a pass rate of over 95%, with a peak of over 97%,
          for its scheduled releases.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Kotlin, Jenkins, Selenium, Cucumber and more
        </h2>
        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/ts/git-contribution.png">
            <span className='link-text-li'>GitHub contributions</span>
          </Link>
          <span>, last updated on April 20, 2025.</span>
        </p>
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
        <p>
          As part of this co-op placement, I have also learned the basics of
          Jenkins as a CI/CD tool, Selenium and Cucumber for web automated testing,
          MongoDB integration to support automated testing, and some advanved 
          Git functionalities such as submodules or cherry-picking. These have been
          meaningful learning experiences, allowing me to connect with team members 
          for support and guidance as well as giving me the opportunity to expand
          my skill set.
        </p>

        <h2 className='my-6 text-sm tracking-tighter text-center'>
          <Link href="/documents/ts/UpdatedResume2025.pdf">
            <span className='link-text-li'>updated resume</span>
          </Link>
        </h2>
      </section>
    </div>
  );
}
