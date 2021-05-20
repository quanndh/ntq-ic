/* eslint-disable @typescript-eslint/restrict-plus-operands */
// + Địa chỉ email phải bắt đầu bằng 1 ký tự
// + Địa chỉ email là tập hợp của các ký tự a-z, 0-9 và có thể có các ký tự như dấu chấm, dấu gạch dưới
// + Độ dài tối thiểu của email là 5, độ dài tối đa là 32
// + Tên miền của email có thể là tên miền cấp 1 or tên miền cấp 2
export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const numberOnlyRegex = /^[0-9]*$/;

export const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im;
export const userIdRegex = /^[a-zA-Z0-9\\._-]{3,15}$/;
// export const usernameRegex = /^[a-zA-Z0-9._-\s\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]{3,15}$/;
export const textRegex = /^[a-zA-Z\s\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]*$/;

// export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d@!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
// export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,}$/;
export const fullnameRegex = /^([aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]{1,}\s?){1,}|^([\u3131-\uD79D]\s?){1,}/;
export const usernameRegex = /^([a-zA-Z0-9\u3131-\uD79D-_.]){3,15}$/;
export function formatPhoneNumber(phoneNumberString: string | undefined | number) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const match = cleaned.match(/^(\d{2,3})(\d{4})(\d{4})$/);
  if (match) {
    return [match[1], '-', match[2], '-', match[3]].join('');
  }
  return;
}
export function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validatePass(pass: string) {
  const re = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,}$/;
  return re.test(pass);
}

export function hasWhiteSpace(s: string) {
  return /^[Aa-z]\s+$/.test(s);
}
