export interface ITrendGame {
  prevPrice?: number | null;
  currentPrice?: number;
  img: string;
  category: string;
  title: string ;
}
  
export interface ITopGame {
  img: string;
  category: string;
  title: string;
}           
  
export interface ICategory {
  img: string;
  category: string;
}
  
export interface IData {
  trendGames: ITrendGame[];
  topGames: ITopGame[];
  categories: ICategory[];
}
