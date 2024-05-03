import { getFilter } from "@utils/helpers/getFilter";
import { getSearch } from "@utils/helpers/getSearch";
import { createImages } from "../helpers/createImages";
import { type TypeArt, type TypeArts } from "@src/types";

class MuseumService {
  async getFullInformation(id: string) {
    const respone = await fetch(`${process.env.BASE_URL}/${id}`);
    const result: { data: TypeArt } = await respone.json();
    return result.data;
  }

  async getArtsSearch(
    search: string,
    limit: number,
    filter: string,
    page: number
  ): Promise<{ information: TypeArt[]; total: number } | undefined> {
    try {
      const pagination = `&limit=${limit}&page=${page}`;
      const respone = await fetch(
        `${process.env.BASE_URL}/search?${getSearch(search)}${getFilter(filter)}${pagination}`
      );

      const data: TypeArts = await respone.json();
      const arrayArts = data.data.map((item) => item.id);

      const information = await Promise.all(
        arrayArts.map(async (id) => await this.getFullInformation(String(id)))
      );
      return {
        information: createImages(information),
        total: data.pagination.total_pages
      };
    } catch (error) {
      console.log("Error with getting Search: ", (error as Error).message);
    }
  }

  async getBaseArts(
    limit: number,
    page: number
  ): Promise<TypeArt[] | undefined> {
    try {
      const respone = await fetch(
        `${process.env.BASE_URL}?limit=${limit}&page=${page}`
      );
      const result: TypeArts = await respone.json();

      return createImages(result.data);
    } catch (error) {
      console.log("Error with getting Arts: ", (error as Error).message);
    }
  }
}

const service = new MuseumService();

export { service };
