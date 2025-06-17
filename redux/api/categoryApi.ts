import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all categories with subcategories
    getCategoriesWithSubCategories: build.query({
      query: () => ({
        url: "/sub-categories", // This matches your route: router.get('/', SubCategoryController.getCategoriesWithSubCategories)
        method: "GET",
      }),
      providesTags: ["CategoryWithSubCategory"],
    }),
  }),
});

export const { useGetCategoriesWithSubCategoriesQuery } = categoryApi;
