import { Action } from '@ngrx/store';
import { Game } from '../models/game';

export enum ActionsTypes {
  ADD_GAMES = 'ADD_GAMES',
  SEARCH = "SEARCH",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  START_EDIT = "START_EDIT",
  STOP_EDIT = "STOP_EDIT"
}

export class AddGame implements Action {
  readonly type = ActionsTypes.ADD_GAMES;

  constructor(public payload: Game) {}
}

export class SearchGames implements Action {
  readonly type = ActionsTypes.SEARCH;

  constructor(public payload: string) {}
}

export class UpdateGame implements Action {
  readonly type = ActionsTypes.UPDATE;

  constructor(public payload: {game: Game}) {}
}

export class DeleteGame implements Action {
  readonly type = ActionsTypes.DELETE;
}

export class StartEdit implements Action {
  readonly type = ActionsTypes.START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = ActionsTypes.STOP_EDIT;
}

export type GameListActions =
  AddGame |
  SearchGames |
  UpdateGame |
  DeleteGame |
  StartEdit |
  StopEdit;
