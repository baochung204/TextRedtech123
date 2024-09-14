import { Box, Paper, Slider } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

const valuetext = (value: any) => `${value}°C`;
const Sli = () => {
    return (
        <>
            <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Tài nguyên</CustomFormLabel>
            <Paper elevation={2} sx={{ minHeight: '4%', p: 2, backgroundColor:'#fafafa' }}>
                <Box fontWeight={500}>Số File tri thức</Box>

                <Box sx={{ width: '97%', mt: 1 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={11}
                    />
                </Box>
                <Box fontWeight={500}>Số Functions</Box>

                <Box sx={{ width: '97%', mt: 1 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={11}
                    />
                </Box>
                <Box fontWeight={500}>Dung lượng</Box>

                <Box sx={{ width: '97%', mt: 1 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={11}
                    />
                </Box>
            </Paper>


        </>
    )
}
export default Sli;