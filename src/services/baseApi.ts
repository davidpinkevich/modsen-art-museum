import { type TypeArt, type TypeArts } from "@src/types";

class MuseumService {
  async getFullInformation(id: number) {
    const respone = await fetch(`${process.env.BASE_URL!}${id}`);
    return await respone.json();
  }

  async getArtsSearch(
    search: string,
    limit: number,
    page: number
  ): Promise<TypeArt[] | undefined> {
    try {
      const respone = await fetch(
        `${process.env.BASE_URL}search?q=${search}&limit=${limit}&page=${page}`
      );

      const data: TypeArts = await respone.json();
      const arrayArts = data.data.map((item) => item.id);

      const fullInformation = await Promise.all(
        arrayArts.map(async (id) => await this.getFullInformation(id))
      );
      return fullInformation;
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
      console.log("result: ", result.data);

      return result.data;
    } catch (error) {
      console.log("Error with getting Arts: ", (error as Error).message);
    }
  }
}

const service = new MuseumService();

export { service };
