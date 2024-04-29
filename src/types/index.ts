export interface TypeLinkHeader {
  path: string;
  img: string;
  alt: string;
  type: string;
  children: React.ReactNode;
}

export interface TypeArt {
  id: number;
  artist_title: string;
  artwork_type_title: string;
  copyright_notice: string;
  date_start: number;
  date_end: number;
  dimensions: string;
  description: string;
  image_id: string;
}

export interface TypeArts {
  data: TypeArt[];
}

export interface TypeRandomArts extends TypeArts {
  load: boolean;
}

export interface TypeForm {
  searh: string;
}

export interface TypeContext {
  favorites: TypeArt[];
  addFavorite: (item: TypeArt) => void;
}
