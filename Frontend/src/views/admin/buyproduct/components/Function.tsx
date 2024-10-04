import { Grid, TextField } from "@mui/material";
import { ErrorMessage, Field } from 'formik';
import React from "react";

interface FunctionProps {
    values: {
        nhomFunction: string,
        tenFunction: string,
        codeFunction: string,
        levelx: string,
        khachHang: string,
        troLy: string,
        tomTat: string
    }
}

const Function: React.FC<FunctionProps> = ({ values }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Field name="nhomFunction" as={TextField} label="Nhóm Function" fullWidth />
                <ErrorMessage name="nhomFunction">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="tenFunction" as={TextField} label="Tên Function" fullWidth />
                <ErrorMessage name="tenFunction">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="codeFunction" as={TextField} label="Code Function" fullWidth />
                <ErrorMessage name="codeFunction">
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
                <Field name="khachHang" as={TextField} label="Khách Hàng" fullWidth />
                <ErrorMessage name="khachHang">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={6}>
                <Field name="troLy" as={TextField} label="Trợ Lý" fullWidth />
                <ErrorMessage name="troLy">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
            <Grid item xs={12}>
                <Field name="tomTat" as={TextField} label="Tóm Tắt" fullWidth />
                <ErrorMessage name="tomTat">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </Grid>
        </Grid>
    );
};

export default Function;
