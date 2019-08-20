/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Bhaag Marway',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'Full Stack Web Developer',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Github: ',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Linkedin',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: 'I don\'t know what this is',
  },
});
