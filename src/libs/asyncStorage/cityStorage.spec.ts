import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

describe("Storage : cityStorage", () => {

  const newCity : CityProps = {
    id : '1',
    latitude : 123,
    longitude : 456,
    name : 'lorem-city'
  }

  it("should be return null when dont't have a city storaged", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull()
  });

  it("should be return city storaged", async () => {

    await saveStorageCity(newCity);
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  });

  it("should be remove city storaged", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull()
  });
});
