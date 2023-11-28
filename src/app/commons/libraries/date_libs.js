const FormattedDate = (date) => {
  const result = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return result;
};

export default FormattedDate;
