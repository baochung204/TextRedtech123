export enum VndCouponScopeEnum {
  IN_SYSTEM = 'IN_SYSTEM',
  OUT_OF_SYSTEM = 'OUT_OF_SYSTEM',
}

export enum VndCouponTypeEnum {
  VALUE = 'VALUE',
  PERCENT = 'PERCENT',
}

export interface FormCreateVndCoupon {
  name: string; // Không rỗng
  quantity: number; // Có ít nhất kích thước 1
  type: VndCouponTypeEnum; // Không rỗng
  code: string; // Không rỗng
  scopeEnum: VndCouponScopeEnum; // Không rỗng
  start: Date; // LocalDateTime trong Java, tương ứng Date trong TypeScript
  end: Date; // LocalDateTime trong Java, tương ứng Date trong TypeScript
  value?: number; // Trường có thể không tồn tại (nullable)
  percent?: number; // Trường có thể không tồn tại (nullable)
  lowerBound: number; // Không được null
  upperBound?: number; // Trường có thể không tồn tại (nullable)
}
