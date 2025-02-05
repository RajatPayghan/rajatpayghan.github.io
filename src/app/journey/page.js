import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { JourneyCard } from '@/components/journey-card'


export default async function Journey() {

  return (
    <>
      <div className="container-wrapper">
        <div className="container-md">
          <div className='text-4xl font-semibold text-neutral-900 mb-4'>Journey</div>
          <hr/>
          <Suspense>
            <div className="flex flex-col items-stretch gap-12">
              <div key={`1`} className="flex flex-col items-baseline md:flex-row md:gap-12">
                <div className="flex items-center">
                  <div className='text-2xl font-semibold'>{2024}</div>
                </div>
                <section>
                    <div key={`1`} className="relative flex pb-8 last:pb-0">
                      <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                        <PlusIcon size={16} />
                      </div>
                      <div className="grow pl-8">
                        <JourneyCard title={'Hello'} description={'Ipsum laborum amet veniam ullamco dolor pariatur nulla dolore id cupidatat minim cupidatat esse sint. Tempor nulla sit duis ipsum.'} />
                      </div>
                    </div>
                    <div key={`2`} className="relative flex pb-8 last:pb-0">
                      <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                        <PlusIcon size={16} />
                      </div>
                      <div className="grow pl-8">
                        <JourneyCard title={'Hi'} description={'Ipsum laborum amet veniam ullamco dolor pariatur nulla dolore id cupidatat minim cupidatat esse sint. Tempor nulla sit duis ipsum.'} />
                      </div>
                    </div>

                </section>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  )
}

