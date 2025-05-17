# Bảng quản lý vật tư - SLM Solar

## Cấu trúc cơ sở dữ liệu cho quản lý vật tư điện mặt trời

```sql
-- Bảng danh mục vật tư
CREATE TABLE vat_tu (
    id SERIAL PRIMARY KEY,
    ma_vat_tu VARCHAR(20) UNIQUE NOT NULL,
    ten_vat_tu VARCHAR(200) NOT NULL,
    mo_ta TEXT,
    don_vi_tinh VARCHAR(50) NOT NULL,
    loai_vat_tu VARCHAR(100) NOT NULL,
    loai_vat_tu_chi_tiet VARCHAR(100),
    hinh_anh VARCHAR(255),
    thong_so_ky_thuat JSONB,
    xuat_xu VARCHAR(100),
    thuong_hieu VARCHAR(100),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100)
);

-- Bảng nhà cung cấp
CREATE TABLE nha_cung_cap (
    id SERIAL PRIMARY KEY,
    ma_ncc VARCHAR(20) UNIQUE NOT NULL,
    ten_ncc VARCHAR(200) NOT NULL,
    dia_chi TEXT,
    sdt VARCHAR(20),
    email VARCHAR(100),
    nguoi_lien_he VARCHAR(100),
    ma_so_thue VARCHAR(50),
    ghi_chu TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng giá vật tư
CREATE TABLE gia_vat_tu (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    gia_nhap DECIMAL(15,2) NOT NULL,
    gia_ban DECIMAL(15,2) NOT NULL,
    gia_ban_buon DECIMAL(15,2),
    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    ghi_chu TEXT
);

-- Bảng kho
CREATE TABLE kho (
    id SERIAL PRIMARY KEY,
    ma_kho VARCHAR(20) UNIQUE NOT NULL,
    ten_kho VARCHAR(200) NOT NULL,
    dia_chi TEXT,
    nguoi_quan_ly VARCHAR(100),
    mo_ta TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng tồn kho
CREATE TABLE ton_kho (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    kho_id INTEGER REFERENCES kho(id),
    so_luong INTEGER NOT NULL DEFAULT 0,
    so_luong_toi_thieu INTEGER DEFAULT 0,
    so_luong_toi_da INTEGER,
    vi_tri_trong_kho VARCHAR(100),
    cap_nhat_cuoi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng phiếu nhập kho
CREATE TABLE phieu_nhap_kho (
    id SERIAL PRIMARY KEY,
    ma_phieu VARCHAR(20) UNIQUE NOT NULL,
    kho_id INTEGER REFERENCES kho(id),
    nha_cung_cap_id INTEGER REFERENCES nha_cung_cap(id),
    ngay_nhap TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_nhap VARCHAR(100) NOT NULL,
    tong_tien DECIMAL(15,2) NOT NULL,
    trang_thai VARCHAR(50) DEFAULT 'Đã nhập',
    ghi_chu TEXT,
    ma_hoa_don VARCHAR(50),
    ngay_hoa_don DATE
);

-- Bảng chi tiết phiếu nhập kho
CREATE TABLE chi_tiet_phieu_nhap (
    id SERIAL PRIMARY KEY,
    phieu_nhap_id INTEGER REFERENCES phieu_nhap_kho(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    so_luong INTEGER NOT NULL,
    don_gia DECIMAL(15,2) NOT NULL,
    thanh_tien DECIMAL(15,2) NOT NULL,
    ghi_chu TEXT
);

-- Bảng phiếu xuất kho
CREATE TABLE phieu_xuat_kho (
    id SERIAL PRIMARY KEY,
    ma_phieu VARCHAR(20) UNIQUE NOT NULL,
    kho_id INTEGER REFERENCES kho(id),
    ngay_xuat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_xuat VARCHAR(100) NOT NULL,
    don_vi_nhan VARCHAR(200),
    ly_do_xuat VARCHAR(100) NOT NULL,
    tong_tien DECIMAL(15,2) NOT NULL,
    trang_thai VARCHAR(50) DEFAULT 'Đã xuất',
    ghi_chu TEXT,
    ma_don_hang VARCHAR(50),
    ma_du_an VARCHAR(50)
);

-- Bảng chi tiết phiếu xuất kho
CREATE TABLE chi_tiet_phieu_xuat (
    id SERIAL PRIMARY KEY,
    phieu_xuat_id INTEGER REFERENCES phieu_xuat_kho(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    so_luong INTEGER NOT NULL,
    don_gia DECIMAL(15,2) NOT NULL,
    thanh_tien DECIMAL(15,2) NOT NULL,
    ghi_chu TEXT
);

-- Bảng kiểm kê kho
CREATE TABLE kiem_ke_kho (
    id SERIAL PRIMARY KEY,
    ma_kiem_ke VARCHAR(20) UNIQUE NOT NULL,
    kho_id INTEGER REFERENCES kho(id),
    ngay_kiem_ke DATE NOT NULL,
    nguoi_kiem_ke VARCHAR(100) NOT NULL,
    trang_thai VARCHAR(50) DEFAULT 'Đã kiểm kê',
    ghi_chu TEXT
);

-- Bảng chi tiết kiểm kê
CREATE TABLE chi_tiet_kiem_ke (
    id SERIAL PRIMARY KEY,
    kiem_ke_id INTEGER REFERENCES kiem_ke_kho(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    so_luong_so_sach INTEGER NOT NULL,
    so_luong_thuc_te INTEGER NOT NULL,
    chenh_lech INTEGER,
    ly_do TEXT,
    xu_ly VARCHAR(200)
);

-- Bảng thiết bị
CREATE TABLE thiet_bi (
    id SERIAL PRIMARY KEY,
    ma_thiet_bi VARCHAR(20) UNIQUE NOT NULL,
    ten_thiet_bi VARCHAR(200) NOT NULL,
    loai_thiet_bi VARCHAR(50) NOT NULL, -- 'Tấm PV', 'Biến tần', 'Pin lưu trữ'
    thuong_hieu VARCHAR(100) NOT NULL, -- JA SOLAR, SOLIS, DYNESS
    
    -- Thông số kỹ thuật chính
    cong_nghe VARCHAR(100), -- N-Type, etc.
    cong_suat DECIMAL(10,2), -- Wp cho tấm pin, kW cho biến tần
    dung_luong DECIMAL(10,2), -- kWh cho pin lưu trữ
    
    -- Kích thước và thông số vật lý
    kich_thuoc VARCHAR(100), -- Format: "2382x1134x30mm"
    khoi_luong DECIMAL(10,2), -- kg
    
    -- Thông tin giá và bảo hành
    don_gia DECIMAL(15,2) NOT NULL,
    thoi_gian_bao_hanh INTEGER,
    don_vi_bao_hanh VARCHAR(20) DEFAULT 'Năm',
    
    -- Thông tin bổ sung
    mo_ta TEXT,
    hinh_anh VARCHAR(255),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    
    -- Thông tin quản lý
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100)
);

-- Bảng combo điện mặt trời
CREATE TABLE combo_dien_mat_troi (
    id SERIAL PRIMARY KEY,
    ma_combo VARCHAR(20) UNIQUE NOT NULL,
    ten_combo VARCHAR(200) NOT NULL,
    cong_suat_he_thong DECIMAL(10,2) NOT NULL, -- kWp
    dung_luong_luu_tru DECIMAL(10,2), -- kWh, có thể NULL nếu không có pin
    san_luong_trung_binh_thang VARCHAR(100), -- Ví dụ: "500-600 kWh/tháng"
    mo_ta TEXT,
    hinh_anh VARCHAR(255),
    
    -- Thông tin giá và chi phí
    gia_ban DECIMAL(15,2) NOT NULL,
    tong_chi_phi DECIMAL(15,2), -- Tổng chi phí các thành phần
    
    -- Trạng thái và phân loại
    loai_he_thong VARCHAR(50), -- "Độc lập", "Hòa lưới", "Hybrid"
    phu_hop_cho VARCHAR(100), -- Đối tượng phù hợp
    tinh_trang VARCHAR(50) DEFAULT 'Đang bán',
    
    -- Thông tin quản lý
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100),
    ngay_cap_nhat TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100)
);

-- Bảng cấu hình thiết bị trong combo
CREATE TABLE cau_hinh_thiet_bi_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    thiet_bi_id INTEGER REFERENCES thiet_bi(id),
    so_luong INTEGER NOT NULL DEFAULT 1,
    don_gia DECIMAL(15,2) NOT NULL, -- Giá áp dụng trong combo này
    thanh_tien DECIMAL(15,2) NOT NULL, -- so_luong * don_gia
    thu_tu_hien_thi INTEGER,
    ghi_chu TEXT
);

-- Dữ liệu mẫu cho bảng thiết bị
INSERT INTO thiet_bi (
    ma_thiet_bi, 
    ten_thiet_bi, 
    loai_thiet_bi, 
    thuong_hieu, 
    cong_nghe, 
    cong_suat, 
    kich_thuoc,
    don_gia
) VALUES 
(
    'PV-JA-610',
    'Tấm PV JA SOLAR',
    'Tấm PV',
    'JA SOLAR',
    'N-Type',
    610, -- 610Wp
    '2382x1134x30',
    2100000
),
(
    'INV-SOLIS-5',
    'Biến tần SOLIS',
    'Biến tần',
    'SOLIS',
    NULL,
    5, -- 5kW
    '405x480x205',
    24800000
),
(
    'BAT-DYNESS-5.12',
    'Pin DYNESS bản RACK',
    'Pin lưu trữ',
    'DYNESS',
    'Lithium',
    5.12, -- 5.12kWh
    '558x545x150',
    20000000
);

-- Bảng loại thành phần combo
CREATE TABLE loai_thanh_phan_combo (
    id SERIAL PRIMARY KEY,
    ma_loai VARCHAR(50) UNIQUE NOT NULL,
    ten_loai VARCHAR(200) NOT NULL,
    mo_ta TEXT,
    thu_tu_hien_thi INTEGER
);

-- Bảng nhân công
CREATE TABLE nhan_cong (
    id SERIAL PRIMARY KEY,
    ma_nhan_cong VARCHAR(20) UNIQUE NOT NULL,
    ten_dich_vu VARCHAR(200) NOT NULL,
    mo_ta TEXT,
    don_gia DECIMAL(15,2) NOT NULL,
    don_vi_tinh VARCHAR(50) NOT NULL,
    loai_dich_vu VARCHAR(100) NOT NULL,
    thoi_gian_hoan_thanh INTEGER,
    don_vi_thoi_gian VARCHAR(20),
    so_nguoi_thuc_hien INTEGER DEFAULT 1,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng cấu hình combo
CREATE TABLE cau_hinh_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    loai_thanh_phan_id INTEGER REFERENCES loai_thanh_phan_combo(id),
    vat_tu_id INTEGER,
    nhan_cong_id INTEGER,
    so_luong INTEGER NOT NULL,
    don_gia DECIMAL(15,2) NOT NULL,
    thanh_tien DECIMAL(15,2) NOT NULL,
    ghi_chu TEXT,
    bat_buoc BOOLEAN DEFAULT TRUE,
    CONSTRAINT fk_vat_tu FOREIGN KEY (vat_tu_id) REFERENCES vat_tu(id),
    CONSTRAINT fk_nhan_cong FOREIGN KEY (nhan_cong_id) REFERENCES nhan_cong(id),
    CONSTRAINT check_one_not_null CHECK ((vat_tu_id IS NOT NULL AND nhan_cong_id IS NULL) OR 
                                          (vat_tu_id IS NULL AND nhan_cong_id IS NOT NULL))
);

-- Bảng vật tư liên quan cho combo
CREATE TABLE vat_tu_lien_quan_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id) ON DELETE CASCADE,
    vat_tu_id INTEGER REFERENCES vat_tu(id) ON DELETE CASCADE,
    loai_lien_ket VARCHAR(50) NOT NULL, -- 'Phụ kiện đi kèm', 'Sản phẩm thay thế', 'Đề xuất mua thêm', 'Tương thích'...
    thu_tu_hien_thi INTEGER,
    ghi_chu TEXT,
    bat_buoc BOOLEAN DEFAULT FALSE, -- Vật tư cần thiết nhưng không nằm trong cấu hình mặc định
    giam_gia_khi_mua_kem DECIMAL(5,2), -- % giảm giá khi mua kèm với combo
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    CONSTRAINT unique_vat_tu_lien_quan UNIQUE (combo_id, vat_tu_id, loai_lien_ket)
);

-- Bảng bộ thông số mặc định cho combo
CREATE TABLE thong_so_mac_dinh_combo (
    id SERIAL PRIMARY KEY,
    cong_suat DECIMAL(10,2) NOT NULL,
    so_luong_tam_pin INTEGER NOT NULL,
    cong_suat_tam_pin DECIMAL(10,2) NOT NULL,
    cong_suat_inverter DECIMAL(10,2) NOT NULL,
    dung_luong_pin_lithium DECIMAL(10,2),
    dien_tich_lap_dat DECIMAL(10,2) NOT NULL,
    so_nguoi_su_dung INTEGER,
    dien_nang_su_dung_ngay DECIMAL(10,2),
    mo_ta TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng so sánh combo
CREATE TABLE so_sanh_combo (
    id SERIAL PRIMARY KEY,
    combo_id_1 INTEGER REFERENCES combo_dien_mat_troi(id),
    combo_id_2 INTEGER REFERENCES combo_dien_mat_troi(id),
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ghi_chu TEXT,
    CONSTRAINT unique_combo_comparison UNIQUE (combo_id_1, combo_id_2)
);

-- Bảng chi tiết so sánh combo
CREATE TABLE chi_tiet_so_sanh_combo (
    id SERIAL PRIMARY KEY,
    so_sanh_id INTEGER REFERENCES so_sanh_combo(id),
    ten_tieu_chi VARCHAR(200) NOT NULL,
    gia_tri_combo_1 TEXT,
    gia_tri_combo_2 TEXT,
    chenh_lech TEXT,
    ghi_chu TEXT
);

-- Bảng bảo hành vật tư
CREATE TABLE bao_hanh_vat_tu (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    thoi_gian_bao_hanh INTEGER NOT NULL,
    don_vi_thoi_gian VARCHAR(20) NOT NULL,
    dieu_kien_bao_hanh TEXT,
    chinh_sach_bao_hanh TEXT
);

-- Bảng lịch sử giá vật tư
CREATE TABLE lich_su_gia_vat_tu (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    gia_nhap_cu DECIMAL(15,2),
    gia_nhap_moi DECIMAL(15,2),
    gia_ban_cu DECIMAL(15,2),
    gia_ban_moi DECIMAL(15,2),
    ngay_thay_doi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_thay_doi VARCHAR(100),
    ly_do TEXT
);

-- Bảng tính toán tài chính combo
CREATE TABLE tinh_toan_tai_chinh_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    chi_phi_dien_luoi_thang DECIMAL(15,2) NOT NULL, -- Chi phí điện lưới trung bình trước khi lắp đặt
    chi_phi_dien_moi_thang DECIMAL(15,2) NOT NULL, -- Chi phí điện sau khi lắp đặt (nếu có)
    san_luong_dien_trung_binh_thang DECIMAL(10,2) NOT NULL, -- kWh/tháng
    tiet_kiem_dien_nam DECIMAL(15,2), -- Tiết kiệm trong 1 năm
    tiet_kiem_10_nam DECIMAL(15,2), -- Tiết kiệm trong 10 năm
    tiet_kiem_20_nam DECIMAL(15,2), -- Tiết kiệm trong 20 năm
    tiet_kiem_25_nam DECIMAL(15,2), -- Tiết kiệm trong thời gian bảo hành tấm pin (thường 25 năm)
    gia_tri_tang_hang_nam DECIMAL(5,2), -- % giá điện tăng hàng năm (dự báo)
    chi_phi_bao_tri_nam DECIMAL(15,2), -- Chi phí bảo trì hệ thống hàng năm
    ngay_tinh_toan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tinh_toan VARCHAR(100),
    ghi_chu TEXT
);

-- Bảng cấp bậc đại lý
CREATE TABLE cap_bac_dai_ly (
    id SERIAL PRIMARY KEY,
    ma_cap_bac VARCHAR(20) UNIQUE NOT NULL,
    ten_cap_bac VARCHAR(100) NOT NULL,
    mo_ta TEXT,
    ti_le_hoa_hong_truc_tiep DECIMAL(5,2) NOT NULL, -- Tỷ lệ hoa hồng cho bán hàng trực tiếp
    ti_le_hoa_hong_cap_duoi DECIMAL(5,2) NOT NULL, -- Tỷ lệ hoa hồng từ đại lý cấp dưới
    doanh_so_toi_thieu DECIMAL(15,2), -- Doanh số tối thiểu để duy trì cấp bậc
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng đại lý
CREATE TABLE dai_ly (
    id SERIAL PRIMARY KEY,
    ma_dai_ly VARCHAR(20) UNIQUE NOT NULL,
    ten_dai_ly VARCHAR(200) NOT NULL,
    cap_bac_id INTEGER REFERENCES cap_bac_dai_ly(id),
    dai_ly_cap_tren_id INTEGER REFERENCES dai_ly(id), -- NULL nếu là đại lý cấp 1
    nguoi_dai_dien VARCHAR(100) NOT NULL,
    so_dien_thoai VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    dia_chi TEXT NOT NULL,
    ma_so_thue VARCHAR(50),
    so_tai_khoan VARCHAR(50),
    ngan_hang VARCHAR(100),
    ngay_gia_nhap DATE NOT NULL,
    ngay_ket_thuc DATE,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ghi_chu TEXT,
    doanh_so_tich_luy DECIMAL(15,2) DEFAULT 0,
    tien_thuong_tich_luy DECIMAL(15,2) DEFAULT 0,
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    ngay_cap_nhat TIMESTAMP
);

-- Bảng khu vực phụ trách của đại lý
CREATE TABLE khu_vuc_dai_ly (
    id SERIAL PRIMARY KEY,
    dai_ly_id INTEGER REFERENCES dai_ly(id),
    tinh_thanh VARCHAR(100) NOT NULL,
    quan_huyen VARCHAR(100),
    mo_ta_khu_vuc TEXT,
    doc_quyen BOOLEAN DEFAULT FALSE, -- Đánh dấu đại lý có được độc quyền khu vực không
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng đơn hàng đại lý
CREATE TABLE don_hang_dai_ly (
    id SERIAL PRIMARY KEY,
    ma_don_hang VARCHAR(20) UNIQUE NOT NULL,
    dai_ly_id INTEGER REFERENCES dai_ly(id),
    khach_hang_id INTEGER, -- Có thể liên kết với bảng khách hàng nếu có
    ngay_dat_hang TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tong_tien DECIMAL(15,2) NOT NULL,
    tien_giam_gia DECIMAL(15,2) DEFAULT 0,
    tien_thanh_toan DECIMAL(15,2) NOT NULL,
    phuong_thuc_thanh_toan VARCHAR(100),
    trang_thai_don_hang VARCHAR(50) DEFAULT 'Mới tạo',
    trang_thai_thanh_toan VARCHAR(50) DEFAULT 'Chưa thanh toán',
    dia_chi_giao_hang TEXT,
    ghi_chu TEXT,
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    ngay_cap_nhat TIMESTAMP
);

-- Bảng chi tiết đơn hàng đại lý
CREATE TABLE chi_tiet_don_hang_dai_ly (
    id SERIAL PRIMARY KEY,
    don_hang_id INTEGER REFERENCES don_hang_dai_ly(id),
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    so_luong INTEGER NOT NULL,
    don_gia DECIMAL(15,2) NOT NULL,
    thanh_tien DECIMAL(15,2) NOT NULL,
    ghi_chu TEXT,
    CONSTRAINT check_don_hang_item CHECK ((combo_id IS NOT NULL AND vat_tu_id IS NULL) OR 
                                          (combo_id IS NULL AND vat_tu_id IS NOT NULL))
);

-- Bảng hoa hồng đại lý
CREATE TABLE hoa_hong_dai_ly (
    id SERIAL PRIMARY KEY,
    dai_ly_id INTEGER REFERENCES dai_ly(id), -- Đại lý nhận hoa hồng
    don_hang_id INTEGER REFERENCES don_hang_dai_ly(id), -- Đơn hàng tạo ra hoa hồng
    dai_ly_ban_id INTEGER REFERENCES dai_ly(id), -- Đại lý bán hàng (có thể là chính nó hoặc đại lý cấp dưới)
    loai_hoa_hong VARCHAR(50) NOT NULL, -- 'Trực tiếp' hoặc 'Cấp dưới'
    ti_le_hoa_hong DECIMAL(5,2) NOT NULL, -- Tỷ lệ % hoa hồng áp dụng
    gia_tri_don_hang DECIMAL(15,2) NOT NULL, -- Giá trị đơn hàng dùng để tính hoa hồng
    tien_hoa_hong DECIMAL(15,2) NOT NULL, -- Số tiền hoa hồng
    trang_thai VARCHAR(50) DEFAULT 'Chưa thanh toán',
    ky_tinh_hoa_hong VARCHAR(20), -- Tháng/Năm tính hoa hồng, ví dụ: '01/2023'
    ngay_tinh_toan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ngay_thanh_toan TIMESTAMP,
    ghi_chu TEXT
);

-- Bảng mục tiêu doanh số đại lý
CREATE TABLE muc_tieu_dai_ly (
    id SERIAL PRIMARY KEY,
    dai_ly_id INTEGER REFERENCES dai_ly(id),
    ky_muc_tieu VARCHAR(20) NOT NULL, -- Tháng/Năm, ví dụ: '01/2023'
    doanh_so_muc_tieu DECIMAL(15,2) NOT NULL,
    thuong_dat_muc_tieu DECIMAL(15,2),
    doanh_so_dat_duoc DECIMAL(15,2) DEFAULT 0,
    trang_thai VARCHAR(50) DEFAULT 'Đang thực hiện',
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100),
    ghi_chu TEXT
);

-- Bảng chiến dịch khuyến mãi cho đại lý
CREATE TABLE chien_dich_khuyen_mai_dai_ly (
    id SERIAL PRIMARY KEY,
    ma_chien_dich VARCHAR(20) UNIQUE NOT NULL,
    ten_chien_dich VARCHAR(200) NOT NULL,
    mo_ta TEXT,
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE NOT NULL,
    loai_khuyen_mai VARCHAR(50) NOT NULL, -- 'Tăng hoa hồng', 'Giảm giá', 'Thưởng doanh số'...
    gia_tri_khuyen_mai DECIMAL(15,2) NOT NULL, -- Giá trị khuyến mãi (tiền hoặc %)
    dieu_kien_ap_dung TEXT, -- Điều kiện để được áp dụng khuyến mãi
    ap_dung_cho_cap_dai_ly VARCHAR(50), -- 'Cấp 1', 'Cấp 2', 'Tất cả'
    trang_thai VARCHAR(50) DEFAULT 'Sắp diễn ra',
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng loại khách hàng
CREATE TABLE loai_khach_hang (
    id SERIAL PRIMARY KEY,
    ma_loai VARCHAR(20) UNIQUE NOT NULL,
    ten_loai VARCHAR(100) NOT NULL,
    mo_ta TEXT,
    thu_tu_uu_tien INTEGER,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng nhóm khách hàng
CREATE TABLE nhom_khach_hang (
    id SERIAL PRIMARY KEY,
    ma_nhom VARCHAR(20) UNIQUE NOT NULL,
    ten_nhom VARCHAR(100) NOT NULL,
    mo_ta TEXT,
    muc_giam_gia_mac_dinh DECIMAL(5,2), -- % giảm giá mặc định cho nhóm
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng khách hàng
CREATE TABLE khach_hang (
    id SERIAL PRIMARY KEY,
    ma_khach_hang VARCHAR(20) UNIQUE NOT NULL,
    loai_khach_hang_id INTEGER REFERENCES loai_khach_hang(id),
    nhom_khach_hang_id INTEGER REFERENCES nhom_khach_hang(id),
    dai_ly_id INTEGER REFERENCES dai_ly(id), -- Nếu khách hàng là đại lý
    ten VARCHAR(200) NOT NULL,
    dia_chi TEXT,
    tinh_thanh VARCHAR(100),
    quan_huyen VARCHAR(100),
    phuong_xa VARCHAR(100),
    email VARCHAR(100),
    so_dien_thoai VARCHAR(20),
    ma_so_thue VARCHAR(50),
    nguoi_dai_dien VARCHAR(100),
    so_tai_khoan VARCHAR(50),
    ngan_hang VARCHAR(100),
    tong_chi_tieu DECIMAL(15,2) DEFAULT 0,
    diem_tich_luy INTEGER DEFAULT 0,
    han_muc_no DECIMAL(15,2) DEFAULT 0,
    no_hien_tai DECIMAL(15,2) DEFAULT 0,
    ngay_sinh DATE,
    gioi_tinh VARCHAR(10),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100),
    ngay_cap_nhat TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ghi_chu TEXT,
    CONSTRAINT check_dai_ly_id CHECK (dai_ly_id IS NULL OR loai_khach_hang_id = 
                                     (SELECT id FROM loai_khach_hang WHERE ma_loai = 'DAI_LY'))
);

-- Bảng thông tin khách hàng cá nhân
CREATE TABLE khach_hang_ca_nhan (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    so_cmnd VARCHAR(20),
    ngay_cap_cmnd DATE,
    noi_cap_cmnd VARCHAR(100),
    nghe_nghiep VARCHAR(100),
    thu_nhap_hang_thang DECIMAL(15,2),
    so_nguoi_trong_ho INTEGER,
    hinh_thuc_so_huu_nha VARCHAR(50),
    so_thich TEXT,
    CONSTRAINT unique_khach_hang_ca_nhan UNIQUE (khach_hang_id)
);

-- Bảng thông tin khách hàng doanh nghiệp
CREATE TABLE khach_hang_doanh_nghiep (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    ten_cong_ty VARCHAR(200) NOT NULL,
    loai_hinh_doanh_nghiep VARCHAR(100),
    linh_vuc_kinh_doanh VARCHAR(100),
    so_luong_nhan_vien INTEGER,
    doanh_thu_hang_nam DECIMAL(20,2),
    website VARCHAR(100),
    nam_thanh_lap INTEGER,
    CONSTRAINT unique_khach_hang_doanh_nghiep UNIQUE (khach_hang_id)
);

-- Bảng người liên hệ của khách hàng
CREATE TABLE nguoi_lien_he_khach_hang (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    ho_ten VARCHAR(100) NOT NULL,
    chuc_vu VARCHAR(100),
    phong_ban VARCHAR(100),
    email VARCHAR(100),
    so_dien_thoai VARCHAR(20),
    la_nguoi_lien_he_chinh BOOLEAN DEFAULT FALSE,
    ghi_chu TEXT
);

-- Bảng địa điểm lắp đặt
CREATE TABLE dia_diem_lap_dat (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    ten_dia_diem VARCHAR(200) NOT NULL,
    dia_chi TEXT NOT NULL,
    tinh_thanh VARCHAR(100),
    quan_huyen VARCHAR(100),
    phuong_xa VARCHAR(100),
    toa_do_gps VARCHAR(100), -- Định dạng "latitude,longitude"
    loai_mai VARCHAR(50), -- Mái bằng, mái ngói, mái tôn...
    dien_tich_mai DECIMAL(10,2), -- m2
    huong_mai VARCHAR(20), -- Hướng Bắc, Nam, Đông, Tây...
    goc_nghieng DECIMAL(5,2), -- Độ
    tai_trong_cho_phep DECIMAL(10,2), -- kg/m2
    hinh_anh TEXT, -- Đường dẫn đến hình ảnh hoặc mảng JSON chứa các đường dẫn
    ghi_chu TEXT,
    nguoi_khao_sat VARCHAR(100),
    ngay_khao_sat DATE
);

-- Bảng đơn hàng
CREATE TABLE don_hang (
    id SERIAL PRIMARY KEY,
    ma_don_hang VARCHAR(20) UNIQUE NOT NULL,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    dia_diem_lap_dat_id INTEGER REFERENCES dia_diem_lap_dat(id),
    dai_ly_id INTEGER REFERENCES dai_ly(id), -- Đại lý bán hàng (nếu có)
    ngay_dat_hang TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tong_tien DECIMAL(15,2) NOT NULL,
    tien_giam_gia DECIMAL(15,2) DEFAULT 0,
    tien_van_chuyen DECIMAL(15,2) DEFAULT 0,
    tien_thue DECIMAL(15,2) DEFAULT 0,
    tong_thanh_toan DECIMAL(15,2) NOT NULL,
    da_thanh_toan DECIMAL(15,2) DEFAULT 0,
    con_no DECIMAL(15,2),
    phuong_thuc_thanh_toan VARCHAR(100),
    trang_thai_don_hang VARCHAR(50) DEFAULT 'Mới đặt',
    trang_thai_thanh_toan VARCHAR(50) DEFAULT 'Chưa thanh toán',
    ngay_du_kien_lap_dat DATE,
    ngay_hoan_thanh DATE,
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    ngay_cap_nhat TIMESTAMP,
    ghi_chu TEXT
);

-- Bảng chi tiết đơn hàng
CREATE TABLE chi_tiet_don_hang (
    id SERIAL PRIMARY KEY,
    don_hang_id INTEGER REFERENCES don_hang(id),
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    nhan_cong_id INTEGER REFERENCES nhan_cong(id),
    so_luong INTEGER NOT NULL,
    don_gia DECIMAL(15,2) NOT NULL,
    giam_gia DECIMAL(15,2) DEFAULT 0,
    thanh_tien DECIMAL(15,2) NOT NULL,
    ghi_chu TEXT,
    CONSTRAINT check_chi_tiet_don_hang CHECK 
    ((combo_id IS NOT NULL AND vat_tu_id IS NULL AND nhan_cong_id IS NULL) OR 
     (combo_id IS NULL AND vat_tu_id IS NOT NULL AND nhan_cong_id IS NULL) OR
     (combo_id IS NULL AND vat_tu_id IS NULL AND nhan_cong_id IS NOT NULL))
);

-- Bảng thanh toán
CREATE TABLE thanh_toan (
    id SERIAL PRIMARY KEY,
    ma_thanh_toan VARCHAR(20) UNIQUE NOT NULL,
    don_hang_id INTEGER REFERENCES don_hang(id),
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    ngay_thanh_toan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    so_tien DECIMAL(15,2) NOT NULL,
    phuong_thuc_thanh_toan VARCHAR(100) NOT NULL,
    ma_giao_dich VARCHAR(100),
    ngan_hang VARCHAR(100),
    trang_thai VARCHAR(50) DEFAULT 'Thành công',
    nguoi_xu_ly VARCHAR(100),
    ghi_chu TEXT
);

-- Bảng lịch sử chăm sóc khách hàng
CREATE TABLE lich_su_cham_soc_khach_hang (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    ngay_tuong_tac TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    loai_tuong_tac VARCHAR(50) NOT NULL, -- 'Gọi điện', 'Email', 'Gặp mặt'...
    noi_dung TEXT,
    ket_qua VARCHAR(200),
    nguoi_thuc_hien VARCHAR(100),
    danh_gia INTEGER, -- 1-5 sao
    lich_hen_tiep_theo TIMESTAMP,
    ghi_chu TEXT
);

-- Bảng chính sách giá khách hàng
CREATE TABLE chinh_sach_gia_khach_hang (
    id SERIAL PRIMARY KEY,
    khach_hang_id INTEGER REFERENCES khach_hang(id),
    nhom_khach_hang_id INTEGER REFERENCES nhom_khach_hang(id),
    loai_san_pham VARCHAR(50), -- 'Combo', 'Vật tư', 'Tất cả'
    san_pham_id INTEGER, -- ID của combo hoặc vật tư, NULL nếu áp dụng cho tất cả
    phan_tram_giam_gia DECIMAL(5,2) NOT NULL,
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    ap_dung_cong_don BOOLEAN DEFAULT FALSE, -- Có được cộng dồn với các chương trình khuyến mãi khác không
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ghi_chu TEXT,
    CONSTRAINT check_khach_hang_or_nhom UNIQUE (khach_hang_id, nhom_khach_hang_id, loai_san_pham, san_pham_id),
    CONSTRAINT check_khach_hang_or_nhom_not_null CHECK ((khach_hang_id IS NOT NULL AND nhom_khach_hang_id IS NULL) OR 
                                                        (khach_hang_id IS NULL AND nhom_khach_hang_id IS NOT NULL))
);

-- Bảng người dùng
CREATE TABLE nguoi_dung (
    id SERIAL PRIMARY KEY,
    ten_dang_nhap VARCHAR(100) UNIQUE NOT NULL,
    mat_khau VARCHAR(255) NOT NULL, -- Được mã hóa
    email VARCHAR(100) UNIQUE NOT NULL,
    ho_ten VARCHAR(200) NOT NULL,
    so_dien_thoai VARCHAR(20),
    avatar VARCHAR(255),
    ngay_sinh DATE,
    dia_chi TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động', -- Hoạt động, Tạm khóa, Đã xóa
    lan_dang_nhap_cuoi TIMESTAMP,
    ma_xac_thuc VARCHAR(100), -- Cho chức năng reset mật khẩu
    han_ma_xac_thuc TIMESTAMP,
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100),
    ngay_cap_nhat TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    loai_tai_khoan VARCHAR(50) DEFAULT 'Hệ thống', -- Hệ thống, Google, Facebook
    token_refresh VARCHAR(255),
    cau_hoi_bao_mat VARCHAR(255),
    tra_loi_bao_mat VARCHAR(255),
    khach_hang_id INTEGER, -- Liên kết với khách hàng (nếu có)
    dai_ly_id INTEGER, -- Liên kết với đại lý (nếu có)
    nhan_vien_id INTEGER, -- Liên kết với nhân viên (nếu có)
    CONSTRAINT fk_khach_hang FOREIGN KEY (khach_hang_id) REFERENCES khach_hang(id) ON DELETE SET NULL,
    CONSTRAINT fk_dai_ly FOREIGN KEY (dai_ly_id) REFERENCES dai_ly(id) ON DELETE SET NULL
);

-- Bảng vai trò
CREATE TABLE vai_tro (
    id SERIAL PRIMARY KEY,
    ma_vai_tro VARCHAR(50) UNIQUE NOT NULL,
    ten_vai_tro VARCHAR(100) NOT NULL,
    mo_ta TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_tao VARCHAR(100)
);

-- Bảng quyền
CREATE TABLE quyen (
    id SERIAL PRIMARY KEY,
    ma_quyen VARCHAR(50) UNIQUE NOT NULL,
    ten_quyen VARCHAR(100) NOT NULL,
    mo_ta TEXT,
    nhom_quyen VARCHAR(50) NOT NULL, -- Nhóm quyền: Khách hàng, Đơn hàng, Sản phẩm, Báo cáo, Hệ thống...
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng phân quyền theo vai trò
CREATE TABLE vai_tro_quyen (
    id SERIAL PRIMARY KEY,
    vai_tro_id INTEGER REFERENCES vai_tro(id) ON DELETE CASCADE,
    quyen_id INTEGER REFERENCES quyen(id) ON DELETE CASCADE,
    ngay_cap_nhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    CONSTRAINT unique_vai_tro_quyen UNIQUE (vai_tro_id, quyen_id)
);

-- Bảng phân vai trò cho người dùng
CREATE TABLE nguoi_dung_vai_tro (
    id SERIAL PRIMARY KEY,
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id) ON DELETE CASCADE,
    vai_tro_id INTEGER REFERENCES vai_tro(id) ON DELETE CASCADE,
    ngay_gan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_gan VARCHAR(100),
    CONSTRAINT unique_nguoi_dung_vai_tro UNIQUE (nguoi_dung_id, vai_tro_id)
);

-- Bảng nhân viên (cho nhân viên sale và content manager)
CREATE TABLE nhan_vien (
    id SERIAL PRIMARY KEY,
    ma_nhan_vien VARCHAR(20) UNIQUE NOT NULL,
    ho_ten VARCHAR(200) NOT NULL,
    chuc_danh VARCHAR(100) NOT NULL,
    phong_ban VARCHAR(100) NOT NULL,
    email_cong_ty VARCHAR(100) UNIQUE NOT NULL,
    so_dien_thoai_cong_ty VARCHAR(20),
    ngay_vao_lam DATE NOT NULL,
    ngay_nghi_viec DATE,
    quan_ly_truc_tiep INTEGER REFERENCES nhan_vien(id),
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id), -- Liên kết với tài khoản người dùng
    trang_thai VARCHAR(50) DEFAULT 'Đang làm việc',
    hinh_anh VARCHAR(255),
    ghi_chu TEXT
);

-- Bảng phân công quản lý khu vực cho nhân viên sale
CREATE TABLE nhan_vien_khu_vuc (
    id SERIAL PRIMARY KEY,
    nhan_vien_id INTEGER REFERENCES nhan_vien(id) ON DELETE CASCADE,
    tinh_thanh VARCHAR(100) NOT NULL,
    quan_huyen VARCHAR(100),
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ghi_chu TEXT
);

-- Bảng phân công quản lý danh mục cho content manager
CREATE TABLE nhan_vien_danh_muc (
    id SERIAL PRIMARY KEY,
    nhan_vien_id INTEGER REFERENCES nhan_vien(id) ON DELETE CASCADE,
    loai_danh_muc VARCHAR(50) NOT NULL, -- Vật tư, Combo, Marketing, Đào tạo...
    danh_muc_id INTEGER, -- ID của danh mục cụ thể (nếu có)
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động',
    ghi_chu TEXT
);

-- Bảng lịch sử đăng nhập
CREATE TABLE lich_su_dang_nhap (
    id SERIAL PRIMARY KEY,
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id) ON DELETE CASCADE,
    thoi_gian_dang_nhap TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    thoi_gian_dang_xuat TIMESTAMP,
    ip_address VARCHAR(100),
    thiet_bi VARCHAR(200),
    trinh_duyet VARCHAR(200),
    trang_thai VARCHAR(50) -- Thành công, Thất bại
);

-- Bảng lịch sử hoạt động người dùng
CREATE TABLE lich_su_hoat_dong (
    id SERIAL PRIMARY KEY,
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id) ON DELETE CASCADE,
    thoi_gian TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hanh_dong VARCHAR(200) NOT NULL,
    doi_tuong VARCHAR(100), -- Bảng dữ liệu tác động
    doi_tuong_id INTEGER, -- ID của bản ghi tác động
    noi_dung TEXT, -- Chi tiết hành động
    ip_address VARCHAR(100)
);

-- Bảng cấu hình xác thực hai yếu tố
CREATE TABLE xac_thuc_hai_yeu_to (
    id SERIAL PRIMARY KEY,
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id) ON DELETE CASCADE,
    loai_xac_thuc VARCHAR(50) NOT NULL, -- SMS, Email, Authenticator
    ma_bi_mat VARCHAR(255), -- Mã bí mật cho Google Authenticator
    sdt_xac_thuc VARCHAR(20), -- Số điện thoại dùng để nhận mã
    trang_thai VARCHAR(50) DEFAULT 'Đã kích hoạt',
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ngay_cap_nhat TIMESTAMP
);

-- Bảng phiên làm việc
CREATE TABLE phien_lam_viec (
    id SERIAL PRIMARY KEY,
    nguoi_dung_id INTEGER REFERENCES nguoi_dung(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    thoi_gian_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    thoi_gian_het_han TIMESTAMP NOT NULL,
    ip_address VARCHAR(100),
    thiet_bi VARCHAR(200),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động' -- Hoạt động, Đã hết hạn, Đã đăng xuất
);

-- Bảng quản lý thời kỳ giá
CREATE TABLE thoi_ky_gia (
    id SERIAL PRIMARY KEY,
    ten_thoi_ky VARCHAR(100) NOT NULL,
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    mo_ta TEXT,
    trang_thai VARCHAR(50) DEFAULT 'Chưa áp dụng', -- Chưa áp dụng, Đang áp dụng, Đã kết thúc
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng giá vật tư theo thời kỳ
CREATE TABLE gia_vat_tu_theo_thoi_ky (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    thoi_ky_id INTEGER REFERENCES thoi_ky_gia(id),
    gia_nhap DECIMAL(15,2) NOT NULL,
    gia_ban DECIMAL(15,2) NOT NULL,
    gia_ban_buon DECIMAL(15,2),
    phan_tram_thay_doi DECIMAL(5,2), -- % thay đổi so với giá trước đó
    ghi_chu TEXT,
    CONSTRAINT unique_vat_tu_thoi_ky UNIQUE (vat_tu_id, thoi_ky_id)
);

-- Bảng chính sách giá vật tư
CREATE TABLE chinh_sach_gia_vat_tu (
    id SERIAL PRIMARY KEY,
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    ten_chinh_sach VARCHAR(200) NOT NULL,
    loai_chinh_sach VARCHAR(50) NOT NULL, -- Khuyến mãi, Thanh lý, Giá theo mùa...
    gia_ap_dung DECIMAL(15,2),
    phan_tram_giam_gia DECIMAL(5,2),
    ngay_bat_dau DATE NOT NULL,
    ngay_ket_thuc DATE,
    dieu_kien_ap_dung TEXT,
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    trang_thai VARCHAR(50) DEFAULT 'Chưa áp dụng'
);

-- Bảng cấu hình margin combo
CREATE TABLE cau_hinh_margin_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    ten_cau_hinh VARCHAR(100) NOT NULL,
    margin_muc_tieu DECIMAL(5,2) NOT NULL, -- % margin mong muốn
    gia_ban_de_xuat DECIMAL(15,2), -- Giá đề xuất dựa trên margin
    gia_ban_thuc_te DECIMAL(15,2), -- Giá thực tế áp dụng (có thể điều chỉnh)
    co_phan_bo_deu BOOLEAN DEFAULT FALSE, -- Phân bổ margin đều cho tất cả thành phần
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nguoi_cap_nhat VARCHAR(100),
    ngay_cap_nhat TIMESTAMP,
    trang_thai VARCHAR(50) DEFAULT 'Nháp', -- Nháp, Đã phê duyệt, Đang áp dụng
    ghi_chu TEXT
);

-- Bảng chi tiết phân bổ margin
CREATE TABLE chi_tiet_phan_bo_margin (
    id SERIAL PRIMARY KEY,
    cau_hinh_margin_id INTEGER REFERENCES cau_hinh_margin_combo(id),
    cau_hinh_combo_id INTEGER REFERENCES cau_hinh_combo(id),
    ty_trong_chi_phi DECIMAL(5,2), -- % giá gốc của thành phần so với tổng giá gốc
    margin_phan_bo DECIMAL(5,2), -- % margin được phân bổ cho thành phần
    gia_goc DECIMAL(15,2) NOT NULL, -- Giá gốc của thành phần
    gia_ban_de_xuat DECIMAL(15,2) NOT NULL, -- Giá bán đề xuất sau khi áp dụng margin
    ty_le_dieu_chinh DECIMAL(5,2) DEFAULT 0, -- % điều chỉnh so với phân bổ tự động
    ghi_chu TEXT
);

-- Bảng loại mái nhà
CREATE TABLE loai_mai_nha (
    id SERIAL PRIMARY KEY,
    ma_loai VARCHAR(20) UNIQUE NOT NULL,
    ten_loai VARCHAR(100) NOT NULL, -- Mái ngói, Mái tôn, Mái bê tông...
    mo_ta TEXT,
    dac_diem_ky_thuat TEXT, -- Đặc điểm kỹ thuật chung của loại mái
    luu_y_lap_dat TEXT, -- Các lưu ý khi lắp đặt trên loại mái này
    hinh_anh VARCHAR(255),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng phân loại hệ khung
CREATE TABLE loai_he_khung (
    id SERIAL PRIMARY KEY,
    ma_loai VARCHAR(20) UNIQUE NOT NULL,
    ten_loai VARCHAR(100) NOT NULL, -- Hệ khung mái ngói, Hệ khung mái tôn, Hệ khung mái bằng...
    loai_mai_id INTEGER REFERENCES loai_mai_nha(id), -- Loại mái phù hợp
    mo_ta TEXT,
    tai_trong_toi_da DECIMAL(10,2), -- kg/m2
    khoang_cach_thanh_ray DECIMAL(10,2), -- cm
    vat_lieu_chinh VARCHAR(100), -- Nhôm, Inox, Thép mạ...
    dac_diem_ky_thuat TEXT,
    hinh_anh VARCHAR(255),
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bảng ánh xạ vật tư hệ khung
CREATE TABLE vat_tu_he_khung (
    id SERIAL PRIMARY KEY,
    loai_he_khung_id INTEGER REFERENCES loai_he_khung(id),
    vat_tu_id INTEGER REFERENCES vat_tu(id),
    vai_tro VARCHAR(100), -- Thanh đỡ chính, Kẹp giữa, Kẹp biên...
    so_luong_tren_m2 DECIMAL(10,2), -- Số lượng trung bình trên 1m2
    thu_tu_lap_dat INTEGER, -- Thứ tự trong quy trình lắp đặt
    la_thanh_phan_bat_buoc BOOLEAN DEFAULT TRUE,
    ghi_chu TEXT
);

-- Bảng thay thế hệ khung trong combo
CREATE TABLE thay_the_he_khung_combo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES combo_dien_mat_troi(id),
    loai_he_khung_goc_id INTEGER REFERENCES loai_he_khung(id),
    loai_he_khung_thay_the_id INTEGER REFERENCES loai_he_khung(id),
    chenh_lech_gia DECIMAL(15,2), -- Chênh lệch giá khi thay đổi
    nguoi_tao VARCHAR(100),
    ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    trang_thai VARCHAR(50) DEFAULT 'Hoạt động'
);

-- Bổ sung trường loại hệ khung vào bảng cấu hình combo
ALTER TABLE cau_hinh_combo ADD COLUMN loai_he_khung_id INTEGER REFERENCES loai_he_khung(id);

-- Dữ liệu mẫu cho bảng loại mái nhà
INSERT INTO loai_mai_nha (ma_loai, ten_loai, mo_ta, dac_diem_ky_thuat, luu_y_lap_dat)
VALUES 
('MAI_NGOI', 'Mái ngói', 'Mái lợp bằng ngói đất nung hoặc ngói xi măng', 'Độ dốc thường từ 22-45 độ, cấu trúc xà gồ thường bằng gỗ hoặc thép hộp', 'Cần đảm bảo không làm vỡ ngói, sử dụng móc treo chuyên dụng'),
('MAI_TON', 'Mái tôn', 'Mái lợp bằng tôn lạnh, tôn mạ kẽm hoặc tôn mạ màu', 'Độ dốc thường từ 5-15 độ, dễ bị nóng, kết cấu thường là xà gồ thép', 'Cần xử lý chống rỉ sét tại điểm bắt vít, đảm bảo chống thấm'),
('MAI_BANG', 'Mái bằng', 'Mái bê tông cốt thép phẳng', 'Bề mặt phẳng, thường có lớp chống thấm, độ dốc thoát nước nhỏ', 'Cần đảm bảo không làm hư hại lớp chống thấm, sử dụng đế bê tông đặt nổi'),
('MAI_PANEL', 'Mái panel', 'Mái lợp bằng panel cách nhiệt (panel EPS, PU)', 'Nhẹ, có khả năng cách nhiệt, độ dốc thường từ 5-10 độ', 'Cần đảm bảo vị trí bắt vít vào vị trí xà gồ, không làm rò rỉ nước');

-- Dữ liệu mẫu cho bảng loại hệ khung
INSERT INTO loai_he_khung (ma_loai, ten_loai, loai_mai_id, mo_ta, tai_trong_toi_da, khoang_cach_thanh_ray, vat_lieu_chinh)
VALUES 
('KHUNG_NGOI', 'Hệ khung mái ngói', 1, 'Hệ khung chuyên dụng cho mái ngói với móc treo đặc biệt', 25, 60, 'Nhôm định hình'),
('KHUNG_TON', 'Hệ khung mái tôn', 2, 'Hệ khung gắn trực tiếp vào mái tôn qua vít bắt chuyên dụng', 20, 70, 'Nhôm định hình + Inox'),
('KHUNG_BANG', 'Hệ khung mái bằng', 3, 'Hệ khung đặt nổi trên mái bằng với đế bê tông', 30, 80, 'Nhôm định hình + Đế bê tông'),
('KHUNG_PANEL', 'Hệ khung mái panel', 4, 'Hệ khung chuyên dụng cho mái panel cách nhiệt', 18, 60, 'Nhôm định hình + Inox');

-- Dữ liệu mẫu cho bảng vai trò
INSERT INTO vai_tro (ma_vai_tro, ten_vai_tro, mo_ta)
VALUES 
('CUSTOMER', 'Khách hàng', 'Người dùng là khách hàng của hệ thống'),
('AGENT', 'Đại lý', 'Người dùng là đại lý của hệ thống'),
('SALES', 'Nhân viên Sale', 'Nhân viên bán hàng của công ty'),
('CONTENT', 'Quản lý nội dung', 'Nhân viên quản lý nội dung và sản phẩm'),
('ADMIN', 'Quản trị viên', 'Quản trị viên hệ thống'),
('SUPER_ADMIN', 'Quản trị viên cao cấp', 'Quản trị viên cao cấp với toàn quyền hệ thống');

-- Dữ liệu mẫu cho nhóm quyền
INSERT INTO quyen (ma_quyen, ten_quyen, mo_ta, nhom_quyen)
VALUES
-- Quyền khách hàng
('VIEW_PRODUCT', 'Xem sản phẩm', 'Xem thông tin sản phẩm và combo', 'Sản phẩm'),
('CREATE_ORDER', 'Tạo đơn hàng', 'Tạo đơn hàng mới', 'Đơn hàng'),
('VIEW_ORDER', 'Xem đơn hàng', 'Xem đơn hàng của mình', 'Đơn hàng'),
('CANCEL_ORDER', 'Hủy đơn hàng', 'Hủy đơn hàng chưa xử lý', 'Đơn hàng'),
('UPDATE_PROFILE', 'Cập nhật hồ sơ', 'Cập nhật thông tin cá nhân', 'Tài khoản'),

-- Quyền đại lý
('VIEW_COMMISSION', 'Xem hoa hồng', 'Xem báo cáo hoa hồng', 'Báo cáo'),
('VIEW_DOWNLINE', 'Xem đại lý cấp dưới', 'Xem thông tin đại lý cấp dưới', 'Đại lý'),
('CREATE_DOWNLINE', 'Tạo đại lý cấp dưới', 'Tạo đại lý cấp dưới mới', 'Đại lý'),
('VIEW_INVENTORY', 'Xem tồn kho', 'Xem thông tin tồn kho', 'Kho'),

-- Quyền nhân viên sale
('MANAGE_CUSTOMER', 'Quản lý khách hàng', 'Quản lý thông tin khách hàng', 'Khách hàng'),
('CREATE_CUSTOMER_ORDER', 'Tạo đơn hàng cho KH', 'Tạo đơn hàng cho khách hàng', 'Đơn hàng'),
('VIEW_SALES_REPORT', 'Xem báo cáo bán hàng', 'Xem báo cáo doanh số bán hàng', 'Báo cáo'),
('SET_PRICE', 'Thiết lập giá', 'Thiết lập giá cho khách hàng', 'Giá'),

-- Quyền quản lý nội dung
('MANAGE_PRODUCT', 'Quản lý sản phẩm', 'Quản lý thông tin sản phẩm', 'Sản phẩm'),
('MANAGE_COMBO', 'Quản lý combo', 'Quản lý thông tin combo', 'Sản phẩm'),
('MANAGE_PROMOTION', 'Quản lý khuyến mãi', 'Quản lý chương trình khuyến mãi', 'Marketing'),
('MANAGE_CONTENT', 'Quản lý nội dung', 'Quản lý nội dung marketing', 'Marketing'),

-- Quyền admin
('MANAGE_USER', 'Quản lý người dùng', 'Quản lý tài khoản người dùng', 'Hệ thống'),
('MANAGE_ROLE', 'Quản lý vai trò', 'Quản lý vai trò và phân quyền', 'Hệ thống'),
('MANAGE_SYSTEM', 'Quản lý hệ thống', 'Quản lý cấu hình hệ thống', 'Hệ thống'),
('VIEW_LOG', 'Xem nhật ký', 'Xem nhật ký hệ thống', 'Hệ thống');
