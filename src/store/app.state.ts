import { userDetails } from '../models/userDetails.model';

export interface AppState {
  readonly userDetails: userDetails[];
}