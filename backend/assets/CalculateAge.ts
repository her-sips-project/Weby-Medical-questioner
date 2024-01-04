function calculateAge(birthdate: string | number | Date) {
  // Parse the birthdate string to a Date object
  const birthDateObject = new Date(birthdate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  let age = currentDate.getFullYear() - birthDateObject.getFullYear();

  // Check if the birthday has occurred this year
  if (
    currentDate.getMonth() < birthDateObject.getMonth() ||
    (currentDate.getMonth() === birthDateObject.getMonth() &&
      currentDate.getDate() < birthDateObject.getDate())
  ) {
    age--;
  }

  return age;
}

export default calculateAge;
