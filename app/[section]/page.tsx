'use client'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'
import { recipeTitle } from '../ui/details-page/styles.css'
import sections from '../../public/data/sections.json'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronArrowBack } from '../ui/SVG'

export default function Page({ params }: { params: { section: string } }) {
  const router = useRouter()
  const section = sections.find((s: any) => s.path === params.section)

  return (
    <>
      <TopLevelWrapper>
        <div className="px-6 md:px-8 pt-8 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Go back"
          >
            <ChevronArrowBack />
          </button>

          <div className={recipeTitle}>{section?.title}</div>
        </div>
        <div className="px-6 md:px-8 pt-4">{section?.introduction}</div>
        <div className="flex justify-center py-8">
          {section?.image && (
            <Image
              src={section.image}
              alt={section?.title || ''}
              width={400}
              height={400}
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {section?.sections.map((item, index) => {
            const isLastOddItem =
              section.sections.length % 2 !== 0 &&
              index === section.sections.length - 1

            return (
              <div
                key={index}
                className={`
          p-6 md:p-8
          border-[#EAEAEA]
          border-b
          ${index % 2 === 0 && !isLastOddItem ? 'md:border-r' : ''}
          ${isLastOddItem ? 'md:col-span-2' : ''}
        `}
              >
                <h3 className="mb-3 text-[18px] font-semibold leading-tight text-[#1F2430]">
                  {item.header}
                </h3>

                <div className="whitespace-pre-line text-[16px] leading-[1.45] text-[#2F3441]">
                  {item.content}
                </div>
              </div>
            )
          })}
        </div>
      </TopLevelWrapper>
    </>
  )
}
