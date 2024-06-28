// cerebral dependencies
import App from 'cerebral';
import { Container } from '@cerebral/react';

// React dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// our app-specific functionality
import { App as AppComponent } from './App';
import { presenter } from './presenter';

const cerebralApp = App(presenter, {
  returnSequencePromise: true,
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Container app={cerebralApp}>
      <AppComponent />
    </Container>
  );
}
