import React from 'react';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { mockComponent } from 'react-dom/test-utils';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
`;

mockComponent.onPost('/', {query}).reply(500);

describe('News Section', () => {
  it('Render articles', () => {
    renderWithProviders(<NewsSection/>);
  });
});
