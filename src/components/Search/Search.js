import React from "react";
// import Tooltip from "@atlaskit/tooltip";
import Select, { components } from "react-select";
// import { colourOptions } from '../data';

const colourOptions = [
  { id: 1, label: "Badda", value: "Badda", color: "#ff0000" },
  { id: 2, label: "Mirpur", value: "Mirpur", color: "#ff0000" },
  { id: 3, label: "Banasree", value: "Banasree", color: "#ff0000" },
  { id: 4, label: "Malibagh", value: "Malibagh", color: "#ff0000" },
  { id: 5, label: "Uttara", value: "Uttara", color: "#ff0000" }
];

const MultiValueLabel = props => {
  return <components.MultiValueLabel {...props} />;
};

export default props => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueLabel }}
    styles={{
      multiValueLabel: base => ({
        ...base,
        backgroundColor: colourOptions[2].color,
        color: "white"
      })
    }}
    // defaultValue={[colourOptions[3], colourOptions[4]]}
    isMulti
    options={colourOptions}
    onChange={value => props.select(value)}
  />
);
