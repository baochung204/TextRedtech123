// import { Avatar, Box, Divider, Grid, Typography } from "@mui/material"
// import { useState } from "react";
// import PersonIcon from '@mui/icons-material/Person';
// import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
// import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
// import CustomOutlinedInput from "src/components/forms/theme-elements/CustomOutlinedInput";

// interface StrategyProps {
//     values: {
//         anhStrategy: string,
//         nhomStrategy: string,
//         tenStrategy: string,
//         khachhangStrategy: string,
//         levelStrategy: string,
//         trolyStrategy: string,
//         tomtatStrategy: string,
//         noidungStrategy: string
//     }
// }


// const Strategy = ({ values }: StrategyProps) => {


//     const [avatarPreview, setAvatarPreview] = useState<string | null>(null);



//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             const file = e.target.files[0];
//             setAvatarPreview(URL.createObjectURL(file));
//         }
//     };

//     return (
//         <Grid container spacing={2}>
//             <Grid item xs={12} lg={4} md={12}>
//                 <Box
//                     sx={{ textAlign: 'center', justifyContent: 'center'}}
//                 >
//                     <label htmlFor="avatar-upload">
//                         <Avatar
//                             src={avatarPreview || ''}
//                             alt="avatar preview"
//                             sx={{
//                                 width: { xs: 90, sm: 110, md: 130, lg: 160 },
//                                 height: { xs: 90, sm: 110, md: 130, lg: 160 },
//                                 margin: 'auto',
//                                 fontSize: 50,
//                                 backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
//                                 color: '#9e9e9e',
//                                 cursor: 'pointer',
//                                 position: 'relative',
//                                 zIndex: 1,
//                                 borderRadius: '50%',
//                                 border: 'none',
//                                 '&:before': {
//                                     content: '""',
//                                     position: 'absolute',
//                                     top: 0,
//                                     left: 0,
//                                     right: 0,
//                                     bottom: 0,
//                                     borderRadius: '50%',
//                                     padding: '6px', // Border width
//                                     background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient
//                                     '-webkit-mask':
//                                         'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                                     maskComposite: 'exclude',
//                                     zIndex: 1, // Ensure gradient is behind the avatar
//                                 },
//                             }}
//                         >
//                             {!avatarPreview && <PersonIcon fontSize="inherit" />}
//                         </Avatar>
//                     </label>
//                     {/* Hidden file input */}
//                     <input
//                         id="avatar-upload"
//                         type="file"
//                         accept="image/*"
//                         hidden
//                         onChange={handleAvatarChange}
//                     />
//                     <Typography mt={1} fontWeight={600}>
//                         Ảnh chiến lược
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} lg={4} md={12}>
//                 <CustomFormLabel htmlFor="nhomStrategy">Nhóm chiến lược</CustomFormLabel>
//                 <CustomTextField
//                     id="nhomStrategy"
//                     variant="outlined"
//                     fullWidth
//                     placeholder="Nhập tên nhóm Function . . ."

//                 />

//                 <CustomFormLabel htmlFor="tenStrategy">Tên chiến lược</CustomFormLabel>
//                 <CustomTextField
//                     id="tenStrategy"
//                     variant="outlined"
//                     fullWidth
//                     placeholder="Nhập tên Function . . ."

//                 />

//             </Grid>
//             <Grid item xs={12} lg={4} md={12}>

//                 <CustomFormLabel htmlFor="khachhangStrategy">Khách hàng sở hữu</CustomFormLabel>
//                 <CustomTextField
//                     id="khachhangStrategy"
//                     variant="outlined"
//                     fullWidth
//                     placeholder="Nhập số lượng . . ."
//                 />
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} lg={6} md={6}>
//                         <CustomFormLabel htmlFor="levelStrategy">Level</CustomFormLabel>
//                         <CustomTextField
//                             id="levelStrategy"
//                             variant="outlined"
//                             fullWidth
//                             placeholder="Nhập level . . ."
//                         />
//                     </Grid>
//                     <Grid item xs={12} lg={6} md={6}>
//                         <CustomFormLabel htmlFor="trolyStrategy">Trợ lý áp dụng</CustomFormLabel>
//                         <CustomOutlinedInput
//                             id="trolyStrategy"
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Nhập số lượng . . ."
//                         />
//                     </Grid>
//                 </Grid>


//             </Grid>


//             <Grid item xs={12} lg={12} md={12}>
//                 <Divider />
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} lg={6} md={6}>
//                         <CustomFormLabel htmlFor="tomtatStrategy">Tóm tắt</CustomFormLabel>
//                         <CustomTextField
//                             id="tomtatStrategy"
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Nhập tóm tắt . . ."
//                             multiline
//                             rows={5}
//                         />
//                     </Grid>
//                     <Grid item xs={12} lg={6} md={6}>
//                         <CustomFormLabel htmlFor="noidungStrategy">Nội dung</CustomFormLabel>
//                         <CustomTextField
//                             id="noidungStrategy"
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Nhập nội dung . . ."
//                             multiline
//                             rows={5}
//                         />
//                     </Grid>
//                 </Grid>


//             </Grid>

//         </Grid>
//     )
// }

// export default Strategy


import {
    // Avatar, Box,
    // Divider,
    Grid, TextField,
    // Typography
} from "@mui/material"
// import PersonIcon from '@mui/icons-material/Person';
// import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
// import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
// import CustomOutlinedInput from "src/components/forms/theme-elements/CustomOutlinedInput";
import { ErrorMessage, Field } from "formik";

interface StrategyProps {
    values: {
        anhStrategy: string[],
        nhomStrategy: string,
        tenStrategy: string,
        khachhangStrategy: string,
        levelStrategy: string,
        trolyStrategy: string,
        tomtatStrategy: string,
        noidungStrategy: string
    }
}

const Strategy = ({ values }: StrategyProps) => {

    return (
        // <Grid container spacing={3}>
        //     {/* <Box<Grid item xs={12} lg={4} md={12}>

        //             sx={{ textAlign: 'center', justifyContent: 'center' }}
        //         >
        //             <Avatar
        //                 src={values.anhStrategy || ''}
        //                 alt="avatar preview"
        //                 sx={{
        //                     width: { xs: 90, sm: 110, md: 130, lg: 160 },
        //                     height: { xs: 90, sm: 110, md: 130, lg: 160 },
        //                     margin: 'auto',
        //                     fontSize: 50,
        //                     backgroundColor: values.anhStrategy ? 'transparent' : '#f0f0f0',
        //                     color: '#9e9e9e',
        //                     cursor: 'pointer',
        //                     position: 'relative',
        //                     zIndex: 1,
        //                     borderRadius: '50%',
        //                     border: 'none',
        //                     '&:before': {
        //                         content: '""',
        //                         position: 'absolute',
        //                         top: 0,
        //                         left: 0,
        //                         right: 0,
        //                         bottom: 0,
        //                         borderRadius: '50%',
        //                         padding: '6px', // Border width
        //                         background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient
        //                         '-webkit-mask':
        //                             'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        //                         mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        //                         maskComposite: 'exclude',
        //                         zIndex: 1, // Ensure gradient is behind the avatar
        //                     },
        //                 }}
        //             >
        //                 {!values.anhStrategy && <PersonIcon fontSize="inherit" />}
        //             </Avatar>
        //             <ErrorMessage name="nhomFunction">
        //                 {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //             </ErrorMessage> 
        //             <Typography mt={1} fontWeight={600}>
        //                 Ảnh chiến lược
        //             </Typography>
        //         </Box> 
        //     </Grid>*/}
        //     <Grid item xs={12} lg={4} md={12}>
        //         {/* <CustomFormLabel htmlFor="nhomStrategy">Nhóm chiến lược</CustomFormLabel>
        //         <CustomTextField
        //             id="nhomStrategy"
        //             variant="outlined"
        //             fullWidth
        //             rows={5}
        //             placeholder="Nhập tên nhóm Function . . ."
        //             value={values.nhomStrategy}
        //         /> */}
        //         {/* <Field name="nhomFunction" as={TextField} label="Nhóm chiến lược" fullWidth />
        //         <ErrorMessage name="nhomStrategy">
        //             {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //         </ErrorMessage> */}
        //         {/* <CustomFormLabel htmlFor="tenStrategy">Tên chiến lược</CustomFormLabel>
        //         <CustomTextField
        //             id="tenStrategy"
        //             variant="outlined"
        //             fullWidth
        //             placeholder="Nhập tên Function . . ."
        //             value={values.tenStrategy}
        //         /> */}
        //         {/* <Field name="tenStrategy" as={TextField} label="Tên chiến lược" fullWidth />
        //         <ErrorMessage name="tenStrategy">
        //             {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //         </ErrorMessage> */}
        //         <Grid container spacing={2}>
        //             <Grid item xs={6}>
        //                 <Field name="nhomFunction" as={TextField} label="Nhóm chiến lược" fullWidth />
        //                 <ErrorMessage name="nhomStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>
        //             <Grid item xs={6}>
        //                 <Field name="tenStrategy" as={TextField} label="Tên chiến lược" fullWidth />
        //                 <ErrorMessage name="tenStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        //     <Grid item xs={12} lg={4} md={12}>
        //         {/* <CustomFormLabel htmlFor="khachhangStrategy">Khách hàng sở hữu</CustomFormLabel>
        //         <CustomTextField
        //             id="khachhangStrategy"
        //             variant="outlined"
        //             fullWidth
        //             placeholder="Nhập số lượng . . ."
        //             value={values.khachhangStrategy}
        //         /> */}
        //         {/* <Field name="khachhangStrategy" as={TextField} label="Khách hàng chiến lược" fullWidth />
        //         <ErrorMessage name="khachhangStrategy">
        //             {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //         </ErrorMessage> */}
        //         <Grid container spacing={2}>
        //             <Grid item xs={12} lg={6} md={6}>
        //                 {/* <CustomFormLabel htmlFor="levelStrategy">Level</CustomFormLabel>
        //                 <CustomTextField
        //                     id="levelStrategy"
        //                     variant="outlined"
        //                     fullWidth
        //                     placeholder="Nhập level . . ."
        //                     value={values.levelStrategy}
        //                 /> */}
        //                 <Field name="levelStrategy" as={TextField} label="Levels chiến lược" fullWidth />
        //                 <ErrorMessage name="levelStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>

        //             <Grid item xs={12} lg={6} md={6}>
        //                 {/* <CustomFormLabel htmlFor="trolyStrategy">Trợ lý áp dụng</CustomFormLabel>
        //                 <CustomOutlinedInput
        //                     id="trolyStrategy"
        //                     fullWidth
        //                     variant="outlined"
        //                     placeholder="Nhập số lượng . . ."
        //                     value={values.trolyStrategy}
        //                 /> */}
        //                 <Field name="trolyStrategy" as={TextField} label="Trợ lý chiến lược" fullWidth />
        //                 <ErrorMessage name="trolyStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        //     <Grid item xs={12} lg={12} md={12}>
        //         <Divider />
        //         <Grid container spacing={2}>
        //             <Grid item xs={12} lg={6} md={6}>
        //                 {/* <CustomFormLabel htmlFor="tomtatStrategy">Tóm tắt</CustomFormLabel>
        //                 <CustomTextField
        //                     id="tomtatStrategy"
        //                     fullWidth
        //                     variant="outlined"
        //                     placeholder="Nhập tóm tắt . . ."
        //                     multiline
        //                     rows={5}
        //                     value={values.tomtatStrategy}
        //                 /> */}
        //                 <Field name="tomtatStrategy" as={TextField} label="Tóm tắt chiến lược" fullWidth />
        //                 <ErrorMessage name="tomtatStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>
        //             <Grid item xs={12} lg={6} md={6}>
        //                 {/* <CustomFormLabel htmlFor="noidungStrategy">Nội dung</CustomFormLabel>
        //                 <CustomTextField
        //                     id="noidungStrategy"
        //                     fullWidth
        //                     variant="outlined"
        //                     placeholder="Nhập nội dung . . ."
        //                     multiline
        //                     rows={5}
        //                     value={values.noidungStrategy}
        //                 /> */}
        //                 <Field name="noidungStrategy" as={TextField} label="Nội tăng chiến lược" fullWidth />
        //                 <ErrorMessage name="noidungStrategy">
        //                     {msg => <div style={{ color: 'red' }}>{msg}</div>}
        //                 </ErrorMessage>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Grid>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Field name="nhomStrategy" as={TextField} label="Nhóm chiến lược" fullWidth />
                <ErrorMessage name="nhomStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="tenStrategy" as={TextField} label="Tên chiến lược" fullWidth />
                <ErrorMessage name="tenStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="levelStrategy" as={TextField} label="Levels chiến lược" fullWidth />
                <ErrorMessage name="levelStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="trolyStrategy" as={TextField} label="Trợ lý chiến lược" fullWidth />
                <ErrorMessage name="trolyStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="tomtatStrategy" as={TextField} label="Tóm tắt chiến lược" fullWidth />
                <ErrorMessage name="tomtatStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="noidungStrategy" as={TextField} label="Nội tăng chiến lược" fullWidth />
                <ErrorMessage name="noidungStrategy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>

        </Grid>
    )
}

export default Strategy;
