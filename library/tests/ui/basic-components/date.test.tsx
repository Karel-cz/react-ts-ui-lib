import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Date as DateInput } from "../../../ui/src/basic-components/Date";


describe("Date component: default rendering", () => {
    it("renders without crashing", () => {
        render(<DateInput />);
	const input = document.querySelector("input[type='date']");
        expect(input).toBeInTheDocument();
    });

    it("renders an <input> of type date", () => {
        render(<DateInput />);
        const input = document.querySelector("input[type='date']");
        expect(input).toBeInTheDocument();
    });

    it("renders a wrapping <div> around the input", () => {
        const { container } = render(<DateInput />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper.tagName).toBe("DIV");
    });

    it("renders with an empty value by default", () => {
        render(<DateInput />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input.value).toBe("");
    });

    it("is not disabled by default", () => {
        render(<DateInput />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).not.toBeDisabled();
    });

    it("is not required by default", () => {
        render(<DateInput />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).not.toBeRequired();
    });

    it("does not render a label by default", () => {
        render(<DateInput />);
        expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });

    it("does not render an error message by default", () => {
        render(<DateInput errorMessage="Something went wrong" />);
        // errorMessage is only shown when error=true
        expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
    });
});



describe("Date component: value prop", () => {
    it("reflects the provided string value on the input", () => {
        render(<DateInput value="2024-06-15" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input.value).toBe("2024-06-15");
    });

    it("treats an empty string value as no date selected", () => {
        render(<DateInput value="" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input.value).toBe("");
    });
});



describe("Date component: label prop", () => {
    it("renders a <label> element when the label prop is provided", () => {
        render(<DateInput label="Appointment date" />);
        expect(screen.getByText("Appointment date")).toBeInTheDocument();
    });

    it("does not render a <label> when the label prop is omitted", () => {
        const { container } = render(<DateInput />);
        expect(container.querySelector("label")).not.toBeInTheDocument();
    });

    it("associates the label with the input via id", () => {
        render(<DateInput label="Appointment date" id="appt" />);
        const label = screen.getByText("Appointment date").closest("label");
        expect(label).toHaveAttribute("for", "appt");
    });
});


describe("Date component: required prop", () => {
    it("marks the input as required when required=true", () => {
        render(<DateInput required />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toBeRequired();
    });

    it("renders the required asterisk (*) next to the label when both label and required are set", () => {
        render(<DateInput label="Start date" required />);
        expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("does not render the required asterisk when required is false", () => {
        render(<DateInput label="Start date" required={false} />);
        expect(screen.queryByText("*")).not.toBeInTheDocument();
    });

    it("does not render the asterisk when required is true but no label is given", () => {
        render(<DateInput required />);
        expect(screen.queryByText("*")).not.toBeInTheDocument();
    });
});


describe("Date component: disabled prop", () => {
    it("disables the input when disabled=true", () => {
        render(<DateInput disabled />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toBeDisabled();
    });

    it("does not disable the input when disabled=false", () => {
        render(<DateInput disabled={false} />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).not.toBeDisabled();
    });
});



describe("Date component: name and id props", () => {
    it("sets the name attribute on the input", () => {
        render(<DateInput name="dob" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("name", "dob");
    });

    it("sets the id attribute on the input", () => {
        render(<DateInput id="birth-date" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("id", "birth-date");
    });
});



describe("Date component: error and errorMessage props", () => {
    it("shows the errorMessage when error=true", () => {
        render(<DateInput error errorMessage="Invalid date" />);
        expect(screen.getByText("Invalid date")).toBeInTheDocument();
    });

    it("does not show the errorMessage when error=false", () => {
        render(<DateInput error={false} errorMessage="Invalid date" />);
        expect(screen.queryByText("Invalid date")).not.toBeInTheDocument();
    });

    it("shows no error text when error=true but errorMessage is not provided", () => {
        const { container } = render(<DateInput error />);
        const errorDiv = container.querySelector("div > div:last-child");
	expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
});



describe("Date component: hidden prop", () => {
    it("renders nothing when hidden=true", () => {
        const { container } = render(<DateInput hidden />);
        expect(container.firstChild).toBeNull();
    });

    it("renders normally when hidden=false", () => {
        render(<DateInput hidden={false} />);
        const input = document.querySelector("input[type='date']");
        expect(input).toBeInTheDocument();
    });
});



describe("Date component: noPrint prop", () => {
    it("adds the no-print class to the wrapper when noPrint=true", () => {
        const { container } = render(<DateInput noPrint />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass("no-print");
    });

    it("does not add the no-print class when noPrint=false", () => {
        const { container } = render(<DateInput noPrint={false} />);
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).not.toHaveClass("no-print");
    });
});



describe("Date component: min / max props (string))", () => {
    it("sets the min attribute on the input when min is a string", () => {
        render(<DateInput min="2024-01-01" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("min", "2024-01-01");
    });

    it("sets the max attribute on the input when max is a string", () => {
        render(<DateInput max="2024-12-31" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("max", "2024-12-31");
    });

    it("sets both min and max attributes when both string props are provided", () => {
        render(<DateInput min="2024-01-01" max="2024-12-31" />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("min", "2024-01-01");
        expect(input).toHaveAttribute("max", "2024-12-31");
    });
});



describe("Date component: min / max props (Date object)", () => {
    it("normalizes a Date object min to YYYY-MM-DD on the input", () => {
        render(<DateInput min={new globalThis.Date(2024, 0, 1)} />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("min", "2024-01-01");
    });

    it("normalizes a Date object max to YYYY-MM-DD on the input", () => {
        render(<DateInput max={new globalThis.Date(2024, 11, 31)} />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
        expect(input).toHaveAttribute("max", "2024-12-31");
    });
});


describe("Date component: range error display", () => {
    it("shows a range error message when value is before min", () => {
        render(<DateInput value="2023-12-31" min="2024-01-01" max="2024-12-31" />);
        expect(
            screen.getByText("Date must be between 2024-01-01 and 2024-12-31"),
        ).toBeInTheDocument();
    });

    it("shows a range error message when value is after max", () => {
        render(<DateInput value="2025-01-01" min="2024-01-01" max="2024-12-31" />);
        expect(
            screen.getByText("Date must be between 2024-01-01 and 2024-12-31"),
        ).toBeInTheDocument();
    });

    it("does not show a range error when value is exactly at min boundary", () => {
        render(<DateInput value="2024-01-01" min="2024-01-01" max="2024-12-31" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("does not show a range error when value is exactly at max boundary", () => {
        render(<DateInput value="2024-12-31" min="2024-01-01" max="2024-12-31" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("does not show a range error when value is within the valid range", () => {
        render(<DateInput value="2024-06-15" min="2024-01-01" max="2024-12-31" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("does not show a range error when no value is set", () => {
        render(<DateInput value="" min="2024-01-01" max="2024-12-31" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("suppresses the range error when min > max (invalid range guard)", () => {
        // When the range itself is invalid the component should not flag the value
        render(<DateInput value="2024-06-15" min="2024-12-31" max="2024-01-01" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("does not show a range error when only min is provided and value is above it", () => {
        render(<DateInput value="2025-03-01" min="2024-01-01" />);
        expect(screen.queryByText(/Date must be between/)).not.toBeInTheDocument();
    });

    it("shows a range error when only min is provided and value is below it", () => {
        render(<DateInput value="2023-01-01" min="2024-01-01" />);
        expect(screen.getByText(/Date must be between/)).toBeInTheDocument();
    });
});


describe("Date component: onChange interaction", () => {
    it("calls onChange when the date value changes", () => {
        const handleChange = jest.fn();
        render(<DateInput value="2024-06-15" onChange={handleChange} />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "2024-07-20" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("passes the change event to onChange", () => {
        const handleChange = jest.fn();
        render(<DateInput value="2024-06-15" onChange={handleChange} />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "2024-08-01" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
	const receivedEvent = handleChange.mock.calls[0][0];
        expect(receivedEvent.type).toBe("change");
    });

    it("does not fire onChange when the input is disabled", () => {
        const handleChange = jest.fn();
        render(<DateInput value="2024-06-15" onChange={handleChange} disabled />);
        const input = document.querySelector("input[type='date']") as HTMLInputElement;
	expect(input).toBeDisabled();
        expect(input).toHaveAttribute("disabled");
    });
});



describe("Date component: snapshot", () => {
    it("matches snapshot with default props", () => {
        const { container } = render(<DateInput />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot with all common props supplied", () => {
        const { container } = render(
            <DateInput
                label="Event date"
                value="2024-06-15"
                min="2024-01-01"
                max="2024-12-31"
                required
                id="event-date"
                name="eventDate"
            />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot in error state", () => {
        const { container } = render(
            <DateInput label="Due date" value="" error errorMessage="Date is required" />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
