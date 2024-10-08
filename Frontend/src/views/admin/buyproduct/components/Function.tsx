import { Grid, TextField } from "@mui/material";
import { ErrorMessage, Field } from 'formik';
import React from "react";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";

interface FunctionProps {
    values: {
        nhomFunction: string,
        codeFunction: string,
        levelx: string,
    }
}

const Function: React.FC<FunctionProps> = ({ values }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Field name="nhomFunction" as={TextField} label="Nhóm Function" fullWidth  sx={{ marginBottom: 1 }} />
                <ErrorMessage name="nhomFunction">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            
            <Grid item xs={6}>
                <Field name="levelx" as={TextField} label="Level" fullWidth />
                <ErrorMessage name="levelx">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="codeFunction">
                    {({ field }: any) => (
                        <CustomTextField
                            {...field}
                            label="Code Function"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ marginBottom: 1 }}
                        />
                    )}
                </Field>
                <ErrorMessage name="codeFunction">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
        </Grid>
    );
};

export default Function;
