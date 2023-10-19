export const validateJobApplicatonForm = (formData , resumeFile) => {
  if (!formData.name || !formData.email || !formData.phone ) {
    return { isValid: false, msg: "Please fill all fields" };
  }
  const name = formData.name;
  if (name.length < 3) {
    return { isValid: false, msg: "Name is not valid" };
  }

  const email = formData.email;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return { isValid: false, msg: "Email is not valid" };
  }

  const phone = formData.phone;
  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone) || phone.length < 6 || phone.length > 20) {
    return { isValid: false, msg: "Phone is not valid" };
  }

  if (!resumeFile) {
    return { isValid: false, msg: "Please upload resume in PDF form." };
  }

  return { isValid: true, msg: "Almost valid" };
};
