import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: Select List", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Cidade", latitude: 123, longitude: 456 },
      { id: "2", name: "Cidade-2", latitude: 456, longitude: 123 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onPress={onPress} />);

    const selectedCity = screen.getByText("Cidade");

    fireEvent.press(selectedCity);
    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    const onPress = jest.fn();

    render(<SelectList data={[]} onPress={onPress} />);

    const { children } = screen.getByTestId('options')

    expect(children).toHaveLength(0)
  });
});
