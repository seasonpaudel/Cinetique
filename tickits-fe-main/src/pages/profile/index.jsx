const Submit = async (e) => {
  e.preventDefault();
  try {
    setIsLoading(true);
    const file = formData.file ? formData.file : formData.image;

    if (formData.newPassword !== "" && formData.confirmPassword !== "") {
      if (formData.newPassword !== formData.confirmPassword) {
        setError({
          ...initialErr,
          confirmPassword: "Must match the new password",
          form: "Must match the new password",
        });
        setIsLoading(false);
        return;
      }
      await editPassword(
        token,
        {
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        },
        controller
      );
      setFormData({ ...formData, newPassword: "", confirmPassword: "" });
    }

    const result = await editProfile(
      token,
      formData.firstName,
      formData.lastName,
      formData.phone,
      file,
      controller
    );

    const resultData = result.data.data[0];
    let first_name = resultData.first_name === "null" ? null : resultData.first_name;
    let last_name = resultData.last_name === "null" ? null : resultData.last_name;
    const image = resultData.image;
    let phone = resultData.phone === "null" ? null : resultData.phone;

    dispatch(
      usersAction.editProfile({ first_name, last_name, image, phone })
    );
    setIsLoading(false);
    setError({ ...error, success: true });
  } catch (error) {
    console.log(error);
    setIsLoading(false);
    setError({ ...initialErr, form: "An error occurred!" });
  }
};
