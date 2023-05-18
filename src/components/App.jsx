import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const reviews = ['good', 'neutral', 'bad'];
  const [goodReview, setGoodReview] = useState(0);
  const [badReview, setBadReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const totalFeedback = goodReview + badReview + neutralReview;
  const positivePercentage = ((goodReview / totalFeedback) * 100).toFixed();

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodReview(goodReview => goodReview + 1);
        break;
      case 'bad':
        setBadReview(badReview => badReview + 1);
        break;
      case 'neutral':
        setNeutralReview(neutralReview => neutralReview + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={reviews} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics" another>
        {totalFeedback ? (
          <Statistics
            good={goodReview}
            neutral={neutralReview}
            bad={badReview}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
