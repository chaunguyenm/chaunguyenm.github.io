import Link from 'next/link';

const prefix = '/experience';

const experience = {
  'pcc': {
    href: `${prefix}/pcc`,
    name: 'software engineer co-op @ pointclickcare',
    type: 'work',
  },
  'sc': {
    href: `${prefix}/sc`,
    name: 'servicenow co-op @ softchoice',
    type: 'work',
  },
  'asr': {
    href: `${prefix}/asr`,
    name: 'international student ambassador @ admissions & student recruitment',
    type: 'school',
  },
  'amacss': {
    href: `${prefix}/amacss`,
    name: 'course representative @ association of mathematical and computer science students',
    type: 'school',
  },
  'shrl': {
    href: `${prefix}/shrl`,
    name: 'residence advisor @ student housing & residence life',
    type: 'school',
  },
  'lib': {
    href: `${prefix}/lib`,
    name: 'makerspace student assistant @ utsc library',
    type: 'school',
  },
}

export default function Page() {
  return (
    <section>
      <section>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">work</h1>
        <ul>
          {Object.entries(experience).filter(([_, { type }]) => type === 'work')
            .map(([path, { href, name }]) => {
              return (
                <li key={path}>
                  <Link href={href}>
                    <p className='link-text-li'>{name}</p>
                  </Link>
                </li>
              )
            })}
        </ul>
      </section>
      <section>
        <h1 className="mb-4 mt-8 text-2xl font-semibold tracking-tighter">school</h1>
        <ul>
          {Object.entries(experience).filter(([_, { type }]) => type === 'school')
            .map(([path, { href, name }]) => {
              return (
                <li key={path}>
                  <Link href={href}>
                    <p className='link-text-li'>{name}</p>
                  </Link>
                </li>
              )
            })}
        </ul>
      </section>
    </section>
  )
}