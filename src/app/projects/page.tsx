import Link from 'next/link';

const prefix = '/projects';

const projects = {
  // 'csc343': {
  //   href: `${prefix}/csc343`,
  //   name: 'csc343 - introduction to databases',
  //   type: 'school',
  // },
  // 'csca08': {
  //   href: `${prefix}/csca08`,
  //   name: 'csca08 - introduction to computer science',
  //   type: 'school',
  // },
  // 'csca48': {
  //   href: `${prefix}/csca48`,
  //   name: 'csca48 - introduction to computer science',
  //   type: 'school',
  // },
  'cscb07': {
    href: `https://github.com/chaunguyenm/cscb07-sportsball`,
    name: 'cscb07 - software design',
    type: 'school',
  },
  // 'cscb09': {
  //   href: `${prefix}/cscb09`,
  //   name: 'cscb09 - software tools and systems programming',
  //   type: 'school',
  // },
  'cscb58': {
    href: `https://github.com/chaunguyenm/cscb58-bmob`,
    name: 'cscb58 - computer organization',
    type: 'school',
  },
  // 'cscb63': {
  //   href: `${prefix}/cscb63`,
  //   name: 'cscb63 - design and analysis of data structures',
  //   type: 'school',
  // },
  'cscc01': {
    href: `https://github.com/chaunguyenm/cscc01-shortcutsc`,
    name: 'cscc01 - introduction to software engineering',
    type: 'school',
  },
  'cscc09': {
    href: `https://github.com/UTSCC09/project-momentum`,
    name: `cscc09 - programming on the web`,
    type: 'school',
  },
  // 'cscc11': {
  //   href: `${prefix}/cscc11`,
  //   name: 'cscc11 - introduction to machine learning and data mining',
  //   type: 'school',
  // },
  // 'cscc24': {
  //   href: `${prefix}/cscc24`,
  //   name: 'cscc24 - principles of programming languages',
  //   type: 'school',
  // },
  // 'cscc69': {
  //   href: `${prefix}/cscc69`,
  //   name: 'cscc69 - operating systems',
  //   type: 'school',
  // },
  // 'cscd27': {
  //   href: `https://github.com/chaunguyenm/cscd27-ctf`,
  //   name: 'cscd27 - network security',
  //   type: 'school',
  // },
  'cscd71': {
    href: `https://github.com/chaunguyenm/cscd71-project`,
    name: 'cscd71 - high-performance computing',
    type: 'school',
  }
  // 'cscd84': {
  //   href: `https://github.com/chaunguyenm/cscd84-pacman`,
  //   name: 'cscd84 - artificial intelligence',
  //   type: 'school',
  // },
}

export default function Page() {
  return (
    <section>
      <section>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">school</h1>
        <ul>
          {Object.entries(projects).filter(([_, { type }]) => type === 'school')
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
        <h1 className="mb-4 mt-8 text-2xl font-semibold tracking-tighter">personal</h1>
        <ul>
          {Object.entries(projects).filter(([_, { type }]) => type === 'personal')
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