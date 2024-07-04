import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "./CityContext"

describe("Context : City Context ", () => {
  it("should be be change selected city ", async () => {
    const { result } = renderHook(() => useCity(),{ wrapper : CityProvider })

    await waitFor(() => act(() => result.current.handleChanceCity({
      id : '1',
      latitude : 123,
      longitude : 456,
      name : 'lorem-city'
    })))

    expect(result.current.city?.name).toBe('São Paulo')
  })
})