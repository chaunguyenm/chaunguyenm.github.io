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
  'ta': {
    href: null,
    name: 'teaching assistant @ department of computer and mathematical sciences',
    type: 'school',
  },
  'asr': {
    href: null,
    name: 'international student ambassador @ admissions & student recruitment',
    type: 'school',
  },
  'amacss': {
    href: null,
    name: 'course representative @ association of mathematical and computer science students',
    type: 'school',
  },
  'shrl': {
    href: null,
    name: 'residence advisor @ student housing & residence life',
    type: 'school',
  },
  'lib': {
    href: null,
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
              if (href == null) return <p>{name}</p>
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
              if (href == null) return <p>{name}</p>
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