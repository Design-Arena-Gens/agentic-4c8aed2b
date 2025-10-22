import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Introduction to Artificial Intelligence',
    description: 'Learn the fundamentals of AI and machine learning.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-5f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer in 12 weeks.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    title: 'Data Science with Python',
    description: 'Master data analysis, visualization, and machine learning with Python.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const Courses = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Courses
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Choose from a wide range of courses designed to help you achieve your career goals.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View all courses
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href="#" className="hover:underline">
                        {course.title}
                      </a>
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{course.title}</p>
                      <p className="mt-3 text-base text-gray-500">{course.description}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
