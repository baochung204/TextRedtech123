import * as Yup from "yup";

export const validationSchema2 = Yup.object({
    nhomFunction: Yup.string().required("Bắt buộc nhập nhóm Function"),
    codeFunction: Yup.string().required("Bắt buộc nhập code Function"),
    levelx: Yup.string().required("Bắt buộc nhập levelx"),
});
export const validationSchema1 = Yup.object({
    tensanpham: Yup.string().required("Bắt buộc nhập tên sản phẩm"),
    gianiemyet: Yup.number()
      .typeError("Giá niêm yết phải là số")
      .required("Bắt buộc nhập giá niêm yết")
      .min(0, "Giá niêm yết không được âm"),  
    giakhuyenmai: Yup.number()
      .typeError("Giá khuyến mại phải là số")
      .required("Bắt buộc nhập giá khuyến mại")
      .min(0, "Giá khuyến mại không được âm") 
      .test(
        'is-less-than-list-price',
        'Giá khuyến mại phải nhỏ hơn giá niêm yết',
        function (value: any) {
          const { gianiemyet } = this.parent;
          return gianiemyet && value < gianiemyet;
        }
      ),
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
