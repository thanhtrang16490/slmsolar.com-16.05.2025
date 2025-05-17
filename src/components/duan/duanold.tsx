import type { FC } from 'react';
import { useState } from 'react';
import type Projects from '../../interfaces/projects';

interface ProjectImage {
  data: {
    attributes: {
      formats: {
        medium: {
          url: string;
        };
      };
    };
  } | null;
}

interface DuAnProps {
  projects: Projects[];
}

const DuAnOld: FC<DuAnProps> = ({ projects = [] }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');

  // Lấy danh sách unique các vị trí và kiểm tra null
  const availableLocations = Array.from(
    new Set(
      projects
        .filter(project => project?.attributes?.vi_tri)
        .map(project => project.attributes.vi_tri)
    )
  ).sort();

  const systemTypes = [
    { label: 'Loại hệ thống', value: 'all' },
    { label: 'Hệ bám tải', value: 'Hệ bám tải' },
    { label: 'Hệ hybrid', value: 'Hệ hybrid' }
  ];

  const capacityRanges = [
    { label: 'Công suất', value: 'all' },
    { label: '≤ 5kWp', value: '0-5' },
    { label: '5-10kWp', value: '5-10' },
    { label: '> 10kWp', value: '10+' }
  ];

  // Kiểm tra xem các filter có đang ở giá trị mặc định không
  const isDefaultFilters = () => {
    return selectedLocation === 'all' && 
           selectedType === 'all' && 
           selectedCapacity === 'all';
  };

  return (
    <>
      <header className="header-section">
        <div className="relative isolate overflow-hidden pt-14">
          <img src="/images/du-an/du-an-tieu-bieu-header.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover" />
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-auto container px-6 lg:px-8">
            <div className="mx-auto py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
                  <div className="text-white text-left container mx-auto w-full">
                    <span className="text-2xl mx-auto font-semibold tracking-tight text-balance text-white sm:text-4xl">Dự án tiêu biểu</span>
                    <div className="mt-8">
                      <a href="https://zalo.me/0964920242" target="_blank" className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        Liên hệ tư vấn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </header>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Dự án Solarmax
            </h2>

            {/* Filter Controls */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-3 min-w-max md:min-w-0">
                {/* Filter by Location */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className={`appearance-none bg-white border border-gray-300 rounded-lg py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent whitespace-nowrap
                      ${selectedLocation === 'all' ? 'md:pl-10 md:pr-8 pl-8 pr-2 w-12 md:w-auto' : 'pl-10 pr-8'}`}
                  >
                    <option value="all">Tất cả vị trí</option>
                    {availableLocations.map((location) => (
                      <option key={location} value={location} className="text-gray-900">
                        {location}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className={`fill-current h-4 w-4 ${selectedLocation === 'all' ? 'md:block hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>

                {/* Filter by System Type */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className={`appearance-none bg-white border border-gray-300 rounded-lg py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent whitespace-nowrap
                      ${selectedType === 'all' ? 'md:pl-10 md:pr-8 pl-8 pr-2 w-12 md:w-auto' : 'pl-10 pr-8'}`}
                  >
                    {systemTypes.map((type) => (
                      <option key={type.value} value={type.value} className={type.value === 'all' ? 'hidden md:block' : ''}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className={`fill-current h-4 w-4 ${selectedType === 'all' ? 'md:block hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>

                {/* Filter by Capacity */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <select
                    value={selectedCapacity}
                    onChange={(e) => setSelectedCapacity(e.target.value)}
                    className={`appearance-none bg-white border border-gray-300 rounded-lg py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent whitespace-nowrap
                      ${selectedCapacity === 'all' ? 'md:pl-10 md:pr-8 pl-8 pr-2 w-12 md:w-auto' : 'pl-10 pr-8'}`}
                  >
                    {capacityRanges.map((range) => (
                      <option key={range.value} value={range.value} className={range.value === 'all' ? 'hidden md:block' : ''}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className={`fill-current h-4 w-4 ${selectedCapacity === 'all' ? 'md:block hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>

                {/* Reset button */}
                {(selectedLocation !== 'all' || selectedType !== 'all' || selectedCapacity !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedLocation('all');
                      setSelectedType('all');
                      setSelectedCapacity('all');
                    }}
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                      />
                    </svg>
                    Đặt lại
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid container mx-auto md:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects
            .filter(project => {
              if (!project?.attributes) return false;
              
              const matchesLocation = selectedLocation === 'all' || project.attributes.vi_tri === selectedLocation;
              const matchesType = selectedType === 'all' || project.attributes.loai_he_thong === selectedType;
              const matchesCapacity = selectedCapacity === 'all' || (() => {
                const capacity = project.attributes.cong_suat;
                switch(selectedCapacity) {
                  case '0-5': return capacity <= 5;
                  case '5-10': return capacity > 5 && capacity <= 10;
                  case '10+': return capacity > 10;
                  default: return true;
                }
              })();
              
              return matchesLocation && matchesType && matchesCapacity;
            })
            .map((project, index) => {
              // Kiểm tra null cho image URL
              const imageUrl = project.attributes?.image?.data?.attributes?.formats?.medium?.url;
              
              return (
                <div 
                  key={project.attributes?.slug || index}
                  className="bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg overflow-hidden flex-shrink-0 w-[75vw] md:w-auto snap-start relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                  {/* Glass border effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[1px]" />
                  
                  {/* Main content with glass background */}
                  <div className="relative bg-white/70 backdrop-blur-sm rounded-xl h-full">
                    <div className="relative pt-[177.78%] group -mt-5">
                      {imageUrl ? (
                        <img
                          src={`https://app.slmsolar.com${imageUrl}`}
                          alt={project.attributes?.title || ''}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <img
                          src="/images/du-an/du-an-999-gia-lam.jpg"
                          alt={project.attributes?.title || ''}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      
                      {/* Location button */}
                      {project.attributes?.vi_tri && (
                        <button
                          type="button"
                          className="absolute right-4 bottom-4 inline-flex items-center gap-x-1.5 rounded-md bg-white/80 backdrop-blur-sm px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {project.attributes.vi_tri}
                        </button>
                      )}
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {project.attributes?.slug ? (
                            <a 
                              href={`/du-an/${project.attributes.slug}/`}
                              className="hover:text-green-600 transition-colors duration-200"
                            >
                              {project.attributes.title}
                            </a>
                          ) : (
                            <span>{project.attributes?.title || 'Untitled'}</span>
                          )}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default DuAnOld;