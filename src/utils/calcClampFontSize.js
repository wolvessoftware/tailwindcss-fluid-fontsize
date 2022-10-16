module.exports = (min, max, screenMin, screenMax, unit) => {
  if (min && max && screenMin && screenMax) {
    const sFtUnit = typeof unit === "string" ? unit : "rem";
    return `clamp(${min}${sFtUnit}, calc(${min}${sFtUnit} + ((${max} - ${min}) * ((100vw - ${screenMin}${sFtUnit}) / (${screenMax} - ${screenMin})))), ${max}${sFtUnit})`;
  }
  return max;
};
