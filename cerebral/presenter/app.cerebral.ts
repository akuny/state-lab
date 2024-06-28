import {
  sequences as cerebralSequences,
  state as cerebralState,
} from 'cerebral';
import type { ClientState } from './state';
import type { Sequences } from './';

/*
 * IMPORTANT NOTE: a file called `app.cerebral.ts` exporting these constants is
 * required in order for babel-plugin-cerebral to work. I learned this the hard
 * way.
 */
export const state = cerebralState as unknown as ClientState;
export const sequences = cerebralSequences as unknown as Sequences;
