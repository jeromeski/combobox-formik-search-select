import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Field } from "formik";

const noop = () => {};

export default function Select() {
  return (
    <Field name="fruit">
      {(props) => {
        const { form, field, meta } = props;
        console.log(field.value);
        const handleSelect = (val) => {
          form.setFieldValue(field.name, val);
          noop();
        };
        const handleBlur = () => {
          form.setFieldTouched(field.name, true);
          noop();
        };
        return (
          <div>
            <label className="text-muted">Fruits*</label>
            <Combobox
              aria-label="custom option demo"
              name={field.name}
              onSelect={handleSelect}
            >
              <ComboboxInput
                placeholder="Enter Fruit"
                onBlur={handleBlur}
                className="form-control"
              />
              <ComboboxPopover>
                <ComboboxList>
                  <ComboboxOption value="Apple">
                    <span role="img" aria-label="apple">
                      🍎
                    </span>{" "}
                    <ComboboxOptionText />
                  </ComboboxOption>
                  <ComboboxOption value="Banana">
                    <span role="img" aria-label="banana">
                      🍌
                    </span>{" "}
                    <ComboboxOptionText />
                  </ComboboxOption>
                  <ComboboxOption value="Orange">
                    <span role="img" aria-label="orange">
                      🍊
                    </span>{" "}
                    <ComboboxOptionText />
                  </ComboboxOption>
                  <ComboboxOption value="Pineapple">
                    <span role="img" aria-label="pineapple">
                      🍍
                    </span>
                    <ComboboxOptionText />
                  </ComboboxOption>
                  <ComboboxOption value="Kiwi">
                    <span role="img" aria-label="kiwi">
                      🥝
                    </span>{" "}
                    <ComboboxOptionText />
                  </ComboboxOption>
                </ComboboxList>
              </ComboboxPopover>
            </Combobox>
            <span className="text-danger">
              {meta.error && meta.touched && meta.error}
            </span>
          </div>
        );
      }}
    </Field>
  );
}
