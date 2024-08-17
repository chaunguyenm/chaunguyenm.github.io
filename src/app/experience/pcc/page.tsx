import Link from 'next/link';

export default function Page() {
  return (
    <div className='text-justify'>
      <section id="about">
        <h1 className='mb-2 text-2xl font-semibold tracking-tighter'>
          Software Engineer Co-op @ PointClickCare
        </h1>
        <p className='mb-8 text-sm'>
          Code debt, tribal knowldege and all the complication of infrastructure
          of a cloud-hosted microservice architecture.
        </p>
      </section>

      <section id="skills">
        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Microsoft Azure and Terraform training
        </h2>
        <p className='text-sm mb-2'>
          <Link href="/documents/pcc/Trophy Case | Pluralsight.pdf">
            <span className='link-text-li'>Platform Engineering and Terraform</span>
          </Link>
          <span> and </span>
          <Link href="/documents/pcc/Transcript - chaunguyen-9138 | Microsoft Learn.pdf">
            <span className='link-text-li'>AZ-900 Microsoft Azure Fundamentals</span>
          </Link>
          <span> training courses completed, last updated August 14, 2024</span>.
        </p>
        <p>
          Working on a platform engineering team, unsurprisingly, comes with a lot of
          learning and technical training on cloud infrastructure as well as
          infrastructure as code (IaC), all of which threw me in the deep end during
          my first few weeks. My responsibilities mostly involved software engineering
          tasks, which, to some extent, only require a surface level understanding of
          the infrastructure I&apos;m working with, but sitting through a few team standups
          hardly processing what was being discussed, I actively sought out advice from
          my manager to expand my domain knowledge in Azure and infrastrucutre and was
          recommened some resources for training. I spent time working through the idea
          behind platform engineering and the motivation of the developer portal our team
          is maintaining. After gaining this foundational piece of knowledge, I went on
          to start the Microsoft Azure Fundamentals training to have a better understanding
          of all the terms, tools and resources commonly used in the context of my team.
          Finally, I decided to dive into Terraform, an infrastructure as code tool to
          provision and manage cloud infrastructure. Once I completed all the training,
          I felt much more confident and can understand better team discussions and, most
          importantly, this preparation also helped me articulate my technical approaches
          in a more concise and accurate manner as well as gave me more context to debug
          and fix production issues. I would love to have this training part of an organized
          and well-structured onboarding process and nothing could ever beat getting some
          hands-on experiences, even small or simulated tasks, to go alongside with
          the theoretical aspect of the training.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Internal developer portal development
        </h2>
        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/pcc/pcc-nguyec (Chau Nguyen) : May 2024.pdf">
            <span className='link-text-li'>GitHub contributions</span>
          </Link>
          <span>, last updated on August 14, 2024.</span>
        </p>
        <p>
          My work mostly focuses on developing Backstage, an open-source software catalog
          and developer portal leveraged by PointClickCare for internal use.
        </p>

        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/pcc/Backstage Adoption at PCC | PointClickCare Service Catalog.pdf">
            <span className='link-text-li'>Demo of usage analytics plugin</span>
          </Link>
          <span>, last updated on August 14, 2024.</span>
        </p>
        <p>
          Backstage is a fairly new initiative at PointClickCare with the establishment of
          a dedicated Scrum team, Platform Engineering, for the development and maintenance
          of Backstage. It is an important part of any new project rollout plan to assess
          its integration into the organization&apos;s workflow, whether it serves the purpose
          it is intended for and how it can be improved. One of the metrics used for this
          evaluation is the user traffic, so the first task I was assigned to is to integrate
          a usage report into Backstage for improved visibility into its adoption within
          PointClickCare.
        </p>
        <p>
          We previously had the functionalities to record user traffic and generate a
          standalone report on demand. Hence, I first studied the codebase that creates
          the report and made sure I understand the flow. It was more involved than
          it seems, as traffic data were stored on the cloud in an Azure storage container.
          Additionally, to acquire the role information of each user, a secret needed to be
          obtained from Azure keyvault to authenticate the application to use Microsoft Graph.
          For a separate report, these values can be hard-coded or stored as environment
          variables without any security concern; however, this was not the case when the
          report was to be integrated into an application in production. Figuring out how
          all of these steps are tied together and the deeply complicated Azure client
          libraries as well as Microsoft Graph API took a large chunk of time I spent on
          this task. Once everything was up and running, I ran into another issue when
          the plugin was deployed into the production environment. Production had a much
          larger amount of data compared to non-production, which led to a timeout issue
          when accessing the report. This was when I decided to look into the slowness
          of the processing, and quickly realized a particularly API endpoint which ran
          for close to 400ms on average was called in a loop, which created a bottleneck.
          I then consolidated every API call into a single batch call, which significantly
          reduced the processing time from roughly 5 minutes to under 1 minute.
        </p>
        <p>
          I found this to be a tremendously good first task, as it exposed me to so many
          important aspects of working with an application in the cloud, of how different
          approaches can yield significantly different results. My manager also gave
          positive feedback on the work done for the analytics plugin, which was greatly
          encouraging for me during this period when I was just starting out.
        </p>

        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/pcc/pr-demo.png">
            <span className='link-text-li'>Demo of pull rquest status table</span>
          </Link>
          <span>, last updated on August 14, 2024.</span>
        </p>
        <p>
          One of the project initiatives that my team was taking on at the time was
          a service-to-service authentication service to replace the existing one
          that posed some technical challenges due to lack of standardization and
          security concerns due to violation of security policies. I was briefed
          on the project during the second week but, given the complexity and time
          constraint of the project, it was up in the air whether I should join in
          with the team on building this service. I was feeling unsure myself, but
          I stepped up thinking it was a good opportunity to learn and to work in
          a broader team and took responsibility for a small part of the plugin that
          served as the user interface to the system architecture behind.
        </p>
        <p>
          My task was to implement an endpoint that retrieved the status of all pull
          requests related to a service authentication configuration. When developers
          made changes to the communication of their service with other services,
          Backstage generated updates to the configuration file of the service and
          submitted a pull request to merge these updates. Providing visibility into
          the progress of such pull request made the developer experience much more
          smooth and intuitive. There were a lot of considerations going into the
          design of this functionality, such as whether a database was necessary,
          whether web hooks or API polling was a better option (spoiler alert: it
          was not the obvious choice), how changes can be communicated between
          back-end and front-end, etc. I worked myself through the pros and cons of
          each approach, ran them by my team members to settle with a design before
          starting on the implemetation. Another challenge was the conflict
          resolution when merging my code with others&apos;, as there were a number of
          different people working simultaneously on this project. Making sure
          all components, when put together, work properly was only the first step,
          there was also a lot of refactoring to remove redundant code, improve
          reusability and increase test coverage. All in all, the functionality itself
          did not pose much of a challenge compared to other aspects, which I found
          myself learning a lot about as well.
        </p>
        <p>
          One valuable experience for me from participating in this project was
          observing how a large and critical service was planned, implemented,
          tested and launched. It was an incredibly complex process that involved
          many teams who oversaw different parts and brought up in discussion
          different considerations based on their perspectives. An opportunity
          to work alongside and understand this process made a memorable learning
          experience that shed light on the workflows in enterprise-level software
          development cycle that is not normally discussed in school.
        </p>

        <p className='text-sm mt-4 mb-2'>
          <Link href="/videos/noti-campaign-demo.mov">
            <span className='link-text-li'>Demo of notification campaigns</span>
          </Link>
          <span>, responses shown from Backstage, last updated on August 14, 2024.</span>
        </p>
        <p>
          Backstage, at its core, is a software catalog, which means it relies on
          the information being provided to the platform to be accurate, up-to-date
          and complete. There were inevitably many gaps in the data maintained by
          Backstage as it was still in the phase of adoption and as PointClickCare
          had a complex microservice landscape that consisted of more than 160
          different services. One way to ensure that information was comprehensive,
          followed standards and reflected actual status of the services, I worked
          on developing notification campaigns that regularly auditted the data
          and sent out automated notifications to service owners and development
          teams to encourage necessary update.
        </p>
        <p>
          One of the challenges with this plugin was to ensure that it was extensible
          to future requirements as Backstage continued to develop. I overcame this
          requirement by providing a general interface that defined the necessary
          members and methods of a notification campaign and provided a manager
          that coordinated the execution of these separate notification campaigns.
          By doing this, other developers were free to implement new campaign with
          any set of requirements to be used by the manager class.
        </p>
        <p>
          Another difficulty while working on this task arose because of the complexity
          of the cloud infrastructure at PointClickCare. The development and production
          environments were configured differently, which made it challenging for the
          emails to be sent out properly given some constraints due to security. I did
          research into a variety of approaches and understood the security implications
          and trade-offs we would have to make and with the help of my team members,
          implemented a cross-environment approach that was of least resistance in
          security and sensitivity.
        </p>

        <p className='text-sm mt-4 mb-2'>
          <Link href="/documents/pcc/Help | Help section | PointClickCare Service Catalog.pdf">
            <span className='link-text-li'>Demo of Help documentations</span>
          </Link>
          <span>, last updated on August 14, 2024.</span>
        </p>
        <p>
          Backstage had supporting documentations to help with navigating and
          using the portal itself and my team worked closely with Service
          Delivery Management team to create and improve on these documentations.
          Upon receiving some feedback from Service Delivery Management team,
          I discussed some of the points which I found confusing with my manager
          and my team to get a better understanding and capture all the context
          I may have missed before arranging a call with the other team. In the
          meeting, I went over with the engineer from Service Delivery Management
          every item in the feedback documentation, clarified anything that was
          unclear, showed them what I can do with the current Backstage, confirmed
          with them if the solution was sufficient. Finally, I worked on fixing
          the documentations, got the approval from my team and did a final
          run-through with Service Delivery Management -- the process was smooth
          and had no issue given all the preparation done beforehand.
        </p>
        <p>
          My manager, upon assigning this task to me, wanted to guide Service
          Delivery Management team to add and create documentations for Backstage
          themselves without support from Platform Engineering team, given that
          both teams worked closely in accordance on Backstage. I then suggested
          that we minimized the effort and created a guide for any team who wished
          to work on Backstage documentations instead of giving this information
          to only one team and having to revisit this process in the future.
          My manager responded positively to this idea, so I worked on this new
          documentation alongside with the adjustment to the current ones. I also
          asked for review and feedback from my team and Service Delivery Management
          team. This task encourages me to think about the work I had been doing
          from the perspective of non-technical people, which was not something
          I considered before always working among people with a lot more knowldege
          and experience than myself.
        </p>

        <p className='text-sm mt-4 mb-2'>
          <Link href="/videos/opsgenie-demo.mov">
            <span className='link-text-li'>Demo of OpsGenie plugin</span>
          </Link>
          <span>, logs shown on 429 (Too Many Requests) response,
          last updated on August 14, 2024.</span>
        </p>
        <p>
          Backstage had an integration with OpsGenie that allowed users to view
          the on-call schedules as well as analytics of incidents. Upon upgrading
          Backstage to a new back-end version, this plugin, which was developed
          by a third party, was broken. I took on the task of investigating and
          fixing this plugin. I first checked out the GitHub issues to see if
          there was any user with the same error and found that a fix was already
          suggested but yet to be merged and released. I was able to quickly apply
          the fix and resolved the issue, but ran into another error. However,
          this error had been an ongoing issue related to OpsGenie API which
          had quite a low rate limit that returned an error response to our plugin
          considering the number of on-call schedules at PointCliCare. I sought
          help from OpsGenie documentation and applied their recommended fix by
          implementing a backoff and retry built into the regular fetch, which
          effectively solved the problem of hitting the rate limit.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold tracking-tighter'>
          Infrastructure provisioning
        </h2>
        <p>
          Working with Platform Engineering team gave me an opportunity to work
          directly with the cloud infrastructure of PointClickCare. It was my
          first time using Microsoft Azure and there was a lot of things to
          learn and understand. It was also my first experience with infrastructure
          as code using Terraform to do the provisioning and maintenance of cloud
          resources. One of the tasks I worked on was add tagging to resource groups
          that allowed them to be discovered and categorized by Backstage so users
          can quickly and easily access and view the infrastructure that supported
          the services.
        </p>
        <p>
          While working on this, I had to resolve what was known as &quot;drifts&quot;,
          differences between code and actual cloud resources due to manual
          configuration done through Azure portal or shell without being recorded
          in Terraform. Another challenge that I quickly learned was that there
          were ongoing changes and updates with different services and resouces,
          which required a broad and general understanding to determine which change
          can be applied and which should be discarded or postponed until later.
          This undoubtedly was quite different from the engineering aspect of my
          position and caught me off guard with how extensive and deep you had to
          know about each and every corner of the whole architecture to even
          resolve one drift. This was a difficult and different task but a very
          valuable one as it introduced me to the complex and effortful work
          of being a platform engineer.
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