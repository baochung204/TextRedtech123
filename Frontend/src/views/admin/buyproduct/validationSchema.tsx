import * as Yup from "yup";

export const validationSchema2 = Yup.object({

    nhomFunction: Yup.string().required("Required nhomFunction"),
    codeFunction: Yup.string().required("Required codeFunction"),
    levelx: Yup.string().required("Required levelx"),

});

export const validationSchema1 = Yup.object({

    tensanpham: Yup.string().required("Required tensanpham"),
    gianiemyet: Yup.string().required("Required gianiemyet"),
    giakhuyenmai: Yup.string().required("Required giakhuyenmai"),
});

export const validationSchema3 = Yup.object({

    nhomStrategy: Yup.string().required("Required nhomStrategy"),
    tenStrategy: Yup.string().required("Required tenStrategy"),
    khachhangStrategy: Yup.string().required("Required khachhangStrategy"),
    levelStrategy: Yup.string().required("Required levelStrategy"),
    trolyStrategy: Yup.string().required("Required trolyStrategy"),
    tomtatStrategy: Yup.string().required("Required tomtatStrategy"),
    noidungStrategy: Yup.string().required("Required noidungStrategy"),
});
export const validationSchema4 = Yup.object({

    files: Yup.array().required("Required files"),
})


