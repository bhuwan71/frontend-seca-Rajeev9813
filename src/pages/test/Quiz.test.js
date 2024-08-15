import React from 'react';
import { shallow } from 'enzyme';
import Api from '../../apis/Api';
import Quizzes from '../homepage/Quiz';

jest.mock('../../apis/Api'); // Mock the Api module

describe('Quizzes', () => {
  let mockData;

  beforeEach(() => {
    mockData = [
      { _id: 1, quizName: 'Quiz 1', quizDescription: 'Description 1', questions: [] },
      { _id: 2, quizName: 'Quiz 2', quizDescription: 'Description 2', questions: [] },
    ];
  });

  it('renders the component with fetched quizzes', async () => {
    Api.get.mockResolvedValueOnce({ data: mockData }); // Mock successful API response

    const wrapper = shallow(<Quizzes />);

    // Simulate the API call being resolved
    await Promise.resolve();
    wrapper.update(); // Force re-render to reflect state changes

    expect(wrapper.find('.quiz-item')).toHaveLength(mockData.length);

    // Additional check for UI content
    const quizItems = wrapper.find('.quiz-item');
    expect(quizItems.at(0).text()).toContain('Quiz 1');
    expect(quizItems.at(1).text()).toContain('Quiz 2');
  });

  it('renders "No quizzes" message if API call fails', async () => {
    Api.get.mockRejectedValueOnce(new Error('API error')); // Mock API error
    const wrapper = shallow(<Quizzes />);

    await Promise.resolve(); // Simulate failed API call
    wrapper.update(); // Force re-render to reflect state changes

    expect(wrapper.find('.text-gray-600').text()).toBe('No quizzes available at the moment.');
    expect(wrapper.find('.quiz-item')).toHaveLength(0); // Ensure no quiz items are rendered
  });
});
