import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import type { Project } from '../../data/duan';
import { projects, getAvailableLocations, optimizeImageUrl } from '../../data/duan';
const { Option } = Select;

const availableLocations = getAvailableLocations();

const DuAnHome: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const [imageLoading, setImageLoading] = useState<{[key: string]: boolean}>({});
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Lấy danh sách unique các capacity
  const capacityRanges = [
    { label: 'Công suất', value: 'all' },
    { label: '≤ 5kWp', value: '0-5' },
    { label: '5-10kWp', value: '5-10' },
    { label: '> 10kWp', value: '10+' }
  ];

  const systemTypes = [
    { label: 'Loại hệ thống', value: 'all' },
    { label: 'Hệ bám tải', value: 'Hệ bám tải' },
    { label: 'Hệ hybrid', value: 'Hệ hybrid' }
  ];

  const filterProjects = (projects: Project[]) => {
    return projects.filter(project => {
      const matchesType = selectedType === 'all' || project.type === selectedType;
      const matchesLocation = selectedLocation === 'all' || project.location === selectedLocation;
      const capacity = parseInt(project.capacity);
      let matchesCapacity = true;
      
      if (selectedCapacity !== 'all') {
        if (selectedCapacity === '0-5') matchesCapacity = capacity <= 5;
        else if (selectedCapacity === '5-10') matchesCapacity = capacity > 5 && capacity <= 10;
        else if (selectedCapacity === '10+') matchesCapacity = capacity > 10;
      }

      return matchesType && matchesCapacity && matchesLocation;
    });
  };

  const renderProjects = () => {
    const filteredProjects = filterProjects(projects);
    
    // Kiểm tra nếu không có dự án nào sau khi filter
    if (filteredProjects.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center p-8">
          
          <p className="text-gray-600 text-lg text-center">
            Không có dự án tìm kiếm phù hợp
          </p>
        </div>
      );
    }

    if (selectedLocation !== 'all') {
      // Hiển thị dạng grid đơn khi đã chọn tỉnh cụ thể
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg overflow-hidden flex-shrink-0 w-[75vw] md:w-auto snap-start relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Glass border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[1px]" />
              
              {/* Main content with glass background */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-xl h-full">
                <div className="relative pt-[133.33%] group -mt-5">
                  {!imageErrors[project.id] ? (
                    <>
                      {imageLoading[project.id] && (
                        <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse">
                          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" 
                               style={{
                                 backgroundSize: '200% 100%',
                                 backgroundPosition: '200% 0',
                               }}
                          />
                        </div>
                      )}
                      <img 
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                          imageLoading[project.id] ? 'opacity-0' : 'opacity-100'
                        }`}
                        onError={() => setImageErrors(prev => ({...prev, [project.id]: true}))}
                        onLoad={() => setImageLoading(prev => ({...prev, [project.id]: false}))}
                        onLoadStart={() => setImageLoading(prev => ({...prev, [project.id]: true}))}
                        sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Preload next image */}
                      <link 
                        rel="preload"
                        as="image"
                        href={project.image}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <svg 
                          className="w-10 h-10 mx-auto mb-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                          />
                        </svg>
                        <p>Chưa tải được ảnh</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center">
                    {/* Project Name */}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name} - {project.location}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      // Phân chia theo section khi chọn "Tất cả tỉnh thành"
      return availableLocations.map(location => {
        const locationProjects = filterProjects(projects).filter(
          project => project.location === location
        );

        if (locationProjects.length === 0) return null;

        return (
          <div key={location} className="mb-12 last:mb-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Dự án tại {location}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locationProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg overflow-hidden flex-shrink-0 w-[75vw] md:w-auto snap-start relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                  {/* Glass border effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[1px]" />
                  
                  {/* Main content with glass background */}
                  <div className="relative bg-white/70 backdrop-blur-sm rounded-xl h-full">
                    <div className="relative pt-[133.33%] group -mt-5">
                      {!imageErrors[project.id] ? (
                        <>
                          {imageLoading[project.id] && (
                            <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse">
                              <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" 
                                   style={{
                                     backgroundSize: '200% 100%',
                                     backgroundPosition: '200% 0',
                                   }}
                              />
                            </div>
                          )}
                          <img 
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                              imageLoading[project.id] ? 'opacity-0' : 'opacity-100'
                            }`}
                            onError={() => setImageErrors(prev => ({...prev, [project.id]: true}))}
                            onLoad={() => setImageLoading(prev => ({...prev, [project.id]: false}))}
                            onLoadStart={() => setImageLoading(prev => ({...prev, [project.id]: true}))}
                            sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Preload next image */}
                          <link 
                            rel="preload"
                            as="image"
                            href={project.image}
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <div className="text-center">
                            <svg 
                              className="w-10 h-10 mx-auto mb-2" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                              />
                            </svg>
                            <p>Chưa tải được ảnh</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <div className="flex justify-between items-center">
                        {/* Project Name */}
                        <h3 className="text-lg font-semibold text-gray-900">
                          {project.name} - {project.location}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      });
    }
  };

  // Thêm hàm kiểm tra xem các filter có đang ở giá trị mặc định không
  const isDefaultFilters = () => {
    return selectedLocation === 'all' && 
           selectedType === 'all' && 
           selectedCapacity === 'all';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Dự án điện mặt trời
          </h2>
          
          {/* Thêm container cho scroll */}
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
                  <option value="all" className="hidden md:block">Vị trí</option>
                  {availableLocations.map((location) => (
                    <option key={location} value={location}>
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
              {!isDefaultFilters() && (
                <button
                  onClick={() => {
                    setSelectedLocation('all');
                    setSelectedType('all');
                    setSelectedCapacity('all');
                  }}
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

        {renderProjects()}
      </div>
    </section>
  );
};

export default DuAnHome;
