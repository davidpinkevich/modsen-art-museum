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
  title: string;
  date_start: number;
  date_end: number;
  dimensions: string;
  description: string;
  is_public_domain: boolean;
  image_id: string | null;
}

export interface TypeArts {
  data: TypeArt[];
  pagination: {
    total_pages: number;
  };
}

export interface TypeBlockArts {
  data: TypeArt[];
  load: boolean;
  type: "main" | "random" | "favorites";
}

export interface TypeForm {
  searh: string;
}

export interface TypeForms {
  filter: string;
  load: boolean;
  setFilter: (value: string) => void;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
}

export interface TypeFilters {
  filter: string;
  load: boolean;
  setFilter: (value: string) => void;
  setPage: (value: number) => void;
}

export interface TypeContext {
  favorites: TypeArt[];
  addFavorite: (item: TypeArt) => void;
}

export interface TypeCard {
  item: TypeArt;
  type?: string;
}

interface ArtBlock {
  title: string;
  info: string;
}

export interface TypeArtsBlock {
  main: ArtBlock;
  random: ArtBlock;
  favorites: ArtBlock;
}

export interface TypePagination {
  total: number;
  load: boolean;
  page: number;
  setPage: (value: number) => void;
}

export interface TypeMenu {
  open: boolean;
}

export interface TypeBurger {
  open: boolean;
  setOpen: (value: boolean) => void;
}
