import * as Yup from "yup";

export const validationSchema2 = Yup.object({
    nhomFunction: Yup.string().required("Bắt buộc nhập nhóm Function"),
    codeFunction: Yup.string().required("Bắt buộc nhập code Function"),
    levelx: Yup.string().required("Bắt buộc nhập levelx"),
});

export const validationSchema1 = Yup.object({
    tensanpham: Yup.string().required("Bắt buộc nhập tên sản phẩm"),
    gianiemyet: Yup.string()
        .required("Bắt buộc nhập giá niêm yết")
        .matches(/^\d+$/, "Giá niêm yết phải là số"),
    giakhuyenmai: Yup.string()
        .required("Bắt buộc nhập giá khuyến mại")
        .matches(/^\d+$/, "Giá khuyến mãi phải là số"),
});

export const validationSchema3 = Yup.object({
    nhomStrategy: Yup.string().required("Bắt buộc nhập nhóm Strategy"),
    tenStrategy: Yup.string().required("Bắt buộc nhập tên Strategy"),
    khachhangStrategy: Yup.string().required("Bắt buộc nhập khách hàng Strategy"),
    levelStrategy: Yup.string().required("Bắt buộc nhập level Strategy"),
    trolyStrategy: Yup.string().required("Bắt buộc nhập trợ lý Strategy"),
    tomtatStrategy: Yup.string().required("Bắt buộc nhập tóm tắt Strategy"),
    noidungStrategy: Yup.string().required("Bắt buộc nhập nội dung Strategy"),
});

export const validationSchema4 = Yup.object({
    files: Yup.array().required("Bắt buộc nhập files"),
});
