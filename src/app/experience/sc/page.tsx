import Link from 'next/link';

export default function Page() {
  return (
    <div className='text-justify'>
      <section id="about">
        <h1 className='mb-2 text-2xl font-semibold tracking-tighter'>
          ServiceNow Co-op @ Softchoice
        </h1>
        <p className='mb-8 text-sm'>
          My first step into the mysterious and headache-inducing 
          (is it though?) corporate world!
        </p>
      </section>

      <section id="skills">
        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          ServiceNow Developer Training
        </h2>
        <p className='text-sm mb-2'>
          <Link href="https://github.com/chaunguyenm/devtraining-needit-utah">
            <span className='link-text-li'>GitHub repository</span>
          </Link>
          <span> </span> of the ServiceNow Developer training exercises for 
          Softchoice, last updated on July 14, 2023.
        </p>
        <p>
          My training for this position provided me with an understanding of 
          the processes and operations in providing services to the customers, 
          such as the teams involved or the tasks to be completed, but 
          technical-wise, I was quite unprepared, especially without the 
          guidance of my mentor for the first week of work. After struggling
          with my first and relatively simple task, I took the initiative
          to building my technical knowledge myself by working through the
          ServiceNow Developer training. As I took on more tasks from the team,
          I also set aside some time to learn and practice the concepts
          and exercises and applied what I learned into my work. This helped
          strengthen my knowledge of the ServiceNow system and gave me a 
          complete picture of my tasks which I only saw as independent 
          fragments and how they are connected, which, in turn, opened up many
          solutions for a single task whose pros and cons I can confidently
          discuss with my team. This training helped speed up and improve the
          quality of my work and gave me the necessary foundation to complete 
          more complex tasks.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Softchoice ServiceNow Enhancements
        </h2>
        <p className='text-sm mb-2'>
          <Link href="/documents/sc/Platform Release 1.20 Stories notes.pdf">
            <span className='link-text-li'>June</span>
          </Link>
          <span> and </span>
          <Link href="/documents/sc/Platform Release 1.21 Stories notes.pdf">
            <span className='link-text-li'>July</span>
          </Link>
          <span> </span>completed enhancements for Softchoice ServiceNow,
          last updated on July 27, 2023.
        </p>
        <p>
          Enhancement requests from different teams were assigned to me and I
          worked with process and business owners to develop, test, and deploy
          solution to the production platform. As the story owner, I am
          responsible for understanding and documenting the business 
          requirements, developing most efficient and best practice solutions, 
          as well as testing and fixing any identified bugs. With my 
          understanding of the processes within the company and my technical 
          skills regarding ServiceNow, JavaScript, HTML, and CSS, I did 
          research on similar issues and how best to approach them, discussed 
          potential solutions and their risks with my mentor, and worked to 
          build the solution myself. Coordinating with process and business 
          owners requires professional and effective communication to ensure 
          the requirements are accurately documented and understood and 
          progress on testing is being made. All enhancements assigned to me 
          have been successfully deployed and reported no issue so far. 
          Working on these tasks improves my communication skills through 
          different platforms and suitable to different preferences and also 
          strengthens my technical skills and understanding of ServiceNow.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Networking with coworkers
        </h2>
        <p className='text-sm mb-2'>
          <Link href="/documents/sc/SoftchoiceNetworking.txt">
            <span className='link-text-li'>Notes</span>
          </Link>
          <span> </span>
          of informational interviews with some co-op students from different 
          teams of Softchoice, last updated on July 20, 2023.
        </p>
        <p className='text-sm mb-2'>
          <Link href="https://www.linkedin.com/posts/shantal-cardoz-9a8436171_at-softchoice-we-place-great-value-on-our-activity-7065459718495879168-IYqj?utm_source=share&utm_medium=member_desktop">
            <span className='link-text-li'>Co-op Welcome in May</span>
          </Link>
          <span> and </span>
          <Link href="https://www.linkedin.com/posts/the-robbin-simpkins_i-had-such-a-great-time-with-my-softchoice-activity-7087083311939932160-Slr-?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy">
            <span className='link-text-li'>H2 Kick-off in June</span>
          </Link> 
          <span> </span>
          with my favorite Orange Nation.</p>
        <p>
          When I first started, I knew I was going to meet a lot of amazing 
          people, and I wanted to take full advantage of that. Although my 
          position was fully remote, I actively attended many in-person 
          meetings and events to have a better chance to learn about my 
          coworkers and their professional careers. I also took the initiative 
          to conducting some informational interviews with some co-op students 
          from other departments to learn about their teams and 
          responsibilities, which not only gives me a better overview of the 
          whole company but also exposes me to some different career paths 
          that may interest me. Throughout my work term at Softchoice, I 
          consciously worked on improving my communication skills and 
          overcoming my social anxiety to create better professional 
          opportunities and relationships for myself.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Softchoice ServiceNow Upgrade
        </h2>
        <p className='text-sm mb-2'>
          <Link href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/quick-answer/how-to-upgrade.pdf">
            <span className='link-text-li'>Sample of an action plan for 
              ServiceNow instance upgrade.
            </span>
          </Link>
          <span> </span>
          This is a sample for demonstration purpose, the actual plan of 
          Softchoice is omitted due to confidentiality reasons.
        </p>
        <p>
          Starting the second work term at Softchoice, I was soon faced with 
          a new task of supporting an instance upgrade of our ServiceNow 
          platform. Our platform has been working outdated by two upgrades, 
          and considering the effort of the team with the official fixes for 
          our current issues, we decided to push forward with an upgrade before
          the end of the year.
        </p>
        <p>
          Our Director of Services Improvement took the initiative to creating 
          the action plan and assigned individual members of the team to 
          completing the documentation needed for the upgrade. I, having worked
          on serveral modules for Softchoice&apos;s ServiceNow, was responsible for
          identifying risks and test cases of said modules that require 
          attention pre- and post-upgrade.

          To fully understand the risks involved in the instance upgrade, I 
          consulted official documentation and guide from ServiceNow to have a
          better and complete grasp of what changes are introduced with the new 
          version and I also reviewed my own documentation of past 
          customizations made to our platform to identify what could be a 
          potential failure or error once the upgrade was in place.
        </p>
        <p>
          Once the preparation was finished, our team upgraded our ServiceNow 
          instances and held meetings to resolve conflicts or issues presented 
          by the upgrade. All of the high priority issues were discussed with 
          the broader team, and for those that directly involved with my 
          previous customizations or development, I reviewed what changes were 
          made and proposed a solution to fix the issue to the team and the 
          reasoning behind my proposal. For lower priority issues, I worked 
          with my mentor for a resolution and carefully documented all actions 
          taken. Once all issues were resolved, I was responsible for testing 
          the relevant modules and provided comments on what worked and what 
          was broken. What failed testing would be further investigated and 
          resolved through the stabilization phase, in which I was tasked with
          developing a fix for each issue that persisted after the error 
          resolution phase. 
          </p>
          <p>
            This whole project was a lengthy one and involved a 
            lot of risks, especially since ServiceNow is a customer-facing platform 
            that Softchoice uses on a daily basis. Coordinating with a larger team 
            to identify issues and working on a tight schedule to deliver a 
            solution to a client-interactive issue help me improve on my 
            communication skills and my ability to work under pressure. We 
            successfully completed the project as planned out by our Director and, 
            as a result, were able to fix many of the issues our users were 
            facing previously and also deploy many new functionalities as part 
            of the latest version.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Working on incidents and defects
        </h2>
        <p className='text-sm mb-2'>
          <Link href="/documents/sc/Platform Release 1.22 Stories notes.pdf">
            <span className='link-text-li'>August</span> 
          </Link>
          <span> </span>
          completed enhancements for Softchoice ServiceNow. This has been 
          partially hidden for confidentiality reasons.
        </p>
        <p>
          Wrapping up our August enhancement release, we entered an enhancement 
          freeze period in preparation for the instance upgrade. Hence, I was 
          assigned a number of different tasks, and one of them was to work on 
          the reported issues and functionality errors on our ServiceNow platform.
          As opposed to enhancements, incidents and defects generally require 
          more technical ability and understanding of the system, as often the 
          issues reported occur under some specific conditions which are usually 
          considered &quot;edge cases&quot; and are harder to identify. The sample artifact 
          is a list of incidents and/or defects assigned to myself and a general 
          description of the issues.
        </p>
        <p>
          To work on this task, I had to utilize the resources from ServiceNow 
          as well as our company&apos;s documentation to understand the customizations 
          that had been deployed and what could potentially cause the issues in 
          question. Communications with the reporter was definitely important in 
          pinpointing the exact issue and identifying the pattern or circumstances 
          under which the error occurred. More often than not, the issue was not 
          documented anywhere, including in ServiceNow official support platform 
          and Softchoice&apos;s past documentation, and support cases had to be opened 
          with the support engineers from ServiceNow. Cases like these require 
          constant communication back and forth between my team and the support 
          engineer from ServiceNow, as well as working closely with the engineer 
          to help identify and resolve the issue. Other issues whose fix can be 
          developed by myself or my team would move into the development phase, 
          followed by a testing period with the reporter and any relevant users, 
          before being released into production. 
        </p>
        <p>
          Working on this task helps improve my communication skills as I not 
          only have to connect with the reporters and gather the evidence or samples
          of the issues to start investigating but also explain and provide 
          additional information of the system to the support engineers from 
          ServiceNow if issues are escalated. My technical skills, specifically 
          my investigation and my ability to identify patterns and come up with 
          edge cases, have also improved thanks to the specific nature of these 
          tickets. A timely and satisfactory resolution for each of these incidents 
          or defects contributes to the overall efficiency of our ServiceNow platform
          and the improving user experience of both internal employees and 
          external customers.
        </p>

        <h2 className='my-6 text-sm tracking-tighter text-center'>
          <Link href="/documents/sc/UpdatedResume2023.pdf">
            <span className='link-text-li'>updated resume</span>
          </Link>
        </h2>
      </section>
    </div>
  );
}