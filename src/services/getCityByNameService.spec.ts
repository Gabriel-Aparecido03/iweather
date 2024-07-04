import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("Service : getCityByNameService",  () => {
  it("should be return city infos with details", async () => {

    jest.spyOn(api, "get").mockResolvedValue({ data : mockCityAPIResponse });
    const response = await getCityByNameService("São Paulo")

    expect(response).toBeGreaterThan(0)
  });
});
