import React from 'react';
import { Box, Checkbox, Grid, ListItemText, MenuItem, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface CurrencyType {
  value: string;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: 'female', label: 'Nữ' },
  { value: 'male', label: 'Nam' },
  { value: 'other', label: 'Khác' },
];

const channels: CurrencyType[] = [
  { value: 'mkt', label: 'MKT' },
  { value: 'zl', label: 'Zalo' },
  { value: 'fb', label: 'Facebook' },
  { value: 'inst', label: 'Instagram' },
  { value: 'other', label: 'Other' },
];

const PopupAddList2 = () => {
  const formik = useFormik({
    initialValues: {
      gender: '',
      selectedChannels: [],
      tags: '',
      companyName: '',
      companyAddress: '',
      companyEmail: '',
      companyPhone: '',
      companyWebsite: '',
      facebookUrl: '',
      zaloUrl: '',
      instagramUrl: '',
      taxId: '', // Thêm mã số thuế công ty
      assistant: '',
    },
    validationSchema: Yup.object({
      gender: Yup.string().required('Giới tính là bắt buộc'),
      selectedChannels: Yup.array().min(1, 'Chọn ít nhất một kênh'),
      tags: Yup.string(),
      companyName: Yup.string().required('Tên công ty là bắt buộc'),
      companyAddress: Yup.string().required('Địa chỉ công ty là bắt buộc'),
      companyEmail: Yup.string().email('Email không hợp lệ').required('Email công ty là bắt buộc'),
      companyPhone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại công ty là bắt buộc'),
      companyWebsite: Yup.string().url('URL không hợp lệ'),
      facebookUrl: Yup.string().url('URL không hợp lệ'),
      zaloUrl: Yup.string().url('URL không hợp lệ'),
      instagramUrl: Yup.string().url('URL không hợp lệ'),
      taxId: Yup.string().required('Mã số thuế công ty là bắt buộc'), // Validation cho mã số thuế
      assistant: Yup.string(),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Thông tin cá nhân */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: '#fafafa' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: '#333' }}>
          Thông tin cá nhân
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="name-text">Tên khách hàng</CustomFormLabel>
            <CustomTextField
              id="name-text"
              variant="outlined"
              fullWidth
              value={formik.values.tags}
              onChange={formik.handleChange}
              name="tags"
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
            />
            <CustomFormLabel htmlFor="phone-text" sx={{ mt: 2 }}>SĐT</CustomFormLabel>
            <CustomTextField
              id="phone-text"
              variant="outlined"
              fullWidth
              value={formik.values.companyPhone}
              onChange={formik.handleChange}
              name="companyPhone"
              error={formik.touched.companyPhone && Boolean(formik.errors.companyPhone)}
              helperText={formik.touched.companyPhone && formik.errors.companyPhone}
            />
            <CustomFormLabel htmlFor="gender-select" sx={{ mt: 2 }}>Giới tính</CustomFormLabel>
            <CustomSelect
              id="gender-select"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
              fullWidth
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.gender && Boolean(formik.errors.gender) && (
              <Typography color="error" variant="body2">{formik.errors.gender}</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="email-text">Email</CustomFormLabel>
            <CustomTextField
              id="email-text"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.companyEmail}
              onChange={formik.handleChange}
              name="companyEmail"
              error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
              helperText={formik.touched.companyEmail && formik.errors.companyEmail}
            />
            <CustomFormLabel htmlFor="dob-text" sx={{ mt: 2 }}>Ngày sinh</CustomFormLabel>
            <CustomTextField
              id="dob-text"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <CustomFormLabel htmlFor="notes-text" sx={{ mt: 2 }}>Ghi chú</CustomFormLabel>
            <CustomTextField
              id="notes-text"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formik.values.tags}
              onChange={formik.handleChange}
              name="tags"
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin trợ lý và kênh */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: '#fafafa' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: '#333' }}>
          Trợ lý và kênh
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="assistant-text">Trợ lý</CustomFormLabel>
            <CustomTextField
              id="assistant-text"
              variant="outlined"
              fullWidth
              value={formik.values.assistant}
              onChange={formik.handleChange}
              name="assistant"
              error={formik.touched.assistant && Boolean(formik.errors.assistant)}
              helperText={formik.touched.assistant && formik.errors.assistant}
            />
            <CustomFormLabel htmlFor="tags-text" sx={{ mt: 2 }}>Tags</CustomFormLabel>
            <CustomTextField
              id="tags-text"
              variant="outlined"
              fullWidth
              value={formik.values.tags}
              onChange={formik.handleChange}
              name="tags"
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="channel-select">Kênh</CustomFormLabel>
            <CustomSelect
              id="channel-select"
              multiple
              value={formik.values.selectedChannels}
              onChange={(event) => {
                formik.setFieldValue('selectedChannels', event.target.value);
              }}
              name="selectedChannels"
              renderValue={(selected: any) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selected.map((value: any) => (
                    <Box
                      key={value}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        padding: '2px 6px',
                        backgroundColor: '#f1f1f1',
                      }}
                    >
                      {channels.find((channel) => channel.value === value)?.label}
                    </Box>
                  ))}
                </Box>
              )}
              fullWidth
              variant="outlined"
            >
              {channels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox checked={formik.values.selectedChannels.includes(option.value)} />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.selectedChannels && Boolean(formik.errors.selectedChannels) && (
              <Typography color="error" variant="body2">{formik.errors.selectedChannels}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin công ty */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: '#fafafa' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: '#333' }}>
          Thông tin công ty
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="companyName-text">Tên công ty</CustomFormLabel>
            <CustomTextField
              id="companyName-text"
              variant="outlined"
              fullWidth
              value={formik.values.companyName}
              onChange={formik.handleChange}
              name="companyName"
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
            />
            <CustomFormLabel htmlFor="companyAddress-text" sx={{ mt: 2 }}>Địa chỉ công ty</CustomFormLabel>
            <CustomTextField
              id="companyAddress-text"
              variant="outlined"
              fullWidth
              value={formik.values.companyAddress}
              onChange={formik.handleChange}
              name="companyAddress"
              error={formik.touched.companyAddress && Boolean(formik.errors.companyAddress)}
              helperText={formik.touched.companyAddress && formik.errors.companyAddress}
            />
            <CustomFormLabel htmlFor="companyEmail-text" sx={{ mt: 2 }}>Email công ty</CustomFormLabel>
            <CustomTextField
              id="companyEmail-text"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.companyEmail}
              onChange={formik.handleChange}
              name="companyEmail"
              error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
              helperText={formik.touched.companyEmail && formik.errors.companyEmail}
            />
            <CustomFormLabel htmlFor="taxId-text" sx={{ mt: 2 }}>Mã số thuế công ty</CustomFormLabel>
            <CustomTextField
              id="taxId-text"
              variant="outlined"
              fullWidth
              value={formik.values.taxId}
              onChange={formik.handleChange}
              name="taxId"
              error={formik.touched.taxId && Boolean(formik.errors.taxId)}
              helperText={formik.touched.taxId && formik.errors.taxId}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="companyPhone-text">Số điện thoại công ty</CustomFormLabel>
            <CustomTextField
              id="companyPhone-text"
              variant="outlined"
              fullWidth
              value={formik.values.companyPhone}
              onChange={formik.handleChange}
              name="companyPhone"
              error={formik.touched.companyPhone && Boolean(formik.errors.companyPhone)}
              helperText={formik.touched.companyPhone && formik.errors.companyPhone}
            />
            <CustomFormLabel htmlFor="companyWebsite-text" sx={{ mt: 2 }}>Website công ty</CustomFormLabel>
            <CustomTextField
              id="companyWebsite-text"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.companyWebsite}
              onChange={formik.handleChange}
              name="companyWebsite"
              error={formik.touched.companyWebsite && Boolean(formik.errors.companyWebsite)}
              helperText={formik.touched.companyWebsite && formik.errors.companyWebsite}
            />
            <CustomFormLabel htmlFor="facebookUrl-text" sx={{ mt: 2 }}>Facebook URL</CustomFormLabel>
            <CustomTextField
              id="facebookUrl-text"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.facebookUrl}
              onChange={formik.handleChange}
              name="facebookUrl"
              error={formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)}
              helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
            />
            <CustomFormLabel htmlFor="zaloUrl-text" sx={{ mt: 2 }}>Zalo URL</CustomFormLabel>
            <CustomTextField
              id="zaloUrl-text"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.zaloUrl}
              onChange={formik.handleChange}
              name="zaloUrl"
              error={formik.touched.zaloUrl && Boolean(formik.errors.zaloUrl)}
              helperText={formik.touched.zaloUrl && formik.errors.zaloUrl}
            />
            <CustomFormLabel htmlFor="instagramUrl-text" sx={{ mt: 2 }}>Instagram URL</CustomFormLabel>
            <CustomTextField
              id="instagramUrl-text"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.instagramUrl}
              onChange={formik.handleChange}
              name="instagramUrl"
              error={formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)}
              helperText={formik.touched.instagramUrl && formik.errors.instagramUrl}
            />
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt={4}>
        <Button type="submit" variant="contained" color="primary">
          Lưu
        </Button>
      </Box>
    </form>
  );
};

export default PopupAddList2;
