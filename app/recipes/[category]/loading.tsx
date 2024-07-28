import { cardWrapper } from '@/app/ui/card/styles.css'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'

export default function Loading() {
  return <LoadingSkeleton />
}

export const SkeletonCard = () => {
  return (
    <div
      role="status"
      className=" p-4 animate-pulse"
      style={{
        height: 341,
        borderRadius: 4,
        borderColor: 'red',
        width: 387,
        backgroundColor: '#EFEAE6',
        margin: 16,
        boxShadow: '8px 8px 90px 1px #A6A6A6',
      }}
    >
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  )
}

export const LoadingSkeleton = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}
