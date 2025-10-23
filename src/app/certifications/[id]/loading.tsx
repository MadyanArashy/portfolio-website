export default function CertLoading() {
  return (
    <main className="mt-4 sm:mt-24 mx-auto max-w-4xl grid md:grid-cols-2 gap-8 items-center relative px-4">
      <div className='grid grid-cols-2 md:flex md:flex-col gap-4 w-full bg-secondary/50 animate-pulse'>
        <div className="w-full h-[150px] md:h-[224px] bg-border/50 animate-pulse"/>
        <div className="w-full h-[150px] md:h-[224px] bg-border/50 animate-pulse"/>
      </div>
      <div className='w-full mt-6 md:mt-0'>
        <div className="mb-4 w-1/2 bg-text-primary/50 animate-pulse py-3"></div>
        <div className="w-5/6 bg-text-secondary/50 animate-pulse py-2.5 mb-1"></div>
      </div>
    </main>
  )
}