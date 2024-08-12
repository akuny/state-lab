import { isFunction, mapValues } from 'lodash';
import { Get } from 'cerebral';
import { connect as cerebralConnect } from '@cerebral/react';
import type { FunctionComponent } from 'react';
import { ClientAppContext, appContext } from '../appContext';
import { submitMagicWordSequence } from './sequences/submitMagicWordSequence';
import { updateFormValueSequence } from './sequences/updateFormValueSequence_cerebral';
import { initialState } from './state';
import { resetMagicWordFormSequence } from './sequences/resetMagicWordFormSequence';

type FakeConnectType = <PassedProps, Deps>(
  depsMap: Deps,
  component: FunctionComponent<Deps & PassedProps>
) => FunctionComponent<PassedProps>;

export const connect = cerebralConnect as unknown as FakeConnectType;

const presenterSequences = {
  resetMagicWordFormSequence: resetMagicWordFormSequence as unknown as Function,
  submitMagicWordSequence: submitMagicWordSequence as unknown as Function,
  // updateFormValueSequence: updateFormValueSequence as unknown as Function,
};

export type Sequences = typeof presenterSequences;

export type ActionProps<Props = any, AppContext = ClientAppContext> = {
  appContext: AppContext;
  get: <T>(slice: T) => T;
  store: {
    toggle: (key: string) => void;
    set: (key: any, value: any) => void;
    merge: (key: any, value: any) => void;
    unset: (key: any) => void;
  };
  path: any;
  props: Props;
};

// decorator to inject "get" and "appContext" as the first two arguments to
// any computed
function withAppContextDecorator<T>(
  fn: (get: Get, appContext: any) => T,
  ctx?: any
): (get: Get) => T {
  return (get: Get) => {
    return fn(get, ctx || appContext);
  };
}

export const presenter = {
  // use initialState withAppContextDecorator decorator defined above
  state: mapValues(initialState, (value) => {
    if (isFunction(value)) {
      return withAppContextDecorator(value, appContext);
    }
    return value;
  }),
  providers: {
    appContext,
  },
  sequences: presenterSequences,
};
