import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>ServiceNow Co-op @ Softchoice</title>
        </Head>
        <section id="about">
          <h1 className={utilStyles.heading2Xl}>ServiceNow Co-op @ Softchoice</h1>
          <p>My first step into the mysterious and headache-inducing corporate world!</p>
        </section>
        <section id="skills">
          <h4 className={utilStyles.headingMd}>ServiceNow Developer Training</h4>
          <p><Link href="https://github.com/chaunguyenm/devtraining-needit-utah">GitHub repository</Link>  of the ServiceNow Developer training exercises for Softchoice, last updated on July 14, 2023.</p>
          <p>My training for this position provided me with an understanding of the processes and operations in providing services to the customers, such as the teams involved or the tasks to be completed, 
          but technical-wise, I was quite unprepared, especially without the guidance of my mentor for the first week of work. After struggling with my first and relatively simple task, I took the initiative
          to building my technical knowledge myself by working through the ServiceNow Developer training. As I took on more tasks from the team, I also set aside some time to learn and practice the concepts
          and exercises and applied what I learned into my work. This helped strengthen my knowledge of the ServiceNow system and gave me a complete picture of my tasks which I only saw as independent fragments
          and how they are connected, which, in turn, opened up many solutions for a single task whose pros and cons I can confidently discuss with my team. This training helped speed up and improve the quality
          of my work and gave me the necessary foundation to complete more complex tasks.</p>
          <h4 className={utilStyles.headingMd}>Softchoice ServiceNow Enhancements</h4>
          <p><Link href="/documents/Platform Release 1.20 Stories notes.pdf">June</Link> and <Link href="/documents/Platform Release 1.21 Stories notes.pdf">July</Link> completed enhancements for Softchoice ServiceNow, last updated
          on July 27, 2023.</p>
          <p>Enhancement requests from different teams were assigned to me and I worked with process and business owners to develop, test, and deploy solution to the production platform. As the story owner, I am
          responsible for understanding and documenting the business requirements, developing most efficient and best practice solutions, as well as testing and fixing any identified bugs. With my understanding of
          the processes within the company and my technical skills regarding ServiceNow, JavaScript, HTML, and CSS, I did research on similar issues and how best to approach them, discussed potential solutions and
          their risks with my mentor, and worked to build the solution myself. Coordinating with process and business owners requires professional and effective communication to ensure the requirements are accurately
          documented and understood and progress on testing is being made. All enhancements assigned to me have been successfully deployed and reported no issue so far. Working on these tasks improves my communication
          skills through different platforms and suitable to different preferences and also strengthens my technical skills and understanding of ServiceNow.
          </p>
          <h4 className={utilStyles.headingMd}>Networking with coworkers</h4>
          <p><Link href="/documents/SoftchoiceNetworking.txt">Notes</Link> of informational interviews with some co-op students from different teams of Softchoice, last updated on July 20, 2023.</p>
          <p><Link href="https://www.linkedin.com/posts/shantal-cardoz-9a8436171_at-softchoice-we-place-great-value-on-our-activity-7065459718495879168-IYqj?utm_source=share&utm_medium=member_desktop">Co-op Welcome in May</Link> and <Link href="https://www.linkedin.com/posts/the-robbin-simpkins_i-had-such-a-great-time-with-my-softchoice-activity-7087083311939932160-Slr-?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy">H2 Kick-off in June</Link> with my favorite Orange Nation.</p>
          <p>When I first started, I knew I was going to meet a lot of amazing people, and I wanted to take full advantage of that. Although my position was fully remote, I actively attended many in-person meetings and events
          to have a better chance to learn about my coworkers and their professional careers. I also took the initiative to conducting some informational interviews with some co-op students from other departments to learn about
          their teams and responsibilities, which not only gives me a better overview of the whole company but also exposes me to some different career paths that may interest me. Throughout my work term at Softchoice, I consciously
          worked on improving my communication skills and overcoming my social anxiety to create better professional opportunities and relationships for myself.
          </p>
        </section>

      </Layout>
    );
  }