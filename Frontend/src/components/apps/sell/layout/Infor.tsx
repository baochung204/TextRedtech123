import {
    Grid,
    InputAdornment,
    Button,
    Typography,
    Divider,
    MenuItem,
    IconButton,
    Stack
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

interface countryType {
    value: string;
    label: string;
}

const countries: countryType[] = [
    {
        value: 'india',
        label: 'India',
    },
    {
        value: 'uk',
        label: 'United Kingdom',
    },
    {
        value: 'srilanka',
        label: 'Srilanka',
    },
];

const FormSeparator = () => {
    // country
    const [country, setCountry] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    //   password
    //
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <Divider sx={{ mx: "-24px" }} />

            <Typography variant="h6" mb={3} mt={2}>
                Thông tin chung
            </Typography>
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Layout */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Grid container spacing={3}>
                {/* 1 */}
                <Grid item lg={4} md={12}>
                    <Grid item xs={12} sm={6} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Tên sản phẩm
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField id="fs-uname" placeholder="John Deo" fullWidth />
                    </Grid>
                </Grid>
                <Grid item lg={4} md={12}></Grid>
                <Grid item lg={4} md={12}></Grid>


                {/* 2 */}
                <Grid item xs={12} sm={2} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-email" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Giá niêm yết
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CustomOutlinedInput
                        endAdornment={<InputAdornment position="end">@example.com</InputAdornment>}
                        id="fs-email"
                        placeholder="john.deo"
                        fullWidth
                    />
                </Grid>
                {/* 2 */}
                <Grid item xs={12} sm={2} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-pwd" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Giá khuyến mãi
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CustomOutlinedInput
                        endAdornment={<InputAdornment position="end">@example.com</InputAdornment>}
                        id="fs-email"
                        placeholder="john.deo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ mx: "-24px" }} />
                    <Typography variant="h6" mt={2}>
                        Chi tiết sản phẩm
                    </Typography>
                </Grid>

                {/* 4 */}
                <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-fname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Full Name
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <CustomTextField id="fs-fname" placeholder="John Deo" fullWidth />
                </Grid>
                {/* 4 */}
                <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-country" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Country
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <CustomSelect
                        id="standard-select-currency"
                        value={country}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>
                </Grid>
                {/* 4 */}
                <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-date" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Birth Date
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <CustomTextField type="date" id="fs-date" placeholder="John Deo" fullWidth />
                </Grid>
                {/* 4 */}
                <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="fs-phone" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Phone no
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <CustomTextField id="fs-phone" placeholder="123 4567 201" fullWidth />
                </Grid>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={9}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button variant="text" color="error">
                            Cancel
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default FormSeparator;
