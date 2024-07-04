import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/custom-render";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { Dashboard } from ".";

describe("Screen: Dashboard", () => {

  beforeAll( async () => {
    const city = {
      id: "1",
      name: "Rio do Sul, BR",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);
  })

  it("should be show city weather details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitFor(() =>  expect(screen.findByText(/rio do sul/i)).toBeTruthy())
  });

  it("should be show another selected weather details", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))

    const city = {
      id: "1",
      name: "Rio do Sul, BR",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    const cityName = 'lorem-city'

    await waitFor(() => act(() => {
      const search = screen.getByText('search-input')
      fireEvent.changeText(search,cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName,{ exact : false}))
    }))

    expect(screen.getByText(cityName, { exact : false } )).toBeTruthy()
  });
});
