import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'This platform has been a game-changer for my career. The courses are top-notch, and the instructors are amazing.',
    name: 'John Doe',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    quote: 'I was able to land my dream job after completing the Web Development Bootcamp. I highly recommend it!',
    name: 'Jane Smith',
    role: 'Web Developer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    quote: 'The Data Science with Python course was incredibly comprehensive. I learned so much and am now able to apply my skills in my work.',
    name: 'Peter Jones',
    role: 'Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our students are saying
            </h2>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-2">
            <div className="space-y-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt="" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-base text-gray-500">{testimonial.role}</p>
                    <blockquote className="mt-4 text-lg text-gray-500">
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
