export interface Game {
  id: string;
  name: string;
  description: string;
  location: string;
  gameDates: Array<Date>;
  user: UserPreview;
}

export interface UserPreview {
  id: string;
  name: string;
  avatar: string;
}

export interface CalendarEvent {
  id: string;
  gameDates: Array<Date>;
}
