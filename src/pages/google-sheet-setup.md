---
layout: ../layouts/MarkdownLayout.astro
title: Hướng dẫn thiết lập Google Sheets API
---

# Hướng dẫn thiết lập Google Sheets API

Dưới đây là hướng dẫn chi tiết cách thiết lập Google Apps Script để nhận dữ liệu từ form trên website và lưu vào Google Sheets.

## Bước 1: Tạo Google Sheet mới

1. Truy cập [Google Sheets](https://sheets.google.com) và tạo một bảng tính mới.
2. Đặt tên cho bảng tính, ví dụ: "SLM Solar - Thông tin liên hệ".
3. Tạo các tiêu đề cột trong hàng đầu tiên:
   - A1: Số điện thoại
   - B1: Thời gian
   - C1: Trạng thái (để theo dõi việc xử lý)

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, chọn **Extensions** > **Apps Script**.
2. Xóa mã mẫu và dán đoạn mã sau:

```javascript
function doPost(e) {
  try {
    // Lấy dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // Mở Google Sheet hiện tại
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Sheet1"); // Thay đổi tên sheet nếu cần
    
    // Lấy thời gian hiện tại theo múi giờ Việt Nam
    const timestamp = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    
    // Thêm dữ liệu vào sheet
    sheet.appendRow([
      data.phone,
      timestamp,
      "Mới"
    ]);
    
    // Trả về kết quả thành công
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Trả về lỗi nếu có
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Lưu dự án với tên "SLM Solar Form Handler".

## Bước 3: Triển khai ứng dụng

1. Nhấp vào nút **Deploy** > **New deployment**.
2. Chọn loại là **Web app**.
3. Điền thông tin:
   - Description: "SLM Solar Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (Quan trọng: Chọn "Anyone" để cho phép form gửi dữ liệu)
4. Nhấp vào **Deploy**.
5. Sao chép URL được cung cấp sau khi triển khai.

## Bước 4: Cập nhật URL trong mã nguồn website

1. Mở file `src/components/cta.astro`.
2. Tìm dòng có chứa `const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';`.
3. Thay thế `YOUR_GOOGLE_SCRIPT_URL` bằng URL bạn đã sao chép ở bước trước.
4. Lưu file và triển khai lại website.

## Lưu ý bảo mật

- Google Apps Script sẽ xử lý tất cả các yêu cầu mà không cần xác thực, vì vậy không nên lưu trữ thông tin nhạy cảm.
- Nếu cần thêm bảo mật, bạn có thể thêm một khóa API vào script và kiểm tra khóa đó trong mỗi yêu cầu.
- Định kỳ kiểm tra Google Sheet để đảm bảo không có dữ liệu spam.

## Kiểm tra

Sau khi thiết lập, hãy thử gửi form trên website để đảm bảo dữ liệu được lưu vào Google Sheet. Nếu có lỗi, hãy kiểm tra console của trình duyệt để xem thông báo lỗi. 