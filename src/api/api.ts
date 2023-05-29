import { Category, Daum, Info } from './airbnbdata';
import { data } from './data';

interface PaginatedData {
  data: Daum[];
  total: number;
  next: number | null;
  prev: number | null;
}

export const api = {
  getCategories: () => {
    return new Promise<Category[]>((resolve, _) => {
      setTimeout(() => {
        resolve(data.categories);
      }, 500);
    });
  },

  getData: ({ filter = null }: { filter?: string | null }) => {
    let aux = data.data as Daum[];

    if (filter) {
      aux = aux.filter((item) =>
        item.info.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return new Promise<Daum[]>((resolve, _) => {
      setTimeout(() => {
        resolve(aux);
      }, 500);
    });
  },

  getDataByLocation: (city: string) => {
    const searchTerm = city.toLowerCase();
    const regex = new RegExp(`^${searchTerm}`);

    const matchingCities = data.data.filter((city: Daum) =>
      regex.test(city.info.location.city.toLowerCase())
    );
    return matchingCities;
  },

  getDataPaginated: ({
    filter = null,
    limit = 20,
    offset = 0,
  }: {
    filter?: string | null;
    limit?: number;
    offset?: number;
  }) => {
    let aux = data.data as Daum[];

    if (filter) {
      aux = aux.filter(
        (item) =>
          item.info.title.toLowerCase().includes(filter.toLowerCase()) ||
          item.info.description.toLowerCase().includes(filter.toLowerCase())
      );
    }

    const page = aux.slice(offset, offset + limit);

    const res: PaginatedData = {
      data: page,
      total: aux.length,
      next: offset + limit < aux.length ? offset + limit : null,
      prev: offset - limit >= 0 ? offset - limit : null,
    };

    return new Promise<PaginatedData>((resolve, _) => {
      setTimeout(() => {
        resolve(res);
      }, 500);
    });
  },
  getDataById: (id: string): Promise<Daum | undefined> => {
    return new Promise<Daum>((resolve, _) => {
      const info = data.data;
      const result = info.find((item) => item.info.id === id);
      if (!result) {
        return null;
      }
      setTimeout(() => {
        resolve(result);
      }, 500);
    });
  },
};
