export type AdvertisingCardProps = {
  imageAds: string;
  nameAds: string;
  labelAds: string;
  informationAds: string;
  priceAds: number;
  numberOfViews?: number | any;
  totalCalls?: number | string | any;
  colorAds?: any;
  promotionsAds?: string | any;
  promoteAds?: any;
  isDashboard?: boolean;
  isEdit?: boolean;
  isBest?: boolean;
  isHot?: boolean;
  onEdit?: VoidFunction;
  onNavigate?: VoidFunction;
};
