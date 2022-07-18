### Server side rendering

# là phía máy chủ

# Thường được sử dụng trong những webside SEO làm tối ưu hóa công cụ tim kiếm làm sao để tăng đc thứ hạng tìm kiếm

# load lần đầu tiên bao giờ cũng nhanh

# Thường đc sử dụng trong các trang báo trí

# Giao diện đc trả về mà nằm luôn ở page source thì nó là server side

=====

### Client side rendering

# là phía khách hàng

# khi render trả về rất ít code

# khi chuyển trang ít lode lại trang

# mã js chạy để render giao diện

# nodemone : lắng nghe sự thay đổi của file trong code rồi F5 lại ứng dụng k phải thoats như trc nữa

# Cú pháp: npm i nodemon --save-dev

====

# morgan npm => cu phap npm i morgan

=====

# handlebars đang cài đặt là bản v5.1.0 => npm i express-handlebars@5.1.0

=====

# app.set('views', path.join(\_\_dirname,'resources','views'))

=====

# cấu hình đường path ảnh Static File

=====

# app.use(express.static(path.join(\_\_dirname,'Public')))

======

# SCSS-node

======

# Route

# giúp định nghĩa ra cacs tuyến đường cho webside định nghĩa domain

# sử dụng các phương thức của http GET PUT DELETE

# req => chứa các thông tin từ clicle gửi lên server

# res => biến giúp tùy chọn cấu hình setup cấu hình trả về cái gì

======

# Get method

# môĩ lần lode lại trang là phương thức get được gọi

======

# Query parameters

# Truyền dữ liệu qua chính url, tìm kiếm và lấy dữ liệu , thường được sử dụng với get methor

# http://localhost:3000/search?q=hainv%20deverloper%20full%20stark&ref=mycv&athour=hainv

======

# Form defult

# name của thẻ input là lấy value của thẻ đó và truyền lên url dưới dạng Query ParameternsParameterns

Form có các methor GET, POST

# action : the hien chung ta submit o dau url nao
