'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      className="px-4 py-2 text-white dark:text-black bg-transparent font-semibold rounded-md"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      <svg height="24px" viewBox="0 0 512 512" width="24px">
        <path d="M271,127c8.833,0,16-7.167,16-16V79c0-8.833-7.167-16-16-16s-16,7.167-16,16v32    C255,119.833,262.167,127,271,127z M271,415c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32    C287,422.167,279.833,415,271,415z M146.562,372.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C162.938,366.583,152.812,366.562,146.562,372.834z M127,271    c0-8.833-7.167-16-16-16H79c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C119.833,287,127,279.833,127,271z M146.541,169.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L146.541,169.167z M335,159c-11.188,0-21.812,2.167-32,5.208    c-10.188-3.042-20.812-5.208-32-5.208c-61.75,0-112,50.25-112,112s50.25,112,112,112c11.188,0,21.812-2.166,32-5.209    c10.188,3.043,20.812,5.209,32,5.209c61.75,0,112-50.25,112-112S396.75,159,335,159z M255.229,349.417    C218.583,342.084,191,309.791,191,271c0-38.792,27.583-71.083,64.229-78.417C235.334,212.812,223,240.458,223,271    S235.334,329.188,255.229,349.417z" className="fill-black dark:fill-white" />
      </svg>
    </button>
  )
}