import React, { useState } from 'react';

const Resources = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const lessons = [
    {
      week: 'Week 1',
      lessons: [
        'How To Choose A Good Bsc Project',
        'Workshop: How To Choose A Good Project',
        'How To Pass Your Final Year Thesis Project',
        'Writing Mistakes',
        'Books',
        'Update New Books',
      ],
    },
    {
      week: 'Week 2',
      lessons: [
        'Lesson 1',
        'Lesson 2',
        'Lesson 3',
        'Lesson 4',
        'Lesson 5',
        'Lesson 6',
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Weekly Lessons</h1>
      {lessons.map((week, weekIndex) => (
        <div key={weekIndex} className="mb-4 cursor-pointer" >
          <div className="flex justify-between items-center bg-blue-500 text-white p-2 rounded" onClick={() => toggleExpand(weekIndex)}>
            <span>{week.week}</span>
            <button >
              {expanded === weekIndex ? '-' : '+'}
            </button>
          </div>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              expanded === weekIndex ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <ul className="bg-gray-100 p-2 rounded">
              {week.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="p-2 border-b last:border-none">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
