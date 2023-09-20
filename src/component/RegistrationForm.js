import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from 'react-select';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
  mobileNo: Yup.string().required('Mobile Number is required'),
  address: Yup.string().required('Address is required'),
  gender: Yup.string().required('Gender is required'),
  postelcode: Yup.string().required('Postelcode is required'),
  location: Yup.string().required('Location is required'),
});

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      mobileNo: '',
      address: '',
      gender: '',
      postelcode: '',
      location: '',
      profilePic: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const handleProfilePicUpload = (fileWithMeta) => {
    formik.setFieldValue('profilePic', fileWithMeta.file);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <TextField
        id="mobileNo"
        name="mobileNo"
        label="Mobile Number"
        fullWidth
        value={formik.values.mobileNo}
        onChange={formik.handleChange}
        error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
        helperText={formik.touched.mobileNo && formik.errors.mobileNo}
      />

      <TextField
        id="address"
        name="address"
        label="Address"
        fullWidth
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />

      <Select
        id="gender"
        name="gender"
        options={genderOptions}
        value={genderOptions.find((option) => option.value === formik.values.gender)}
        onChange={(selectedOption) => formik.setFieldValue('gender', selectedOption.value)}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        placeholder="Select Gender"
      />

      <TextField
        id="postelcode"
        name="postelcode"
        label="Postelcode"
        fullWidth
        value={formik.values.postelcode}
        onChange={formik.handleChange}
        error={formik.touched.postelcode && Boolean(formik.errors.postelcode)}
        helperText={formik.touched.postelcode && formik.errors.postelcode}
      />
      <Dropzone
        getUploadParams={() => ({ url: 'https://your-upload-api.com' })}
        onChangeStatus={(fileWithMeta) => handleProfilePicUpload(fileWithMeta)}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop or click to upload profile picture"
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;


