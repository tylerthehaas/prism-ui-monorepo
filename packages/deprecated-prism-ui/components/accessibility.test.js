import initStoryshots from '@storybook/addon-storyshots';
import ReactDOMServer from 'react-dom/server';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

initStoryshots({
  suite: 'Axe accessibility',
  test: async ({ story, context }) => {
    const component = story.render(context);
    const html = ReactDOMServer.renderToString(component);

    expect(await axe(html)).toHaveNoViolations();
  },
});
