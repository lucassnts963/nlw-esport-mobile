export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export interface NewAdParams {
  name: string;
  discord: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
      newAd: undefined;
    }
  }
}
