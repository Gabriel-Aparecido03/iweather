import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"
import { fireEvent, render, screen, waitFor } from "@__tests__/utils/custom-render"
import { api } from "@services/api"
import { Search } from "."

describe("Screen: Search", () => {
  it("should be shwo city option", async () => {
    jest.spyOn(api,'get').mockResolvedValue({ data : mockCityAPIResponse})

    render(<Search />)

    const searchInput = screen.getByTestId("search-input")
    fireEvent.changeText(searchInput, "São Paulo")

    const option = await waitFor(() => screen.findByText(/São paulo/i))
    expect(option).toBeTruthy()
  })
})