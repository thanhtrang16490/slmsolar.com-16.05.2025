import { defineMiddleware } from 'astro:middleware';

// Danh sách các đường dẫn sử dụng Strapi cần được chuyển hướng
const strapiRoutes = [
  '/blog/', 
  '/du-an/', 
  '/thiet-bi/', 
  '/combopack/'
];

// Danh sách các trang con không cần chuyển hướng (chúng ta sẽ cập nhật các trang này riêng)
const excludedRoutes = [
  '/blog/em-biet-khong/',
  '/blog/hieu-dung-mua-dung/',
  '/blog/hoi-xoay-hoi-xoay/',
  '/blog/review-solarmax/'
];

export const onRequest = defineMiddleware(({ url, locals, request }, next) => {
  // Lấy pathname từ URL
  const pathname = new URL(request.url).pathname;
  
  // Kiểm tra nếu đường dẫn nằm trong danh sách loại trừ
  for (const excludedRoute of excludedRoutes) {
    if (pathname === excludedRoute || pathname === excludedRoute.slice(0, -1)) {
      // Nếu đường dẫn nằm trong danh sách loại trừ, cho phép truy cập trực tiếp
      return next();
    }
  }
  
  // Xử lý các đường dẫn cần chuyển hướng
  for (const route of strapiRoutes) {
    // Kiểm tra nếu pathname bắt đầu bằng route (ví dụ: /blog/)
    // và pathname khác với route (ví dụ: không phải /blog/)
    if (pathname.startsWith(route) && pathname !== route && pathname !== route.slice(0, -1)) {
      // Chuẩn hóa route bằng cách đảm bảo nó có dấu / ở cuối
      const normalizedRoute = route.endsWith('/') ? route : route + '/';
      // Chuyển hướng về trang chính của route đó
      return Response.redirect(new URL(normalizedRoute, request.url), 302);
    }
  }
  
  return next();
});

export default { onRequest }; 