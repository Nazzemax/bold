export interface ICaseCard {
  id?: string;
  //переименовать в зависимости от DTO
  img: string;
  title: string;
  //переименовать в зависимости от DTO
  company: string;
  date: string;
  instagramFollowers: number;
  tiktokViews: number;
}