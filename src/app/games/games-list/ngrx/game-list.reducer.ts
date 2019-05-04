import * as GameListActions from './game-list.actions';
import { Game } from '../../models/game';

export interface FeatureState {
  gameList: State
}

export interface State {
  games: Game[],
  editedGame: Game,
  term: string,
  editedGameIndex: number
}

const initialState = {
  games: [
    {
      id: '1',
      name: 'test game #1 LFP 3 players',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,
      gameDates: [
        new Date('2019-05-15 15:30'),
        new Date('2019-04-15 15:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    },
    {
      id: '2',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-04-15 19:30'),
        new Date('2019-03-15 19:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }
  ],
  term: '',
  editedGame: null,
  editedGameIndex: -1
}

export function GameListReducer(state = initialState, action: GameListActions
  .GameListActions) {
  switch (action.type) {
    case GameListActions.ActionsTypes.ADD_GAMES: {
      return {
        ...state,
        games: [...state.games, action.payload]
      }
    }

    case GameListActions.ActionsTypes.SEARCH: {
      return {
        ...state,
        term: action.payload
      }
    }

    case GameListActions.ActionsTypes.UPDATE: {
      const game = state.games[state.editedGameIndex];
      const updatedGame = {
        ...game,
        ...action.payload.game
      };
      const games = [...state.games];
      games[state.editedGameIndex] = updatedGame;
      return {
        ...state,
        games: games,
        editedGame: null,
        editedGameIndex: -1
      }
    }

    case GameListActions.ActionsTypes.DELETE: {
      const games = [...state.games];
      games.splice(state.editedGameIndex, 1);
      return {
        ...state,
        games: games,
        editedGame: null,
        editedGameIndex: -1
      }
    }

    case GameListActions.ActionsTypes.START_EDIT: {
      const game = {...state.games[action.payload]}
      return {
        ...state,
        editedGame: game,
        editedGameIndex: action.payload
      }
    }

    case GameListActions.ActionsTypes.STOP_EDIT: {
      return {
        ...state,
        editedGame: null,
        editedGameIndex: -1
      }
    }

    default: {
      return state;
    }
  }
}
