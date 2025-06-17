// redux/api/duaApi.ts
import { baseApi } from "./baseApi";

const duaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all duas by subcategory ID
    getDuasBySubCategory: build.query({
      query: (subCategoryId: string | number) => ({
        url: `/duas?subCategoryId=${subCategoryId}`,
        method: "GET",
      }),
      providesTags: ["Dua"],
    }),

    // Optionally: get a single dua by ID
    getSingleDua: build.query({
      query: (duaId: string | number) => ({
        url: `/duas/${duaId}`,
        method: "GET",
      }),
      providesTags: ["Dua"],
    }),
  }),
});

export const { useGetDuasBySubCategoryQuery, useGetSingleDuaQuery } = duaApi;
