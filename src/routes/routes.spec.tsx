
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { render, screen, waitFor } from "@__tests__/utils/custom-render"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api"
import { Routes } from "."

describe("Routes", () => {
  it("should be render Search screen when not city selected ", async () => {
   render(<Routes />)

   const title = await waitFor(() => screen.findByText(/^escolha um local/i))

   expect(title).toBeTruthy()
  })

  it("should be render Search dashboard when city has selected ", async () => {

    jest.spyOn(api,"get").mockResolvedValue({ data : mockWeatherAPIResponse })

    const city = {
      id : '1',
      latitude : 123,
      longitude : 456,
      name : 'lorem-city'
    }

    await saveStorageCity(city)

    await waitFor(() => render(<Routes/>))

    const title = screen.getByText(city.name)
    expect(title).toBeTruthy
  })
})