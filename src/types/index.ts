import { type ReactNode } from "react";

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
  credit_line: string;
  place_of_origin: string;
  date_display: string;
  title: string;
  date_start: number;
  date_end: number;
  dimensions: string;
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
  data: TypeArt[] | undefined;
  load?: boolean;
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
  open: boolean;
  setOpen: (value: boolean) => void;
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

export interface TypeNotFound {
  type: string;
}

export interface TypeFallback {
  logger: string;
}

export interface TypeErrorBoundaryProps {
  children?: ReactNode;
}

export interface TypeErrorBoundaryState {
  hasError: boolean;
  info: string;
}
